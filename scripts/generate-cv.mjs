import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

// Preserve the exact document supplied by Julián; do not render a replacement.
const expectedHash = '3a0be8dcd61fcf680abb2b0dac89ac5d3b4456bc91dd37c59f5841d63fbda8f2';
const pdf = await readFile(new URL('../dist/cv-julian-ortiz.pdf', import.meta.url));
const actualHash = createHash('sha256').update(pdf).digest('hex');
if (actualHash !== expectedHash) throw new Error('El PDF no coincide con el documento original.');
for (const file of ['index.html', 'cv.html']) {
  const source = await readFile(new URL('../dist/' + file, import.meta.url), 'utf8');
  if (!source.includes('cv-julian-ortiz.pdf?v=' + expectedHash.slice(0, 12))) {
    throw new Error(file + ': el enlace no apunta a la versión original del PDF.');
  }
}
console.log('PDF original verificado: ' + actualHash);
