#  Plugin Shape & Polygon Mask para xTool Studio

¿Alguna vez has intentado crear una máscara para un posavasos redondo, una placa rectangular o un objeto inclinado en **xTool Studio**?<br />
Esperar a la extracción por IA o dibujar las máscaras a mano con el pincel lleva una eternidad, y los bordes suelen carecer de precisión.

Ahora puedes preparar tus máscaras en solo unos segundos, sin esperas relacionadas con la IA, gracias a esta extensión personalizada para la aplicación de escritorio **xTool Studio**.<br />
Añade un conjunto completo de formas geométricas interactivas y una herramienta de máscara poligonal punto por punto, accesibles directamente en `Smart Mask` -> `Extraction Methods` -> `Máscara` (así como en el modo `Spot Color`).

Dibuja, centra, redimensiona, gira y perfecciona tus máscaras **al instante, sin esperar a la extracción por IA.**

Esta es una adaptación del plugin de Gatis Udrass, al que he añadido nuevas funcionalidades y correcciones.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin2.png">

<br />

### ✨ Características principales

- Compatible con Windows y macOS.
- Compatibilidad multilingüe: inglés, francés, alemán, español, italiano.
- Instalador autónomo y portátil: descarga automáticamente el binario de **Node.js** necesario si aún no está presente en la carpeta `node`.
- Enmascarado instantáneo (cero tiempo de espera de IA): conserva o borra directamente zonas de la máscara de tu imagen con formas geométricas nítidas, polígonos personalizados o archivos de máscara importados.
- Punto central interactivo (`⊕`) y tiradores de tamaño / rotación:
  - Tras dibujar cualquier forma, permanece en un modo de ajuste interactivo antes de aplicarse.
  - Arrastra el `punto central azul` (`⊕`) para alinear la forma con el centro exacto de tu objeto (con guías de alineación en cruz).
  - Arrastra cualquier `tirador de borde o esquina` para cambiar el tamaño sin perder el punto central.
  - Arrastra el `tirador de rotación` para girar sin perder el punto central.
  - Ajusta con precisión la posición y el tamaño milímetro a milímetro (o en pulgadas) con las `teclas de flecha` (`←`, `↑`, `↓`, `→`), los botones de desplazamiento del panel lateral o valores escritos de ancho, alto y rotación.
  - Haz clic en **`✓ Aplicar`** (o pulsa `Intro`) cuando estés satisfecho, o en **`✕ Cancelar`** (`Esc`) para descartar.
- 11 modos de forma integrados (mediante el menú desplegable):
  - **`○ Círculo`** → Círculo perfecto `1:1` (ideal para posavasos redondos, monedas, medallones y adornos).
  - **`⬭ Óvalo / Elipse`** → Óvalo / elipse de proporciones libres con 8 tiradores de tamaño.
  - **`▭ Rectángulo`** → Rectángulo de proporciones libres con `Radio de esquina` ajustable (`0–200 mm`).
  - **`□ Cuadrado`** → Cuadrado `1:1` de lados iguales con `Radio de esquina` ajustable (`0–200 mm`).
  - **`⏢ Cuadrilátero de 4 puntos`** → Cuadrilátero cuyas 4 esquinas se pueden arrastrar de forma independiente para ajustarse a objetos inclinados o en perspectiva.
  - **`⬡ Polígono regular`** → Polígono regular con un número de lados ajustable (`3–24`, `6` por defecto), con el primer vértice arriba. Ajusta el valor `Lados` con los botones − / + o escribiéndolo; la forma se mantiene regular y uniforme, y cada uno de sus puntos se puede arrastrar para deformarla.
  - **`⭔ Polígono por puntos`** → Haz clic en cualquier lugar de la imagen para colocar puntos que se unen al instante en una forma cerrada en vivo. Arrastra cualquier punto para ajustarlo, arrastra los puntos medios de los bordes para insertar nuevos puntos, haz clic derecho en un punto para eliminarlo o arrastra el centro `⊕` para mover todo el polígono.
  - **`☆ Estrella`** → Estrella regular con un número de `Puntas` ajustable (`3–24`, `5` por defecto), con los puntos interiores al 45 % del radio exterior. Cambia el número con los botones − / + o escribiéndolo, y arrastra cualquier punto para remodelarla.
  - **`♡ Corazón`** → Corazón clásico con dos lóbulos redondeados y una punta inferior definida, ajustado al recuadro que dibujes. Cambia su tamaño, gíralo, alinéalo y muévelo como cualquier otra forma.
  - **`◎ Anillo`** → Anillo circular / elíptico con `Grosor del anillo` ajustable (`0,5-100 mm`).
  - **`✎ Lazo a mano alzada`** → Dibuja un bucle a mano alzada y reposiciónalo si es necesario.
- Suavizado de bordes (`0–25 mm`): suaviza los bordes de la máscara para transiciones de grabado e impresión UV / tinta.
- Deshacer / Rehacer completo (`↶ Deshacer`, `↷ Rehacer`): botones del panel lateral y del lienzo, `Ctrl/Cmd+Z`, `Ctrl/Cmd+Y` o `Ctrl/Cmd+Mayús+Z`.
- Varias formas a la vez: cada forma está numerada en la lista y se puede seleccionar con `Tab` / `Mayús+Tab`, copiar / pegar o eliminar.
- Forma centrada con 1 clic (`⊕ Crear forma centrada`): coloca al instante una forma centrada y ajustable, adaptada a tu imagen.
- Gestión de máscaras: guarda, exporta (.json, .png) o importa (.svg, .png, .jpg, .jpeg, .webp, .json) archivos de máscara.
- Formas editables: todas las formas creadas siguen siendo editables hasta que haces clic en `Aplicar`, y se pueden gestionar.
- Compatibilidad con atajos de teclado / ratón.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin1.png">

<br />

### 🧩 Compatibilidad

- xTool Studio v1.9.11
- xTool Studio Pre-Release v1.10.2

<br />

## 🚀 Instalación

### Requisitos previos

- **xTool Studio** instalado en **Windows** o en **macOS**:
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
  **3.** Escribe la opción **`1`** para ejecutar el instalador:<br />
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-windows.png" alt="Windows Menu" width="700" /></p>
  **4.**  Y selecciona el idioma deseado:
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-windows.png" alt="Windows Installer" width="700" /></p>
  **5.** Abre **xTool Studio**, añade una imagen, abre `Smart Mask` y elige `Máscara` en `Extraction methods`.


### Instalación (macOS)

  **1.** Cierra **xTool Studio** si se está ejecutando.<br />
  **2.** Abre el **Terminal** y aplica **`chmod +x`** al archivo `macos.command`.<br />
  **3.** Haz doble clic en el archivo **`macos.command`**.<br />
  **4.** Escribe la opción **`1`** para ejecutar el instalador:<br />
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-macos.png" alt="macOS Menu" width="700" /></p>
  **5.**  Y selecciona el idioma deseado:
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-macos.png" alt="macOS Installer" width="700" /></p>  
  **6.** Si macOS rechaza el acceso de escritura a la aplicación: `Ajustes del Sistema` → `Privacidad y seguridad` → `Acceso total al disco` → Activa `Terminal`, reinicia `Terminal` y vuelve a intentarlo.<br />
  **7.** Abre **xTool Studio**, añade una imagen, abre `Smart Mask` y elige `Máscara` en `Extraction methods`.

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

  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-windows.png" alt="Windows Uninstaller" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-macos.png" alt="macOS Uninstaller" width="700" /></p>

> [!NOTE]
> **Para usuarios de macOS:** para recuperar la firma original de xTool, reinstala la aplicación.

<br />

## 📑 Comprobar el estado del plugin

  **1.** Haz doble clic en el archivo **`windows.bat`** en **Windows**, o en el archivo **`macos.command`** en **macOS**.<br />
  **2.** Escribe la opción **`3`** para ejecutar la comprobación de estado.

  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-windows.png" alt="Windows Status" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-macos.png" alt="macOS Status" width="700" /></p>

<br />

## ⌨️ Atajos de teclado

| Atajo | Acción |
|:--|:--|
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>Z</kbd> | **Deshacer**: revierte la última modificación o el último *Aplicar* |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>Y</kbd> | **Rehacer**: restaura la última modificación |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>C</kbd> | **Copiar** la forma activa |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>V</kbd> | **Pegar** la forma copiada |
| <kbd>Tab</kbd> / <kbd>Mayús</kbd> + <kbd>Tab</kbd> | **Seleccionar** la forma siguiente / anterior | 
| <kbd>Intro</kbd> | **Aplicar** |
| <kbd>Esc</kbd> | **Cancelar** |
| <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Mover la forma activa **1 mm** (0,05 in) |
| <kbd>Mayús</kbd> + <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Mover la forma activa **5 mm** (0,25 in) |
| <kbd>⌫</kbd> / <kbd>Supr</kbd> | *Polígono*: eliminar el último punto |

> [!NOTE]
> <kbd>Intro</kbd>, <kbd>Esc</kbd> y las flechas solo responden cuando hay al menos una forma pendiente.
> Los atajos se desactivan mientras se escribe en un campo (por ejemplo, el valor de un control deslizante).

## 🖱️ Ratón

| Gesto | Acción |
|:--|:--|
| **Arrastrar** | Dibujar la forma |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + **Arrastrar** | Invertir el modo de trazado: ⌖ Desde el centro ↔ ⛶ Desde la esquina |
| <kbd>Mayús</kbd> + **Arrastrar** | Círculo → Elipse · Cuadrado → Rectángulo · Anillo → Anillo libre |
| <kbd>Mayús</kbd> + **Rotación** | Rotar en pasos de **15°** |
| **Clic** en una forma | Seleccionarla (pasa a ser la activa) |
| **Clic** en un punto *(polígono)* | Seleccionar y mover el punto |
| <kbd>Alt</kbd> + **Clic** en un punto *(polígono)* | Eliminar ese punto |
| **Clic derecho** *(polígono)* | Eliminar el punto bajo el cursor o, si no hay, el último punto |
| **Clic** en los botones del lienzo | Cancelar · Deshacer · Aplicar |

<br />

## 💗 Créditos

Si te gusta mi trabajo, no dudes en apoyarme con una 🍺 o un ☕. ¡Muchas gracias! 🙂

<a href="https://ko-fi.com/guilouz" target="_blank"><img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/ko-fi.png?raw=true" width="350" target="_blank"></a>

Un agradecimiento especial a **Gatis Udrass** por la base de su plugin.
