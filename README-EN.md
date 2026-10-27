#  Shape & Polygon Mask Plugin for xTool Studio

Have you ever tried creating a mask for a round coaster, a rectangular plaque, or an angled object in **xTool Studio**?<br />
Waiting for AI extraction or manually drawing masks with a brush takes eternity, and the edges often lack precision.

Now, you can prepare your masks in just a few seconds—with no AI-related wait times—thanks to this custom extension for the **xTool Studio** desktop app.<br />
It adds a full suite of interactive geometric shapes and a point-by-point polygon masking tool, accessible directly under `Smart Mask` -> `Extraction Methods` -> `Mask` (as well as in `Spot Color` mode).

Draw, center, resize, rotate, and refine your masks **instantly—no need to wait for AI extraction!**

This is a port of Gatis Udrass’s plugin, to which I have added a few new features and fixes.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin2.png">

<br />

### ✨ Key Features

- Windows and macOS support.
- Multi-language support: English, French, German, Spanish, Italian.
- Standalone and Portable installer: Automatically downloads the needed binary of **Node.js** if it is not already present in the `node` folder.
- Instant Masking (Zero AI Wait Time): Directly retain or erase areas of your image mask with crisp geometric shapes, custom polygons or imported mask files.
- Interactive Center Point (`⊕`) & Resize/Rotate Handles:
  - After drawing any shape, it stays in an interactive adjustment mode before being applied.
  - Drag the `blue center point` (`⊕`) to align the shape with the exact center of your object (with crosshair alignment guides).
  - Drag any `edge or corner handle` to resize without losing your center point.
  - Drag the `rotation handle` to rotate without losing your center point. 
  - Fine-tune position and size mm-by-mm (or in) using `Arrow keys` (`←`, `↑`, `↓`, `→`) or the side-panel nudge buttons.
  - Click **`✓ Apply`** (or press `Enter`) when satisfied, or **`✕ Cancel`** (`Esc`) to discard.
- 11 Built-in Shape Modes (via Dropdown Menu):
  - **`○ Circle`** → Perfect `1:1` circle (ideal for round coasters, coins, medallions, and ornaments).
  - **`⬭ Oval / Ellipse`** → Free-aspect oval / ellipse with 8 resize handles.
  - **`▭ Rectangle`** → Free-aspect rectangle with adjustable `Corner Radius` (`0–200 mm`).
  - **`□ Square`** → Equal-side `1:1` square with adjustable `Corner Radius` (`0–200 mm`).
  - **`⏢ 4-Point Quad`** → 4-corner quadrilateral where each of the 4 corners can be dragged independently to match angled or perspective objects.
  - **`⬡ Regular Polygon`** → Regular polygon with an adjustable number of sides (`3–24`, default `6`), first vertex at the top. Set the `Sides` value with the − / + buttons or by typing it; the shape stays regular and uniform, and each of its points can still be dragged to deform it.
  - **`⭔ Polygon by Points`** → Click anywhere on the image to place points that immediately connect into a live closed shape. Drag any point to adjust, drag edge midpoints to insert new points, right-click a point to delete it, or drag the center `⊕` to move the whole polygon.
  - **`☆ Star`** → Regular star with an adjustable number of `Branches` (`3–24`, default `5`), with the inner points set at 45 % of the outer radius. Change the count with the − / + buttons or by typing it, and drag any point to reshape it.
  - **`♡ Heart`** → Classic heart shape with two round lobes and a sharp bottom tip, fitted to the box you draw. Resize, rotate, align and move it like any other shape.
  - **`◎ Ring`** → Circular/elliptical ring with adjustable `Ring Width` (`0.5-100 mm`).
  - **`✎ Freehand Lasso`** → Draw a freehand loop and reposition if needed.
- Edge Feathering (`0–25 mm`): Smoothly soften mask edges for engraving and UV/ink printing transitions.
- Fine-tune position and size mm-by-mm (or in) using `Arrow keys` (`←`, `↑`, `↓`, `→`, `Shift`), the side-panel nudge buttons, or exact typed values for width, height and rotation.
- Full Undo / Redo (`↶ Undo`, `↷ Redo`): side-panel and canvas buttons, `Ctrl/Cmd+Z`, `Ctrl/Cmd+Y` or `Ctrl/Cmd+Shift+Z`.
- Multiple shapes at once: each shape is numbered in the list, can be selected with `Tab` / `Shift+Tab`, copied / pasted, or deleted.
- 1-Click Centered Shape (`⊕ Create Centered Shape`): Instantly places a centered, adjustable shape fitted to your image.
- Mask management: Save, export (.json, .png) or import (.svg, .png .jpg .jpeg .webp, .json) mask files.
- Editable Shapes: All created shapes stay editable until you click `Apply` and they can be managed.
- Keyboard/Mouse shortcuts support.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin1.png">

<br />

### 🧩 Compatibility

- xTool Studio v1.9.11
- xTool Studio Pre-Release v1.10.2

<br />

## 🚀 Installation

### Prerequisites

- **xTool Studio v1.9.11** or **Pre-Release v1.10.2** installed on **Windows** or on **macOS**:
   - Default location on **Windows**:`%LOCALAPPDATA%\Programs\xTool Studio` and standard locations like: `Programs`, `Program Files` and `Program Files (x86)` are also supported
   - Default location on **macOS**:`/Applications/xTool Studio.app`
   
> [!NOTE]
> It is also possible to manually define the installation directory if the installation path is unusual.

- Download the latest version of **Shape & Polygon Mask Plugin**: [Here](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/releases/latest)

> [!TIP]
> The installer automatically downloads the **Node.js** binary compatible with your system. However, you can also download it manually and copy the binary into the `node` folder.
>
> - Download the latest **Node.js** binary from [nodejs.org](https://nodejs.org/en/download) and select the **Standalone Binary** version:
>
>   - **Windows Intel/AMD** → Choose **Windows** with **x64** architecture → Take the `node.exe` file.
>   - **Windows ARM** → Choose **Windows** with **ARM64** architecture → Take the `node.exe` file.
>   - **Mac Intel** → Choose **macOS** with **x64** architecture → Take the `node` file in the `bin` folder.
>   - **Mac Apple Silicon** → Choose **macOS** with **ARM64** architecture → Take the `node` file in the `bin` folder.

<br />

**🔒 Safe Automatic Backup:** Before making any changes, the installer automatically backs up original files.

### Installation (Windows)

  **1.** Close **xTool Studio** if it is currently running.<br />
  **2.** Double-click on **`windows.bat`** file.<br />
  **3.** Type choice **`1`** to run the installer:<br />
           <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-windows.png" alt="Windows Menu" width="700" /></p>
  **4.**  And select the desired language:
           <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-windows.png" alt="Windows Installer" width="700" /></p>
  **5.** Open **xTool Studio**, add an image, open `Smart Mask`, and choose `Mask` under `Extraction methods`.


### Installation (macOS)

  **1.** Close **xTool Studio** if it is currently running.<br />
  **2.** Open **Terminal** and apply **`chmod +x`** on `macos.command` file.<br />
  **3.** Double-click on **`macos.command`** file.<br />
  **4.** Type choice **`1`** to run the installer:<br />
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-macos.png" alt="macOS Menu" width="700" /></p>
  **5.**  And select the desired language:
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-macos.png" alt="macOS Installer" width="700" /></p> 
  **6.** If macOS refuses write access to the app: `System Settings` → `Privacy & Security` → `App Management` (or `Full Disk Access`) → Add `Terminal`, then restart `Terminal`, and retry.<br />
  **7.** Open **xTool Studio**, add an image, open `Smart Mask`, and choose `Mask` under `Extraction methods`.

> [!NOTE]
> After the ad-hoc re-signing, macOS may ask for permissions again (files, keychain) and you may need to log in again. Auto-updates of xTool Studio will overwrite the plugin — Just run the installer again.


### Plugin Language

The installer asks which language to use: `English`, `Français`, `Español`, `Italiano` or `Deutsch`.<br />
To switch language later, just run the installer again with the other language (no need to uninstall first).

<br />

## 🔄 Uninstalling / Restoring Original xTool Studio

To remove the plugin and restore the original unpatched xTool Studio archive at any time:

  **1.** Close **xTool Studio**.<br />
  **2.** Double-click on **`windows.bat`** file on Windows, or on **`macos.command`** file on macOS.<br />
  **3.** Type choice **`2`** to run the uninstaller and confirm the uninstallation.
  
  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-windows.png" alt="Windows Uninstaller" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-macos.png" alt="macOS Uninstaller" width="700" /></p>

> [!NOTE]
> **For macOS users:** To get xTool's original signature back, reinstall the app.

<br />

## 📑 Check Plugin Status

  **1.** Double-click on **`windows.bat`** file on **Windows**, or on **`macos.command`** file on **macOS**.<br />
  **2.** Type choice **`3`** to run the status checker.
  
  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-windows.png" alt="Windows Status" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-macos.png" alt="macOS Status" width="700" /></p>

<br />

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|:--|:--|
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>Z</kbd> | **Undo**: Revert the last edit or the last *Apply* |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>Y</kbd> | **Redo**: Restore the last edit |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>C</kbd> | **Copy** the active shape |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>V</kbd> | **Paste** the copied shape |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | **Select** the next / previous shape | 
| <kbd>Enter</kbd> | **Apply** |
| <kbd>Esc</kbd> | **Cancel** |
| <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Move the active shape by **1 mm** (0.05 in) |
| <kbd>Shift</kbd> + <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Move the active shape by **5 mm** (0.25 in) |
| <kbd>⌫</kbd> / <kbd>Del</kbd> | *Polygon*: Remove the last point |

> [!NOTE]
> <kbd>Enter</kbd>, <kbd>Esc</kbd> and the arrow keys only work when at least one shape is pending.
> Shortcuts are disabled while typing in an input field (a slider value, for example).

## 🖱️ Mouse

| Gesture | Action |
|:--|:--|
| **Drag** | Draw the shape |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + **Drag** | Toggle draw mode: ⌖ From Center ↔ ⛶ From Corner |
| <kbd>Shift</kbd> + **Drag** | Circle → Ellipse · Square → Rectangle · Ring → Free ring |
| <kbd>Shift</kbd> + **Rotate** | Rotate in **15°** steps |
| **Click** a shape | Select it (it becomes active) |
| **Click** a point *(polygon)* | Select and move the point |
| <kbd>Alt</kbd> + **Click** a point *(polygon)* | Delete that point |
| **Right-click** *(polygon)* | Delete the point under the cursor, otherwise the last point |
| **Click** canvas buttons | Cancel · Undo · Apply |

<br />

## 💗 Credits

If you like my work, feel free to support me by paying me a 🍺 or a ☕. Thank you 🙂

<a href="https://ko-fi.com/guilouz" target="_blank"><img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/ko-fi.png?raw=true" width="350"></a>

Ein besonderer Dank geht an **Gatis Udrass** für die Grundlage seines Plugins.
