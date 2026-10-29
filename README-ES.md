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

**General**
- Compatible con **Windows** y **macOS**.
- Interfaz multilingüe: inglés, francés, alemán, español, italiano.
- Instalador independiente y portátil: descarga automáticamente el binario de **Node.js** necesario en la carpeta `node` si aún no está presente.

**Enmascarado instantáneo**
- Conserva o borra áreas de la máscara de una imagen al instante con formas geométricas, polígonos personalizados, trazos a mano alzada o archivos de máscara importados — sin ningún procesamiento de IA.
- **Vista previa en directo**: haz clic en el botón `Vista previa` para ver la imagen tal y como quedará antes de aplicar (las zonas eliminadas se muestran como un tablero de ajedrez).
- Haz clic en `✓ Aplicar` (o pulsa `Enter`) cuando estés conforme, o en `✕ Cancelar` (`Esc`) para descartar.

**Formas**

| Forma | Descripción |
|---|---|
| ○ Círculo | Círculo perfecto `1:1`. |
| ⬭ Óvalo / Elipse | Óvalo / elipse de proporción libre con 8 tiradores de redimensionado. |
| ▭ Rectángulo | Rectángulo de proporción libre con `Radio de esquina`. |
| □ Cuadrado | Cuadrado de lados iguales con `Radio de esquina`. |
| ⏢ Cuadrilátero de 4 puntos | Cuatro esquinas independientes, ideal para objetos en ángulo o en perspectiva; admite `Radio de esquina`. |
| ⬡ Polígono regular | `3–24` lados (por defecto `6`); cada punto se puede arrastrar para deformarlo; admite `Radio de esquina`. |
| ⭔ Polígono por puntos | Haz clic para colocar puntos; arrastra los puntos, arrastra el punto medio de un lado para insertar nuevos puntos y haz clic derecho en un punto para eliminarlo. |
| ☆ Estrella | `3–24` puntas (por defecto `5`) con una `Proporción interior` ajustable (`10–90 %`, por defecto `45 %`); admite `Radio de esquina`. |
| ♡ Corazón | Dos lóbulos redondeados y una punta afilada, con un cuadro de redimensionado de 4 esquinas. |
| ◎ Anillo | Anillo circular / elíptico con `Grosor del anillo` ajustable (`0.5–100 mm`). |
| ✎ Lazo a mano alzada | Dibuja un lazo a mano alzada y reposiciónalo si es necesario. |

- Radio de esquina: `0–200 mm`.
- Suavizado de bordes: `0–25 mm` (bordes suavizados para las transiciones de grabado e impresión UV / tinta).

**Edición interactiva**
- Cada forma nueva permanece en modo de ajuste hasta que la apliques.
- Arrastra el punto central azul `⊕` para alinear la forma con el centro exacto de tu objeto.
- Arrastra cualquier tirador de borde o esquina para redimensionar, o el tirador de rotación para girar, sin perder el punto central.
- Ajusta con precisión la posición y el tamaño en mm o pulgadas con las `Teclas de flecha` (`Shift` para pasos mayores), los botones de desplazamiento o introduciendo valores exactos de ancho, alto y rotación.
- `⊕ Crear forma centrada`: coloca al instante una forma ajustable adaptada a tu imagen.
- `↶ Deshacer` / `↷ Rehacer` completos: botones del panel lateral y del lienzo, `Ctrl/Cmd+Z`, `Ctrl/Cmd+Y` o `Ctrl/Cmd+Shift+Z`.

**Formas múltiples**
- Combina varias formas en una sola operación: se numeran en la lista **Formas editables** y siguen siendo editables hasta que hagas clic en `Aplicar`.
- Selecciona con `Tab` / `Shift+Tab` o haciendo clic, `Duplicar` (`Ctrl/Cmd+D`), `Eliminar`, y `Ocultar` / `Bloquear` cualquier forma.

**Gestión de máscaras**
- Guarda máscaras, incluidas las de varias formas, que restauran cada forma (tipo, rotación, radio, suavizado…) lista para editar.
- Exporta (`.json`, `.png`) o importa (`.svg`, `.png`, `.jpg`, `.jpeg`, `.webp`, `.json`).

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
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>D</kbd> | **Duplicar** la forma activa |
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
