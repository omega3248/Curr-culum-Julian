import { syncCvFromPortfolio } from './cv-content.js?v=20261019';

const printButton = document.getElementById('print-cv');
const status = document.getElementById('cv-status');
printButton.disabled = true;

window.cvReady = (async () => {
  try {
    const response = await fetch('index.html', { cache: 'no-store' });
    if (!response.ok) throw new Error('No se pudo cargar el portafolio.');
    const source = new DOMParser().parseFromString(await response.text(), 'text/html');
    const count = syncCvFromPortfolio(source, document);
    await document.fonts.ready;
    await Promise.all([...document.querySelectorAll('.resume img')].map(img => img.decode()));
    status.textContent = '';
    return { synced: true, projects: count };
  } catch (error) {
    status.textContent = 'No se pudo comprobar la última versión. Recarga la página para actualizar antes de imprimir.';
    return { synced: false, error: error.message };
  } finally {
    printButton.disabled = false;
  }
})();

printButton.addEventListener('click', async () => {
  const result = await window.cvReady;
  if (result.synced) window.print();
});
