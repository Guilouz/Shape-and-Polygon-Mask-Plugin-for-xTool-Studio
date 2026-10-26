#  Shape & Polygon Mask Plugin für xTool Studio

Haben Sie schon einmal versucht, in **xTool Studio** eine Maske für einen runden Untersetzer, ein rechteckiges Schild oder einen schräg liegenden Gegenstand zu erstellen?<br />
Auf die KI-Extraktion zu warten oder Masken von Hand mit dem Pinsel zu zeichnen dauert ewig, und die Kanten sind oft ungenau.

Jetzt können Sie Ihre Masken in nur wenigen Sekunden vorbereiten – ganz ohne KI-bedingte Wartezeiten – dank dieser benutzerdefinierten Erweiterung für die Desktop-App **xTool Studio**.<br />
Sie fügt eine komplette Palette interaktiver geometrischer Formen und ein Polygon-Maskierungswerkzeug mit Punkt-für-Punkt-Setzen hinzu, direkt erreichbar unter `Intelligente Maske` -> `Extraktionsmethoden` -> `Maske` (sowie im Modus `Schmuckfarbe`).

Zeichnen, zentrieren, skalieren, drehen und verfeinern Sie Ihre Masken **sofort – ganz ohne Warten auf die KI-Extraktion!**

Dies ist eine Portierung des Plugins von Gatis Udrass, zu dem ich einige neue Funktionen und Korrekturen hinzugefügt habe.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin2.png" alt="Plugin" />

<br />

## ✨ Hauptfunktionen

- Sofortiges Maskieren (keine KI-Wartezeit): Behalten oder entfernen Sie Bereiche der Bildmaske direkt mit sauberen geometrischen Formen, eigenen Polygonen oder importierten Maskendateien.
- Interaktiver Mittelpunkt (`⊕`) und Griffe zum Skalieren/Drehen:
  - Nach dem Zeichnen einer Form bleibt diese im interaktiven Anpassungsmodus, bevor sie angewendet wird.
  - Ziehen Sie den `blauen Mittelpunkt` (`⊕`), um die Form genau auf die Mitte Ihres Objekts auszurichten (mit Fadenkreuz-Hilfslinien).
  - Ziehen Sie einen beliebigen `Kanten- oder Eckgriff`, um die Größe zu ändern, ohne den Mittelpunkt zu verlieren.
  - Ziehen Sie den `Drehgriff`, um zu drehen, ohne den Mittelpunkt zu verlieren.
  - Passen Sie Position und Größe pixelgenau mit den `Pfeiltasten` (`←`, `↑`, `↓`, `→`) oder den Verschiebe-Schaltflächen im Seitenbereich an.
  - Klicken Sie auf **`✓ Anwenden`** (oder drücken Sie `Enter`), wenn Sie zufrieden sind, oder auf **`✕ Abbrechen`** (`Esc`), um zu verwerfen.
- 8 integrierte Formmodi (über das Dropdown-Menü):
  - **`○ Kreis`** → Perfekter `1:1`-Kreis (ideal für runde Untersetzer, Münzen, Medaillons und Anhänger).
  - **`⬭ Oval / Ellipse`** → Oval / Ellipse mit freiem Seitenverhältnis und 8 Skalierungsgriffen.
  - **`▭ Rechteck`** → Rechteck mit freiem Seitenverhältnis und einstellbarem `Eckenradius` (`0–200 px`).
  - **`□ Quadrat`** → Quadrat mit gleich langen Seiten (`1:1`) und einstellbarem `Eckenradius` (`0–200 px`).
  - **`⏢ Viereck (4 Punkte)`** → Viereck mit 4 Ecken, von denen jede einzeln verschoben werden kann, um schräge oder perspektivisch verzerrte Objekte nachzubilden.
  - **`⭔ Punkt-Polygon`** → Klicken Sie irgendwo auf das Bild, um Punkte zu setzen, die sich sofort zu einer geschlossenen Live-Form verbinden. Ziehen Sie einen Punkt, um ihn anzupassen, ziehen Sie die Kantenmitte, um neue Punkte einzufügen, klicken Sie mit der rechten Maustaste auf einen Punkt, um ihn zu löschen, oder ziehen Sie den Mittelpunkt `⊕`, um das gesamte Polygon zu verschieben.
  - **`◎ Ring`** → Kreis-/ellipsenförmiger Ring mit einstellbarer `Ringbreite` (`2–200 px`).
  - **`✎ Freihand-Lasso`** → Zeichnen Sie eine Schleife aus freier Hand und positionieren Sie sie bei Bedarf neu.
- Weiche Kante (0–40 px): Macht die Maskenkanten sanft für weiche Übergänge bei Gravur und UV-/Tintendruck.
- Zentrierte Form per Klick (`⊕ Zentrierte Form erstellen`): Platziert sofort eine zentrierte, anpassbare Form, die zu Ihrem Bild passt.
- Vollständiges Rückgängig / Wiederholen (`Strg+Z` / `Strg+Y` unter Windows und `Cmd+Z` / `Cmd+Y` unter macOS) sowie Echtzeit-Synchronisierung von Original und Vorschau.
- Maskenverwaltung: Maskendateien speichern, exportieren (.json, .png) oder importieren (.svg, .png, .jpg, .jpeg, .webp, .json).

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin1.png" alt="Plugin" />

<br />

## ✨ Neue Funktionen gegenüber der Originalversion

- Unterstützung für macOS hinzugefügt.
- Unterstützung für xTool Studio Pre-Release v1.10.2 hinzugefügt.
- Eigenständiger, portabler Installer: **Node.js** muss nicht mehr installiert werden. Der Installer lädt die benötigte Binärdatei automatisch herunter, falls sie nicht bereits im Ordner `node` liegt.
- Mehrsprachige Unterstützung: Englisch, Französisch, Deutsch, Spanisch, Italienisch.
- Unterstützung für das Drehen von Masken: Eine Maske lässt sich jetzt drehen.
- Unterstützung für den Import von SVG-Dateien: Die SVG wird an das Bild angepasst (90 % der Größe, zentriert, Seitenverhältnis beibehalten) und sofort angewendet. Sie wird außerdem wie ein importiertes PNG in die Bibliothek aufgenommen.
- Fehler behoben: Die Liste der gespeicherten Masken wurde nicht in Echtzeit aktualisiert.
- Elliptische Funktion für den Ring korrigiert.
- Verbesserte Benutzeroberfläche.

<br />

## 🚀 Installation

### Voraussetzungen

- **xTool Studio v1.9.11** oder **Pre-Release v1.10.2**, installiert unter **Windows** oder **macOS**:
   - Standardpfad unter **Windows**: `%LOCALAPPDATA%\Programs\xTool Studio`; auch Standardorte wie `Programs`, `Program Files` und `Program Files (x86)` werden unterstützt
   - Standardpfad unter **macOS**: `/Applications/xTool Studio.app`
   
> [!NOTE]
> Das Installationsverzeichnis kann bei ungewöhnlichem Installationspfad auch manuell festgelegt werden.

- Laden Sie die neueste Version des **Shape & Polygon Mask Plugins** herunter: [Hier](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/releases/latest)

> [!TIP]
> Der Installer lädt automatisch die zu Ihrem System passende **Node.js**-Binärdatei herunter. Sie können sie aber auch manuell herunterladen und die Datei in den Ordner `node` kopieren.
>
> - Laden Sie die neueste **Node.js**-Binärdatei von [nodejs.org](https://nodejs.org/en/download) herunter und wählen Sie die Variante **Standalone Binary**:
>
>   - **Windows Intel/AMD** → **Windows** mit Architektur **x64** wählen → die Datei `node.exe` verwenden.
>   - **Windows ARM** → **Windows** mit Architektur **ARM64** wählen → die Datei `node.exe` verwenden.
>   - **Mac Intel** → **macOS** mit Architektur **x64** wählen → die Datei `node` im Ordner `bin` verwenden.
>   - **Mac Apple Silicon** → **macOS** mit Architektur **ARM64** wählen → die Datei `node` im Ordner `bin` verwenden.

<br />

**🔒 Sichere automatische Sicherung:** Bevor Änderungen vorgenommen werden, sichert der Installer automatisch die Originaldateien.

### Installation (Windows)

  **1.** Schließen Sie **xTool Studio**, falls es gerade läuft.<br />
  **2.** Doppelklicken Sie auf die Datei **`windows.bat`**.<br />
  **3.** Geben Sie **`1`** ein, um den Installer zu starten:<br />
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-windows.png" alt="Windows Menu" width="700" /></p>
  **4.** Und wählen Sie die gewünschte Sprache:
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-windows.png" alt="Windows Installer" width="700" /></p>
  **5.** Öffnen Sie **xTool Studio**, fügen Sie ein Bild hinzu, öffnen Sie `Intelligente Maske` und wählen Sie unter `Extraktionsmethoden` den Eintrag `Maske`.


### Installation (macOS)

  **1.** Schließen Sie **xTool Studio**, falls es gerade läuft.<br />
  **2.** Öffnen Sie das **Terminal** und wenden Sie **`chmod +x`** auf die Datei `macos.command` an.<br />
  **3.** Doppelklicken Sie auf die Datei **`macos.command`**.<br />
  **4.** Geben Sie **`1`** ein, um den Installer zu starten:<br />
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-macos.png" alt="macOS Menu" width="700" /></p>
  **5.** Und wählen Sie die gewünschte Sprache:
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-macos.png" alt="macOS Installer" width="700" /></p>  
  **6.** Falls macOS den Schreibzugriff auf die App verweigert: `Systemeinstellungen` → `Datenschutz & Sicherheit` → `Voller Festplattenzugriff` → `Terminal` aktivieren, dann `Terminal` neu starten und es erneut versuchen.<br />
  **7.** Öffnen Sie **xTool Studio**, fügen Sie ein Bild hinzu, öffnen Sie `Intelligente Maske` und wählen Sie unter `Extraktionsmethoden` den Eintrag `Maske`.

> [!NOTE]
> Nach der Ad-hoc-Neusignierung fragt macOS möglicherweise erneut nach Berechtigungen (Dateien, Schlüsselbund), und Sie müssen sich eventuell erneut anmelden. Automatische Updates von xTool Studio überschreiben das Plugin – führen Sie dann einfach den Installer erneut aus.


### Plugin-Sprache

Der Installer fragt, welche Sprache verwendet werden soll: `English`, `Français`, `Español`, `Italiano` oder `Deutsch`.<br />
Um die Sprache später zu wechseln, führen Sie den Installer einfach erneut mit der anderen Sprache aus (vorheriges Deinstallieren ist nicht nötig).

<br />

## 🔄 Deinstallation / Original-xTool Studio wiederherstellen

So entfernen Sie das Plugin und stellen jederzeit das unveränderte Original-Archiv von xTool Studio wieder her:

  **1.** Schließen Sie **xTool Studio**.<br />
  **2.** Doppelklicken Sie unter Windows auf die Datei **`windows.bat`** bzw. unter macOS auf die Datei **`macos.command`**.<br />
  **3.** Geben Sie **`2`** ein, um die Deinstallation zu starten, und bestätigen Sie sie.
  
  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-windows.png" alt="Windows Uninstaller" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-macos.png" alt="macOS Uninstaller" width="700" /></p>

> [!NOTE]
> **Für macOS-Nutzer:** Um die Originalsignatur von xTool zurückzubekommen, installieren Sie die App neu.

<br />

## 📑 Plugin-Status prüfen

  **1.** Doppelklicken Sie unter **Windows** auf die Datei **`windows.bat`** bzw. unter **macOS** auf die Datei **`macos.command`**.<br />
  **2.** Geben Sie **`3`** ein, um die Statusprüfung zu starten.

  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-windows.png" alt="Windows Status" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-macos.png" alt="macOS Status" width="700" /></p>

<br />

## ⌨️ Tastenkürzel

| Kürzel | Aktion |
|:--|:--|
| <kbd>Strg</kbd> / <kbd>⌘</kbd> + <kbd>Z</kbd> | **Rückgängig**: Macht die letzte Änderung oder das letzte *Anwenden* rückgängig |
| <kbd>Strg</kbd> / <kbd>⌘</kbd> + <kbd>C</kbd> | Aktive Form **kopieren** |
| <kbd>Strg</kbd> / <kbd>⌘</kbd> + <kbd>V</kbd> | Kopierte Form **einfügen** |
| <kbd>Eingabe</kbd> | **Anwenden** |
| <kbd>Esc</kbd> | **Abbrechen** |
| <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Aktive Form um **1 mm** (0,05 in) verschieben |
| <kbd>Umschalt</kbd> + <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Aktive Form um **5 mm** (0,25 in) verschieben |
| <kbd>⌫</kbd> / <kbd>Entf</kbd> | *Polygon*: Letzten Punkt entfernen |

> [!NOTE]
> <kbd>Eingabe</kbd>, <kbd>Esc</kbd> und die Pfeiltasten reagieren nur, wenn mindestens eine Form aussteht.
> Die Kürzel sind deaktiviert, solange in ein Eingabefeld geschrieben wird (z. B. der Wert eines Schiebereglers).

## 🖱️ Maus

| Geste | Aktion |
|:--|:--|
| **Ziehen** | Form zeichnen |
| <kbd>Strg</kbd> / <kbd>⌘</kbd> + **Ziehen** | Zeichenmodus umkehren: ⌖ Von der Mitte ↔ ⛶ Von der Ecke |
| <kbd>Umschalt</kbd> + **Ziehen** | Kreis → Ellipse · Quadrat → Rechteck · Ring → Freier Ring |
| <kbd>Umschalt</kbd> + **Drehen** | In **15°**-Schritten drehen |
| **Klick** auf eine Form | Auswählen (sie wird aktiv) |
| **Klick** auf einen Punkt *(Polygon)* | Punkt auswählen und verschieben |
| <kbd>Alt</kbd> + **Klick** auf einen Punkt *(Polygon)* | Diesen Punkt löschen |
| **Rechtsklick** *(Polygon)* | Punkt unter dem Cursor löschen, sonst den letzten Punkt |
| **Klick** auf die Canvas-Schaltflächen | Abbrechen · Rückgängig · Anwenden |

<br />

## 💗 Danksagung

Besonderer Dank gilt **Gatis Udrass** für sein brillantes Plugin.
Sie können ihm mit einer Spende einen Kaffee spendieren:

<p align="left">
  <img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/PayPal-QRCode-for-Gatis-Udrass.png?raw=true" alt="Spenden über PayPal-QR-Code" width="260" />
</p>

Und Sie können sich auch bei mir (**Cyril Guislain**) bedanken, wenn Ihnen die vorgenommenen Änderungen gefallen:

<p align="left">
  <img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/PayPal-QRCode-for-Cyril-Guislain.png?raw=true" alt="Spenden über PayPal-QR-Code" width="260" />
</p>

<p align="left">
  <em>Scannen Sie den obigen PayPal-QR-Code mit der Kamera Ihres Smartphones oder der PayPal-App, um zu spenden. Vielen Dank für Ihre Unterstützung!</em>
</p>
