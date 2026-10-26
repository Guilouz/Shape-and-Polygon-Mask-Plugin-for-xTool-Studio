#  Shape & Polygon Mask Plugin for xTool Studio

Have you ever tried creating a mask for a round coaster, a rectangular plaque, or an angled object in xTool Studio?<br>
Waiting for AI extraction or manually drawing masks with a brush takes eternity, and the edges often lack precision.

Now, you can prepare your masks in just a few seconds—with no AI-related wait times—thanks to this custom extension for the **xTool Studio** desktop app.<br>
It adds a full suite of interactive geometric shapes and a point-by-point polygon masking tool, accessible directly under `Smart Mask` -> `Extraction Methods` -> `Mask` (as well as in `Spot Color` mode).

Draw, center, resize, rotate, and refine your masks **instantly—no need to wait for AI extraction!**

This is a port of Gatis Udrass’s plugin, to which I have added a few new features and fixes.


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

- Instant Masking (Zero AI Wait Time): Directly retain (`Retain`) or erase (`Remove`) areas of your image mask with crisp geometric shapes custom polygons or imported mask files.
- Interactive Center Point (`⊕`) & Resize/Rotate Handles:
  - After drawing any shape, it stays in an interactive adjustment mode before being applied.
  - Drag the `blue center point` (`⊕`) to align the shape with the exact center of your object (with crosshair alignment guides).
  - Drag any `edge or corner handle` to resize without losing your center point.
  - Drag the `rotation handle` to rotate without losing your center point. 
  - Fine-tune position and size pixel-by-pixel using `Arrow keys` (`←`, `↑`, `↓`, `→`) or the side-panel nudge buttons.
  - Click **`✓ Apply`** (or press `Enter`) when satisfied, or **`✕ Cancel`** (`Esc`) to discard.
- 8 Built-in Shape Modes (via Dropdown Menu):
  - **`○ Circle`** → Perfect `1:1` circle (ideal for round coasters, coins, medallions, and ornaments).
  - **`⬭ Oval / Ellipse`** → Free-aspect oval / ellipse with 8 resize handles.
  - **`▭ Rectangle`** → Free-aspect rectangle with adjustable `Corner Radius` (`0–200 mm`).
  - **`□ Square`** → Equal-side `1:1` square with adjustable `Corner Radius` (`0–200 mm`).
  - **`⏢ 4-Point Quad`** → 4-corner quadrilateral where each of the 4 corners can be dragged independently to match angled or perspective objects.
  - **`⭔ Polygon by points`** → Click anywhere on the image to place points that immediately connect into a live closed shape. Drag any point to adjust, drag edge midpoints to insert new points, right-click a point to delete it, or drag the center `⊕` to move the whole polygon.
  - **`◎ Ring`** → Circular/elliptical ring with adjustable `Ring Width` (`0.5-100 mm`).
  - **`✎ Freehand Lasso`** → Draw a freehand loop and reposition if needed.
- Edge Feathering (`0–25 mm`): Smoothly soften mask edges for engraving and UV/ink printing transitions.
- 1-Click Centered Shape (`⊕ Create Centered Shape`): Instantly places a centered, adjustable shape fitted to your image.
- Full Undo / Redo (`Ctrl+Z` / `Ctrl+Y` on Windows and `Cmd+Z` / `Cmd+Y` on macOS) & real-time Origin / Preview synchronization.
- Mask management: Save, export (.json, .png) or import (.svg, .png .jpg .jpeg .webp, .json) mask files.

### ✨ New Features Added To The Original Version

- Added support for macOS.
- Added support for xTool Studio Pre-Release v1.10.2.
- Standalone and portable installer: It is no longer necessary to install **Node.js**, the installer automatically downloads the required binary if it is not already present in the `node` folder.
- Multi-language support: English, French, German, Spanish, Italian.
- Added `Editable Shapes` function: All created shapes now stay editable until you click Apply and they can be managed.
- Added support for copy and paste masks.
- Added `Undo` support that reverts shape edits as well as an already applied shape. 
- Mask Rotation support:  It is now possible to rotate a mask.
- Support for importing SVG files: The SVG is adjusted to fit the image (90% of the size, centered, with aspect ratio preserved) and applied instantly. It is also added to the library, just like an imported PNG.
- Removed the px unit, which was inconsistent with the mm and in units used by xTool. Only mm and in remain.
- The value of each slider can now be modified manually.
- Fixed an issue where the list of saved masks was not updated in real time.
- Fixed elliptical function for Ring.
- Improved UI.
