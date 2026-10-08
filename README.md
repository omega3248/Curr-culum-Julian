# Jorge Julián Ortiz Rodríguez · Portafolio profesional

Portafolio profesional con currículum descargable. Perfil de estudiante de Ingeniería Aeroespacial de la Universidad Marista de Guadalajara.

[Visitar la web pública](https://julian-ortiz-aeroespacial.jorgeortizguerra33.chatgpt.site) · [Descargar CV](dist/cv-julian-ortiz.pdf)

## Contenido

- Perfil y objetivo profesional.
- Brazo robótico impreso en PLA con placa Blue Pill y reconocimiento vectorial mediante webcam, en fase de pruebas.
- Proyectos académicos de Python y electrónica.
- Aplicación Habi, con enlace al repositorio público revisado.
- Formación, habilidades e inglés aproximado B1.
- Resultados académicos proporcionados por Julián.
- Currículum imprimible y descargable en PDF, correo profesional y contacto mediante GitHub.

Se distinguen habilidades académicas e intereses. No se incluyen empleos, certificaciones, premios, fechas de titulación o teléfono sin confirmar.

## Vista local

No requiere instalar dependencias. Desde la raíz del proyecto:

```sh
python -m http.server 8080 --directory dist
```

Abre `http://localhost:8080`. El archivo `dist/cv.html` permite guardar el currículum como PDF desde la impresión del navegador.

## Editar

- `dist/index.html`: contenido del portafolio.
- `dist/styles.css`: diseño adaptable a móvil y escritorio.
- `dist/cv.html` y `dist/cv.css`: currículum y formato de impresión.
- `dist/script.js` y `dist/cv.js`: navegación accesible e impresión.
- `dist/favicon.svg`: monograma.

Si cambias datos profesionales, actualiza tanto el portafolio como el currículum.
Regenera también `dist/cv-julian-ortiz.pdf` desde `dist/cv.html` con la opción de impresión del navegador.

## Alojamiento

Sitio estático alojado públicamente en Sites. Este repositorio contiene el código del portafolio y el currículum. La configuración de Sites está en `.openai/hosting.json`.
