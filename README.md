#  Shape & Polygon Mask Plugin for xTool Studio

Have you ever tried creating a mask for a round coaster, a rectangular plaque, or an angled object in xTool Studio?<br>
Waiting for AI extraction or manually drawing masks with a brush takes eternity, and the edges often lack precision.

Now, you can prepare your masks in just a few seconds—with no AI-related wait times—thanks to this custom extension for the **xTool Studio** desktop app.<br>
It adds a full suite of interactive geometric shapes and a point-by-point polygon masking tool, accessible directly under `Smart Mask` -> `Extraction Methods` -> `Mask` (as well as in `Spot Color` mode).

Draw, center, resize, rotate, and refine your masks **instantly—no need to wait for AI extraction!**

This is a port of Gatis Udrass’s plugin, to which I have added a lot of new features and fixes.

<p align="left">
  <img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin2.png" alt="Plugin" />
</p>

**PLEASE READ THE README BEFORE USE:**

[![en](https://img.shields.io/badge/README-English-yellow.svg)](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/README-EN.md)
[![fr](https://img.shields.io/badge/README-Français-blue.svg)](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/README-FR.md)
[![es](https://img.shields.io/badge/README-Español-red.svg)](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/README-ES.md)
[![it](https://img.shields.io/badge/README-Italiano-green.svg)](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/README-IT.md)
[![de](https://img.shields.io/badge/README-Deutsch-magenta.svg)](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/README-DE.md)

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

### 🧩 Compatibility

- xTool Studio v1.9.11
- xTool Studio Pre-Release v1.10.2

<p align="center">
  <img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin.png" alt="Plugin" width="300" />
</p>
