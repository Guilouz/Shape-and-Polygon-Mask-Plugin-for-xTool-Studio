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

<br />

### 🧩 Compatibility

- xTool Studio v1.9.11
- xTool Studio Pre-Release v1.10.2

<br />

### ✨ Key Features

<img align="left" src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin.png" width="260" />

### General
- **Windows** and **macOS** support.
- Multi-language interface: English, French, German, Spanish, Italian.
- Standalone and Portable installer: Automatically downloads the required **Node.js** binary into the `node` folder if it is not already present.

### Instant Masking
- Retain or erase areas of an image mask instantly with geometric shapes, custom polygons, freehand loops or imported mask files — no AI processing involved.
- **Live preview**: Click `Preview` button to see the image as it will look before applying (removed areas are shown as a checkerboard).
- Click `✓ Apply` (or press `Enter`) when satisfied, or `✕ Cancel` (`Esc`) to discard.

### Shapes

<table>
<tr><th width="180">Shape</th><th width="360">Description</th></tr>
<tr><td>○ Circle</td><td>Perfect <code>1:1</code> circle.</td></tr>
<tr><td>⬭ Oval / Ellipse</td><td>Free-aspect oval  / ellipse with 8 resize handles.</td></tr>
<tr><td>▭ Rectangle</td><td>Free-aspect rectangle with <code>Corner Radius</code>.</td></tr>
<tr><td>□ Square</td><td>Equal-side square with <code>Corner Radius</code>.</td></tr>
<tr><td>⏢ 4-Point Quad</td><td>Four independent corners, ideal for angled or perspective objects; supports <code>Corner Radius</code>.</td></tr>
<tr><td>⬡ Regular Polygon</td><td><code>3–24</code> sides (default <code>6</code>); every point can still be dragged to deform it; supports <code>Corner Radius</code>.</td></tr>
<tr><td>⭔ Polygon by Points</td><td>Click to place points; drag points, drag edge midpoints to insert new ones, right-click a point to delete it.</td></tr>
<tr><td>☆ Star</td><td><code>3–24</code> branches (default <code>5</code>) with an adjustable <code>Inner ratio</code> (<code>10–90 %</code>, default <code>45 %</code>); supports <code>Corner Radius</code>.</td></tr>
<tr><td>♡ Heart</td><td>Two round lobes and a sharp tip, with a 4-corner resize box.</td></tr>
<tr><td>◎ Ring</td><td>Circular / Elliptical ring with adjustable <code>Ring Width</code> (<code>0.5–100 mm</code>).</td></tr>
<tr><td>✎ Freehand Lasso</td><td>Draw a freehand loop, then reposition it.</td></tr>
</table>

- Corner Radius: `0–200 mm`.
- Edge Feather: `0–25 mm` (soft edges for engraving and UV / ink printing transitions).

### Interactive Editing
- Every new shape stays in an adjustment mode until you apply it.
- Drag the blue center point `⊕` to align the shape with the exact center of your object.
- Drag any edge or corner handle to resize, or the rotation handle to rotate, without losing the center point.
- Fine-tune position and size in mm or inches with `Arrow keys` (`Shift` for larger steps), the nudge buttons, or exact typed values for width, height and rotation.
- `⊕ Create Centered Shape`: Instantly places an adjustable shape fitted to your image.
- Full `↶ Undo` / `↷ Redo`: Side-panel and canvas buttons, `Ctrl/Cmd+Z`, `Ctrl/Cmd+Y` or `Ctrl/Cmd+Shift+Z`.

### Multiple Shapes
- Combine several shapes in one operation: They are numbered in the **Editable Shapes** list and stay editable until you click `Apply`.
- Select with `Tab` / `Shift+Tab` or by clicking, `Duplicate` (`Ctrl/Cmd+D`), `Delete`, and `Hide` / `Lock` any shape.

### Mask Management
- Save masks, including multi-shape masks that restore every shape (type, rotation, radius, feathering…) ready to edit.
- Export (`.json`, `.png`) or import (`.svg`, `.png`, `.jpg`, `.jpeg`, `.webp`, `.json`).

<br clear="left" />
