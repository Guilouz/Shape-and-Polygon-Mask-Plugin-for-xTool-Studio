#  Plugin Shape & Polygon Mask para xTool Studio

¿Alguna vez has intentado crear una máscara para un posavasos redondo, una placa rectangular o un objeto inclinado en **xTool Studio**?<br />
Esperar a la extracción por IA o dibujar las máscaras a mano con el pincel lleva una eternidad, y los bordes suelen carecer de precisión.

Ahora puedes preparar tus máscaras en solo unos segundos, sin esperas relacionadas con la IA, gracias a esta extensión personalizada para la aplicación de escritorio **xTool Studio**.<br />
Añade un conjunto completo de formas geométricas interactivas y una herramienta de máscara poligonal punto por punto, accesibles directamente en `Smart Mask` -> `Extraction Methods` -> `Máscara` (así como en el modo `Spot Color`).

Dibuja, centra, redimensiona, gira y perfecciona tus máscaras **al instante, sin esperar a la extracción por IA.**

Este es un port del plugin de Gatis Udrass, al que he añadido algunas funciones nuevas y correcciones.

<br />

## ✨ Características principales

- Enmascarado instantáneo (sin espera de IA): conserva (`Retain`) o borra (`Remove`) directamente zonas de la máscara de tu imagen con formas geométricas nítidas, polígonos personalizados o archivos de máscara importados.
- Punto central interactivo (`⊕`) y tiradores de redimensionado/rotación:
  - Tras dibujar cualquier forma, esta permanece en modo de ajuste interactivo antes de aplicarse.
  - Arrastra el `punto central azul` (`⊕`) para alinear la forma con el centro exacto de tu objeto (con guías de alineación en cruz).
  - Arrastra cualquier `tirador de borde o de esquina` para redimensionar sin perder el punto central.
  - Arrastra el `tirador de rotación` para girar sin perder el punto central.
  - Ajusta la posición y el tamaño píxel a píxel con las `teclas de flecha` (`←`, `↑`, `↓`, `→`) o con los botones de desplazamiento del panel lateral.
  - Haz clic en **`✓ Aplicar`** (o pulsa `Intro`) cuando estés satisfecho, o en **`✕ Cancelar`** (`Esc`) para descartar.
- 8 modos de forma integrados (mediante el menú desplegable):
  - **`○ Círculo`** → Círculo perfecto `1:1` (ideal para posavasos redondos, monedas, medallones y adornos).
  - **`⬭ Óvalo / Elipse`** → Óvalo / elipse de proporción libre con 8 tiradores de redimensionado.
  - **`▭ Rectángulo`** → Rectángulo de proporción libre con `Radio de esquina` ajustable (`0–200 px`).
  - **`□ Cuadrado`** → Cuadrado `1:1` de lados iguales con `Radio de esquina` ajustable (`0–200 px`).
  - **`⏢ Cuadrilátero de 4 puntos`** → Cuadrilátero de 4 esquinas en el que cada una puede arrastrarse de forma independiente para adaptarse a objetos inclinados o en perspectiva.
  - **`⭔ Polígono por puntos`** → Haz clic en cualquier lugar de la imagen para colocar puntos que se conectan de inmediato en una forma cerrada en vivo. Arrastra cualquier punto para ajustarlo, arrastra el punto medio de un borde para insertar nuevos puntos, haz clic derecho en un punto para eliminarlo o arrastra el centro `⊕` para mover todo el polígono.
  - **`◎ Anillo`** → Anillo circular/elíptico con `Grosor del anillo` ajustable (`2–200 px`).
  - **`✎ Lazo a mano alzada`** → Dibuja un bucle a mano alzada y reposiciónalo si hace falta.
- Suavizado de bordes (`0–40 px`): Suaviza los bordes de la máscara para lograr transiciones fluidas en grabado e impresión UV/tinta.
- Forma centrada con 1 clic (`⊕ Crear forma centrada`): Coloca al instante una forma centrada y ajustable adaptada a tu imagen.
- Deshacer / Rehacer completos (`Ctrl+Z` / `Ctrl+Y` en Windows y `Cmd+Z` / `Cmd+Y` en macOS) y sincronización en tiempo real entre el original y la vista previa.
- Gestión de máscaras: Guarda, exporta (.json, .png) o importa (.svg, .png, .jpg, .jpeg, .webp, .json) archivos de máscara.

<br />

## ✨ Novedades añadidas a la versión original

- Añadido soporte para macOS.
- Añadido soporte para xTool Studio Pre-Release v1.10.2.
- Instalador autónomo y portátil: ya no es necesario instalar **Node.js**; el instalador descarga automáticamente el binario necesario si no está ya presente en la carpeta `node`.
- Soporte multilingüe: inglés, francés, alemán, español, italiano.
- Soporte de rotación de máscaras: ahora es posible girar una máscara.
- Soporte para importar archivos SVG: el SVG se ajusta a la imagen (90 % del tamaño, centrado, conservando la proporción) y se aplica al instante. También se añade a la biblioteca, igual que un PNG importado.
- Corregido un problema por el que la lista de máscaras guardadas no se actualizaba en tiempo real.
- Corregida la función elíptica del anillo.
- Interfaz mejorada.

<br />

## 🚀 Instalación

### Requisitos previos

- **xTool Studio v1.9.11** o **Pre-Release v1.10.2** instalado en **Windows** o en **macOS**:
   - Ubicación predeterminada en **Windows**: `%LOCALAPPDATA%\Programs\xTool Studio`; también se admiten ubicaciones estándar como `Programs`, `Program Files` y `Program Files (x86)`
   - Ubicación predeterminada en **macOS**: `/Applications/xTool Studio.app`
   
> [!NOTE]
> También es posible definir manualmente el directorio de instalación si la ruta de instalación es poco habitual.

- Descarga la última versión del **plugin Shape & Polygon Mask**: [Aquí](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/releases/latest)

> [!TIP]
> El instalador descarga automáticamente el binario de **Node.js** compatible con tu sistema. Sin embargo, también puedes descargarlo manualmente y copiar el binario en la carpeta `node`.
>
> - Descarga el último binario de **Node.js** desde [nodejs.org](https://nodejs.org/en/download) y selecciona la versión **Standalone Binary**:
>
>   - **Windows Intel/AMD** → Elige **Windows** con arquitectura **x64** → Toma el archivo `node.exe`.
>   - **Windows ARM** → Elige **Windows** con arquitectura **ARM64** → Toma el archivo `node.exe`.
>   - **Mac Intel** → Elige **macOS** con arquitectura **x64** → Toma el archivo `node` de la carpeta `bin`.
>   - **Mac Apple Silicon** → Elige **macOS** con arquitectura **ARM64** → Toma el archivo `node` de la carpeta `bin`.

<br />

**🔒 Copia de seguridad automática y segura:** antes de realizar cualquier cambio, el instalador hace automáticamente una copia de seguridad de los archivos originales.

### Instalación (Windows)

  **1.** Cierra **xTool Studio** si se está ejecutando.<br />
  **2.** Haz doble clic en el archivo **`windows.bat`**.<br />
  **3.** Escribe la opción **`1`** para ejecutar el instalador y selecciona el idioma deseado.<br />
  **4.** Abre **xTool Studio**, añade una imagen, abre `Smart Mask` y elige `Máscara` en `Extraction methods`.


### Instalación (macOS)

  **1.** Cierra **xTool Studio** si se está ejecutando.<br />
  **2.** Abre el **Terminal** y aplica **`chmod +x`** al archivo `macos.command`.<br />
  **3.** Haz doble clic en el archivo **`macos.command`**.<br />
  **4.** Escribe la opción **`1`** para ejecutar el instalador y selecciona el idioma deseado.<br />
  **5.** Si macOS rechaza el acceso de escritura a la aplicación: `Ajustes del Sistema` → `Privacidad y seguridad` → `Acceso total al disco` → Activa `Terminal`, reinicia `Terminal` y vuelve a intentarlo.<br />
  **6.** Abre **xTool Studio**, añade una imagen, abre `Smart Mask` y elige `Máscara` en `Extraction methods`.

> [!NOTE]
> Tras la refirma ad hoc, macOS puede volver a pedir permisos (archivos, llavero) y es posible que tengas que iniciar sesión de nuevo. Las actualizaciones automáticas de xTool Studio sobrescribirán el plugin: basta con volver a ejecutar el instalador.


### Idioma del plugin

El instalador pregunta qué idioma usar: `English`, `Français`, `Español`, `Italiano` o `Deutsch`.<br />
Para cambiar de idioma más adelante, vuelve a ejecutar el instalador con el otro idioma (no hace falta desinstalar antes).

<br />

## 🔄 Desinstalar / Restaurar el xTool Studio original

Para eliminar el plugin y restaurar en cualquier momento el archivo original sin modificar de xTool Studio:

  **1.** Cierra **xTool Studio**.<br />
  **2.** Haz doble clic en el archivo **`windows.bat`** en Windows, o en el archivo **`macos.command`** en macOS.<br />
  **3.** Escribe la opción **`2`** para ejecutar el desinstalador y confirma la desinstalación.

> [!NOTE]
> **Para usuarios de macOS:** para recuperar la firma original de xTool, reinstala la aplicación.

<br />

## 📑 Comprobar el estado del plugin

  **1.** Haz doble clic en el archivo **`windows.bat`** en **Windows**, o en el archivo **`macos.command`** en **macOS**.<br />
  **2.** Escribe la opción **`3`** para ejecutar la comprobación de estado.

<br />

## 💗 Créditos

Un agradecimiento especial a **Gatis Udrass** por su brillante plugin.
Puedes invitarle a un café con una donación:

<p align="left">
  <img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/PayPal-QRCode-for-Gatis-Udrass.png?raw=true" alt="Donar mediante el código QR de PayPal" width="260" />
</p>

Y también puedes darme las gracias a mí (**Cyril Guislain**) si te gustan los cambios realizados:

<p align="left">
  <img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/PayPal-QRCode-for-Cyril-Guislain.png?raw=true" alt="Donar mediante el código QR de PayPal" width="260" />
</p>

<p align="left">
  <em>Escanea el código QR de PayPal de arriba con la cámara de tu teléfono o con la aplicación de PayPal para hacer una donación. ¡Gracias por tu apoyo!</em>
</p>
