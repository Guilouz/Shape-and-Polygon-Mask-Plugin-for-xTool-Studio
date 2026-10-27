#  Shape & Polygon Mask Plugin für xTool Studio

Haben Sie schon einmal versucht, in **xTool Studio** eine Maske für einen runden Untersetzer, ein rechteckiges Schild oder einen schräg liegenden Gegenstand zu erstellen?<br />
Auf die KI-Extraktion zu warten oder Masken von Hand mit dem Pinsel zu zeichnen dauert ewig, und die Kanten sind oft ungenau.

Jetzt können Sie Ihre Masken in nur wenigen Sekunden vorbereiten – ganz ohne KI-bedingte Wartezeiten – dank dieser benutzerdefinierten Erweiterung für die Desktop-App **xTool Studio**.<br />
Sie fügt eine komplette Palette interaktiver geometrischer Formen und ein Polygon-Maskierungswerkzeug mit Punkt-für-Punkt-Setzen hinzu, direkt erreichbar unter `Intelligente Maske` -> `Extraktionsmethoden` -> `Maske` (sowie im Modus `Schmuckfarbe`).

Zeichnen, zentrieren, skalieren, drehen und verfeinern Sie Ihre Masken **sofort – ganz ohne Warten auf die KI-Extraktion!**

Dies ist eine Portierung des Plugins von Gatis Udrass, die ich um neue Funktionen und Fehlerbehebungen erweitert habe.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin2.png">

<br />

### ✨ Hauptfunktionen

- Unterstützung für Windows und macOS.
- Mehrsprachige Unterstützung: Englisch, Französisch, Deutsch, Spanisch, Italienisch.
- Eigenständiger und portabler Installer: Lädt automatisch die benötigte Binärdatei von **Node.js** herunter, falls sie nicht bereits im Ordner `node` vorhanden ist.
- Sofortmaskierung (null KI-Wartezeit): Behalte oder lösche Bereiche der Maske deines Bildes direkt mit scharfen geometrischen Formen, benutzerdefinierten Polygonen oder importierten Maskendateien.
- Interaktiver Mittelpunkt (`⊕`) und Griffe zum Skalieren / Drehen:
  - Nach dem Zeichnen einer Form bleibt sie in einem interaktiven Anpassungsmodus, bevor sie angewendet wird.
  - Ziehe den `blauen Mittelpunkt` (`⊕`), um die Form genau auf die Mitte deines Objekts auszurichten (mit Fadenkreuz-Hilfslinien).
  - Ziehe einen beliebigen `Kanten- oder Eckgriff`, um die Größe zu ändern, ohne den Mittelpunkt zu verlieren.
  - Ziehe den `Drehgriff`, um zu drehen, ohne den Mittelpunkt zu verlieren.
  - Passe Position und Größe millimetergenau (oder in Zoll) an, mit den `Pfeiltasten` (`←`, `↑`, `↓`, `→`), den Verschiebe-Schaltflächen im Seitenpanel oder eingetippten Werten für Breite, Höhe und Drehung.
  - Klicke auf **`✓ Anwenden`** (oder drücke `Eingabetaste`), wenn du zufrieden bist, oder auf **`✕ Abbrechen`** (`Esc`), um zu verwerfen.
- 11 integrierte Formmodi (über das Dropdown-Menü):
  - **`○ Kreis`** → Perfekter `1:1`-Kreis (ideal für runde Untersetzer, Münzen, Medaillons und Ornamente).
  - **`⬭ Oval / Ellipse`** → Oval / Ellipse mit freiem Seitenverhältnis und 8 Skalierungsgriffen.
  - **`▭ Rechteck`** → Rechteck mit freiem Seitenverhältnis und einstellbarem `Eckenradius` (`0–200 mm`).
  - **`□ Quadrat`** → Quadrat `1:1` mit gleich langen Seiten und einstellbarem `Eckenradius` (`0–200 mm`).
  - **`⏢ 4-Punkt-Viereck`** → Viereck, dessen 4 Ecken einzeln gezogen werden können, um schräge oder perspektivisch verzerrte Objekte nachzubilden.
  - **`⬡ Regelmäßiges Vieleck`** → Regelmäßiges Vieleck mit einstellbarer Seitenzahl (`3–24`, Standard `6`), erster Eckpunkt oben. Stelle den Wert `Seiten` mit den Schaltflächen − / + oder per Eingabe ein; die Form bleibt regelmäßig und gleichmäßig, und jeder ihrer Punkte lässt sich weiterhin ziehen, um sie zu verformen.
  - **`⭔ Polygon aus Punkten`** → Klicke an eine beliebige Stelle im Bild, um Punkte zu setzen, die sich sofort zu einer geschlossenen Live-Form verbinden. Ziehe einen Punkt, um ihn anzupassen, ziehe Kantenmittelpunkte, um neue Punkte einzufügen, klicke mit der rechten Maustaste auf einen Punkt, um ihn zu löschen, oder ziehe die Mitte `⊕`, um das gesamte Polygon zu verschieben.
  - **`☆ Stern`** → Regelmäßiger Stern mit einstellbarer Anzahl von `Zacken` (`3–24`, Standard `5`), wobei die inneren Punkte bei 45 % des äußeren Radius liegen. Ändere die Anzahl mit den Schaltflächen − / + oder per Eingabe und ziehe einen beliebigen Punkt, um die Form zu verändern.
  - **`♡ Herz`** → Klassisches Herz mit zwei runden Wölbungen und scharfer Spitze unten, eingepasst in den von dir gezeichneten Rahmen. Skaliere, drehe, richte aus und verschiebe es wie jede andere Form.
  - **`◎ Ring`** → Kreis- / ellipsenförmiger Ring mit einstellbarer `Ringdicke` (`0,5-100 mm`).
  - **`✎ Freihand-Lasso`** → Zeichne eine Freihandschleife und positioniere sie bei Bedarf neu.
- Kantenweichzeichnung (`0–25 mm`): Weicht die Maskenkanten für Übergänge bei Gravur und UV-/Tintendruck auf.
- Vollständiges Rückgängig / Wiederholen (`↶ Rückgängig`, `↷ Wiederholen`): Schaltflächen im Seitenpanel und auf der Zeichenfläche, `Strg/Cmd+Z`, `Strg/Cmd+Y` oder `Strg/Cmd+Umschalt+Z`.
- Mehrere Formen gleichzeitig: Jede Form ist in der Liste nummeriert und lässt sich mit `Tab` / `Umschalt+Tab` auswählen, kopieren / einfügen oder löschen.
- Zentrierte Form per Klick (`⊕ Zentrierte Form erstellen`): Platziert sofort eine zentrierte, anpassbare Form, die zu deinem Bild passt.
- Maskenverwaltung: Speichere, exportiere (.json, .png) oder importiere (.svg, .png, .jpg, .jpeg, .webp, .json) Maskendateien.
- Bearbeitbare Formen: Alle erstellten Formen bleiben bearbeitbar, bis du auf `Anwenden` klickst, und können verwaltet werden.
- Unterstützung für Tastatur-/Maus-Kürzel.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin1.png">

<br />

### 🧩 Kompatibilität

- xTool Studio v1.9.11
- xTool Studio Pre-Release v1.10.2

<br />

## 🚀 Installation

### Voraussetzungen

- **xTool Studio** installiert unter **Windows** oder **macOS**:
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
| <kbd>Strg</kbd> / <kbd>⌘</kbd> + <kbd>Y</kbd> | **Wiederholen**: Stellt die letzte Änderung wieder her |
| <kbd>Strg</kbd> / <kbd>⌘</kbd> + <kbd>C</kbd> | Aktive Form **kopieren** |
| <kbd>Strg</kbd> / <kbd>⌘</kbd> + <kbd>V</kbd> | Kopierte Form **einfügen** |
| <kbd>Tab</kbd> / <kbd>Umschalt</kbd> + <kbd>Tab</kbd> | Nächste / vorherige Form **auswählen** | 
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

Wenn dir meine Arbeit gefällt, unterstütze mich gerne mit einem 🍺 oder einem ☕. Vielen Dank! 🙂

<a href="https://ko-fi.com/guilouz" target="_blank"><img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/ko-fi.png?raw=true" width="350"></a>

Ein besonderer Dank geht an **Gatis Udrass** für die Grundlage seines Plugins.
