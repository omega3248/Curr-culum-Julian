# Jorge Julián Ortiz Rodríguez · Portafolio profesional

Portafolio profesional con currículum descargable. Perfil de estudiante de Ingeniería Aeroespacial de la Universidad Marista de Guadalajara.

[Visitar la web pública](https://julian-ortiz-aeroespacial.jorgeortizguerra33.chatgpt.site) · [Descargar CV](dist/cv-julian-ortiz.pdf) · [Perfil de LinkedIn](https://www.linkedin.com/in/jorge-juli%C3%A1n-ortiz-rodr%C3%ADguez-333842288)

## Contenido

- Perfil y objetivo profesional.
- Fotografía personal recuperada de la página de Wix proporcionada por Julián, incluida en la web y en el CV imprimible/PDF.
- Brazo robótico impreso en PLA con placa Blue Pill y reconocimiento vectorial mediante webcam, en fase de pruebas.
- Proyectos académicos de Python y electrónica.
- Aplicación Habi, con enlace al repositorio público revisado.
- Órbita: mapa mental espacial para ordenar ideas de forma natural, visual e interactiva, con cuadros tridimensionales, conexiones, flechas, colores y guardado local. Código en el repositorio independiente `omega3248/orbita-mapa-mental`.
- Experiencia confirmada como asistente en JA Energy: apoyo en sistemas solares, análisis estadístico y programación.
- R, C++, HTML y MATLAB: nivel medio. Python y NumPy: uso académico.
- Formación, habilidades e inglés aproximado B1.
- Cursos completados y verificables: MATLAB Onramp y Statistics Onramp, de MathWorks (2024).
- Las 10 materias de la carrera con calificaciones superiores a 9, verificadas en el kárdex y excluyendo las claves de tronco común (TC).
- Currículum imprimible y descargable en PDF, correo profesional, ubicación en Guadalajara y enlaces a GitHub y LinkedIn.

Se distinguen habilidades académicas, niveles declarados e intereses. La experiencia en JA Energy y los niveles de programación fueron confirmados por Julián. No se atribuyen fechas de empleo ni resultados cuantitativos sin confirmar.

## Vista local

No requiere instalar dependencias. Desde la raíz del proyecto:

```sh
python -m http.server 8080 --directory dist
```

Abre `http://localhost:8080`. El archivo `dist/cv.html` permite guardar el currículum como PDF desde la impresión del navegador.

## Editar

- `dist/index.html`: contenido del portafolio.
- `dist/styles.css`: diseño adaptable a móvil y escritorio.
- `dist/cv.html` y `dist/cv.css`: currículum con fotografía y formato de impresión.
- `dist/cv-content.js`: proyectos y foto compartidos desde el portafolio.
- `scripts/generate-cv.mjs`: sincronización del CV y generación del PDF.
- `.github/workflows/cv-and-pages.yml`: regeneración automática y publicación cuando Pages esté habilitado.
- `dist/script.js` y `dist/cv.js`: navegación accesible e impresión.
- `dist/favicon.svg`: monograma.
- `dist/assets/julian-ortiz.jpg`: fotografía personal.

Los proyectos se editan en `dist/index.html`: `data-cv-title` y `data-cv-summary` permiten definir su versión breve para el CV. Si se omiten, se reutilizan el título y la descripción de la web. Al abrir el CV, se sincronizan los proyectos y la fotografía antes de permitir la impresión. Los demás datos profesionales se actualizan tanto en el portafolio como en el currículum.

Al subir cambios a `main`, GitHub Actions regenera `dist/cv.html` y `dist/cv-julian-ortiz.pdf` y los guarda en el repositorio. El enlace de descarga cambia de versión para evitar el PDF anterior en caché. Para generar el PDF localmente:

```sh
npm ci
npx playwright install chromium
npm run build:cv
```

## Alojamiento

La publicación actual está en Sites; la configuración se conserva en `.openai/hosting.json`. El repositorio queda preparado para GitHub Pages, con la web y el PDF generados juntos.

Para completar la migración sin un dominio de ChatGPT: abre [Settings → Pages](https://github.com/omega3248/Curr-culum-Julian/settings/pages), elige **GitHub Actions** como Source y ejecuta **Actualizar CV y publicar** desde Actions. La dirección será `https://omega3248.github.io/Curr-culum-Julian/`. Hasta habilitar Pages, el flujo genera el PDF sin intentar un despliegue. Una vez habilitado, las siguientes actualizaciones de `main` publican automáticamente web y PDF.

El contenido de GitHub no actualiza por sí mismo la publicación anterior de Sites.

## Referencias del contenido

- [Página de Wix de Julián](https://juliancitorodrigue.wixsite.com/jorge-juli): fotografía, referencia de presentación y experiencia en JA Energy confirmada por Julián.
- [MATLAB Onramp](https://matlabacademy.mathworks.com/progress/share/certificate.html?id=ebdc2bf2-8f73-4a18-9cdc-10b696f26152): curso, titular y fecha verificados en MathWorks.
- [Statistics Onramp](https://matlabacademy.mathworks.com/progress/share/certificate.html?id=1b90dbc0-02ce-4ea3-912d-d50ec5a22095): curso, titular y fecha verificados en MathWorks.
- Kárdex proporcionado por Julián: calificaciones de materias de la carrera superiores a 9, excluyendo tronco común. El documento completo no se publica.
