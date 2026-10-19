import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
// Refresh print assets before rendering so returning visitors get the current layout.
const cvPath = resolve(root, 'cv.html');
let cvSource = await readFile(cvPath, 'utf8');
for (const asset of ['cv.css', 'cv.js']) {
  const hash = createHash('sha256').update(await readFile(resolve(root, asset))).digest('hex').slice(0, 12);
  const pattern = new RegExp(`((?:href|src)=")${asset.replace('.', '\\.')}[^"]*(")`, 'g');
  cvSource = cvSource.replace(pattern, `$1${asset}?v=${hash}$2`);
}
await writeFile(cvPath, cvSource);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const server = createServer(async (request, response) => {
  const name = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const file = resolve(root, '.' + name);
  if (!file.startsWith(root + sep) && file !== root) { response.writeHead(403).end(); return; }
  try {
    const data = await readFile(file);
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }).end(data);
  } catch { response.writeHead(404).end(); }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
let browser;
try {
  const executablePath = process.env.CV_CHROMIUM_PATH;
  browser = await chromium.launch(executablePath ? { executablePath, args: ['--no-sandbox'] } : {});
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${server.address().port}/cv.html`);
  const result = await page.evaluate(() => window.cvReady);
  if (!result?.synced) throw new Error(result?.error || 'No se pudo sincronizar el CV.');
  const projects = await page.locator('#cv-projects').evaluate(element => element.outerHTML);
  let html = await readFile(cvPath, 'utf8');
  const pattern = /<!-- projects:start -->[\s\S]*?<!-- projects:end -->/;
  if (!pattern.test(html)) throw new Error('Faltan los marcadores de proyectos del CV.');
  html = html.replace(pattern, `<!-- projects:start -->${projects}<!-- projects:end -->`);
  await writeFile(cvPath, html);
  await page.pdf({ path: resolve(root, 'cv-julian-ortiz.pdf'), preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
  const pdf = await readFile(resolve(root, 'cv-julian-ortiz.pdf'));
  const version = createHash('sha256').update(pdf).digest('hex').slice(0, 12);
  for (const filename of ['index.html', 'cv.html']) {
    const file = resolve(root, filename);
    const source = await readFile(file, 'utf8');
    await writeFile(file, source.replace(/href="cv-julian-ortiz\.pdf(?:\?v=[a-z0-9]+)?"/g, `href="cv-julian-ortiz.pdf?v=${version}"`));
  }
  console.log(`CV generado con foto y ${result.projects} proyectos (versión ${version}).`);
} finally {
  await browser?.close();
  server.close();
}
