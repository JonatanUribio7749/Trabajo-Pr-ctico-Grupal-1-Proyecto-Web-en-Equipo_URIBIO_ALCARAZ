# TP1 - Proyecto Web en Equipo

## Enlace al proyecto desplegado

- **Deploy en Vercel:** https://tp1-uribio-alcaraz.vercel.app/
- **Repositorio de GitHub:** https://github.com/JonatanUribio7749/Trabajo-Pr-ctico-Grupal-1-Proyecto-Web-en-Equipo_URIBIO_ALCARAZ.git

## Descripción del proyecto

Este proyecto corresponde al **Trabajo Práctico Grupal 1: Proyecto Web en Equipo**. El objetivo es construir un sitio web de presentación grupal aplicando buenas prácticas de organización de archivos, HTML semántico, CSS responsive, JavaScript e integración de documentación técnica.

El sitio incluye una portada principal, páginas individuales para cada integrante, una bitácora del proceso de desarrollo y documentación en este archivo README. Además, se implementan funciones dinámicas con JavaScript y un diseño adaptable para móviles, tablets y escritorio.

## Integrantes

| Integrante | Perfil | GitHub |
|---|---|---|
| Jonatan Emanuel Uribio | Diseño, desarrollo web, branding, edición digital y comunicación visual | Completar link de GitHub |
| Marisol Alcaraz | Diseño en Figma, Data Science, UML, DER y documentación funcional | Completar link de GitHub |

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts
- SVG para avatares ilustrados
- GitHub para repositorio
- Vercel para publicación del proyecto

## Estructura de archivos

```text
TP1_Proyecto_Web_Equipo/
├── index.html
├── integrante-1.html
├── integrante-2.html
├── bitacora.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    ├── avatar-jonatan.svg
    └── avatar-marisol.svg
```

### Organización

- Los archivos HTML se encuentran en el directorio raíz.
- La hoja de estilos está ubicada en la carpeta `css`.
- El archivo JavaScript está ubicado en la carpeta `js`.
- Las imágenes/avatares están ubicados en la carpeta `img`.
- El archivo `README.md` documenta el proyecto, sus tecnologías, estilos, funciones JavaScript y uso de IA.

## Guía de estilos

### Paleta de colores

| Uso | Color | Código HEX |
|---|---|---|
| Fondo principal | Azul grisáceo claro | `#eef3fb` |
| Superficie / tarjetas | Blanco | `#ffffff` |
| Color primario | Azul | `#2563eb` |
| Color primario oscuro | Azul profundo | `#1e40af` |
| Color secundario | Violeta | `#7c3aed` |
| Acento | Cian | `#06b6d4` |
| Texto principal | Negro azulado | `#111827` |
| Texto secundario | Gris azulado | `#64748b` |
| Bordes | Gris claro | `#dbe4f0` |

### Tipografías

Se utilizaron fuentes de Google Fonts:

- **Montserrat:** utilizada en títulos, subtítulos y logo.
- **Inter:** utilizada en textos generales, párrafos y navegación.

Links de referencia:

- https://fonts.google.com/specimen/Montserrat
- https://fonts.google.com/specimen/Inter

### Iconografía e imágenes

- Se utilizaron avatares ilustrados en formato SVG para preservar la privacidad de los integrantes.
- No se utilizaron fotografías personales reales.
- Los avatares se encuentran en la carpeta `img`.

## Diseño responsive

El proyecto implementa diseño adaptable mediante media queries en los siguientes puntos de corte solicitados:

- **1200px:** ajustes para pantallas grandes y escritorios.
- **900px:** adaptación a tablets y pantallas medianas, activando menú responsive y reorganizando columnas.
- **400px:** adaptación a móviles pequeños, botones en ancho completo y tarjetas apiladas.

## JavaScript implementado

El archivo `js/main.js` contiene las siguientes funciones dinámicas:

### 1. Menú responsive

- **Ubicación:** todas las páginas.
- **Función:** permite abrir y cerrar el menú de navegación en pantallas medianas y pequeñas.
- **Elemento utilizado:** botón con id `menuToggle` y lista con id `navLinks`.

### 2. Mensaje dinámico en portada

- **Ubicación:** `index.html`.
- **Función:** al hacer clic en el botón “Mensaje del equipo”, se muestra un texto de bienvenida debajo de los botones principales.
- **Elemento utilizado:** botón con id `mensajeBtn` y párrafo con id `mensajeEquipo`.

### 3. Mostrar/Ocultar intereses personales

- **Ubicación:** páginas individuales `integrante-1.html` e `integrante-2.html`.
- **Función:** permite desplegar u ocultar la sección de intereses personales, donde se muestran películas y discos favoritos.
- **Elemento utilizado:** botón con id `toggleInfo` y sección con id `extraInfo`.

### 4. Cambio de color de tarjeta

- **Ubicación:** páginas individuales.
- **Función:** permite cambiar visualmente el fondo y borde de la tarjeta de presentación.
- **Elemento utilizado:** botón con id `changeColor` y tarjeta con id `profileCard`.

## Páginas del sitio

### Portada principal

Archivo: `index.html`

Incluye:

- Nombre del equipo.
- Presentación breve del proyecto.
- Listado de integrantes.
- Enlaces a las páginas individuales.
- Botón dinámico con JavaScript.
- Acceso a la bitácora.

### Página individual de Jonatan Emanuel Uribio

Archivo: `integrante-1.html`

Incluye:

- Avatar.
- Nombre completo.
- Ubicación actual.
- Edad.
- Habilidades.
- Películas favoritas.
- Discos favoritos.
- Funciones dinámicas de JavaScript.

### Página individual de Marisol Alcaraz

Archivo: `integrante-2.html`

Incluye:

- Avatar.
- Nombre completo.
- Ubicación actual.
- Edad.
- Habilidades.
- Películas favoritas.
- Discos favoritos.
- Funciones dinámicas de JavaScript.

### Bitácora

Archivo: `bitacora.html`

Incluye:

- Decisiones de diseño.
- Dificultades encontradas.
- Soluciones aplicadas.
- Cambios importantes realizados.
- Nota para ampliar en el TP2.

## Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizaron herramientas de Inteligencia Artificial como asistencia técnica y creativa.

### Herramientas utilizadas

- ChatGPT: asistencia para análisis de consigna, redacción de contenido, estructura HTML, organización CSS, funciones JavaScript y documentación README.

### Uso en contenido y código

La IA ayudó en:

- Interpretación de los requerimientos del TP1.
- Organización de la estructura de carpetas.
- Redacción de textos para la portada y bitácora.
- Generación de una base HTML semántica.
- Propuesta de estilos visuales en CSS.
- Implementación de funciones JavaScript simples.
- Revisión de que el proyecto incluya navegación interna, responsive design y documentación.

### Imágenes

- Se utilizaron avatares ilustrados en formato SVG.
- El criterio fue preservar la privacidad de los integrantes y mantener una estética coherente con el sitio.
- No se utilizaron fotos personales reales.


### SCREENSHOT
/img
 ├── avatar-jonatan.png
 ├── avatar-marisol.png
 ├── captura-home.png       
 ├── captura-perfil.png     
 ├── captura-bitacora.png   

