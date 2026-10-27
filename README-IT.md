#  Plugin Shape & Polygon Mask per xTool Studio

Hai mai provato a creare una maschera per un sottobicchiere rotondo, una targa rettangolare o un oggetto inclinato in **xTool Studio**?<br />
Aspettare l'estrazione con l'IA o disegnare le maschere a mano con il pennello richiede un'eternità, e i bordi spesso mancano di precisione.

Ora puoi preparare le tue maschere in pochi secondi, senza alcuna attesa legata all'IA, grazie a questa estensione personalizzata per l'app desktop **xTool Studio**.<br />
Aggiunge una suite completa di forme geometriche interattive e uno strumento di mascheratura poligonale punto per punto, accessibili direttamente da `Smart Mask` -> `Extraction Methods` -> `Maschera` (e anche in modalità `Spot Color`).

Disegna, centra, ridimensiona, ruota e rifinisci le tue maschere **all'istante, senza aspettare l'estrazione con l'IA!**

Si tratta di un port del plugin di Gatis Udrass, al quale ho aggiunto nuove funzionalità e correzioni.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin2.png">

<br />

### ✨ Funzionalità principali

- Supporto per Windows e macOS.
- Supporto multilingua: inglese, francese, tedesco, spagnolo, italiano.
- Installer autonomo e portatile: scarica automaticamente il binario di **Node.js** necessario se non è già presente nella cartella `node`.
- Mascheratura istantanea (zero tempi di attesa dell'IA): mantieni o cancella direttamente aree della maschera della tua immagine con forme geometriche nitide, poligoni personalizzati o file di maschera importati.
- Punto centrale interattivo (`⊕`) e maniglie di ridimensionamento / rotazione:
  - Dopo aver disegnato una forma, questa resta in modalità di regolazione interattiva prima di essere applicata.
  - Trascina il `punto centrale blu` (`⊕`) per allineare la forma al centro esatto del tuo oggetto (con guide di allineamento a croce).
  - Trascina una qualsiasi `maniglia di bordo o d'angolo` per ridimensionare senza perdere il punto centrale.
  - Trascina la `maniglia di rotazione` per ruotare senza perdere il punto centrale.
  - Regola con precisione posizione e dimensioni al millimetro (o in pollici) con i `tasti freccia` (`←`, `↑`, `↓`, `→`), i pulsanti di spostamento del pannello laterale o valori digitati per larghezza, altezza e rotazione.
  - Fai clic su **`✓ Applica`** (o premi `Invio`) quando sei soddisfatto, oppure su **`✕ Annulla`** (`Esc`) per scartare.
- 11 modalità di forma integrate (tramite menu a discesa):
  - **`○ Cerchio`** → Cerchio perfetto `1:1` (ideale per sottobicchieri rotondi, monete, medaglioni e ornamenti).
  - **`⬭ Ovale / Ellisse`** → Ovale / ellisse a proporzioni libere con 8 maniglie di ridimensionamento.
  - **`▭ Rettangolo`** → Rettangolo a proporzioni libere con `Raggio angoli` regolabile (`0–200 mm`).
  - **`□ Quadrato`** → Quadrato `1:1` a lati uguali con `Raggio angoli` regolabile (`0–200 mm`).
  - **`⏢ Quadrilatero a 4 punti`** → Quadrilatero in cui ciascuno dei 4 angoli può essere trascinato in modo indipendente per adattarsi a oggetti inclinati o in prospettiva.
  - **`⬡ Poligono regolare`** → Poligono regolare con un numero di lati regolabile (`3–24`, `6` di default), con il primo vertice in alto. Imposta il valore `Lati` con i pulsanti − / + o digitandolo; la forma resta regolare e uniforme, e ciascuno dei suoi punti può comunque essere trascinato per deformarla.
  - **`⭔ Poligono per punti`** → Fai clic in un punto qualsiasi dell'immagine per posizionare punti che si collegano subito in una forma chiusa in tempo reale. Trascina un punto per regolarlo, trascina i punti medi dei bordi per inserire nuovi punti, fai clic destro su un punto per eliminarlo o trascina il centro `⊕` per spostare l'intero poligono.
  - **`☆ Stella`** → Stella regolare con un numero di `Punte` regolabile (`3–24`, `5` di default), con i punti interni al 45 % del raggio esterno. Cambia il numero con i pulsanti − / + o digitandolo e trascina un punto per rimodellarla.
  - **`♡ Cuore`** → Cuore classico con due lobi arrotondati e una punta inferiore netta, adattato al riquadro che disegni. Ridimensionalo, ruotalo, allinealo e spostalo come qualsiasi altra forma.
  - **`◎ Anello`** → Anello circolare / ellittico con `Spessore dell'anello` regolabile (`0,5-100 mm`).
  - **`✎ Lazo a mano libera`** → Disegna un anello a mano libera e riposizionalo se necessario.
- Sfumatura dei bordi (`0–25 mm`): ammorbidisce i bordi della maschera per transizioni di incisione e stampa UV / inchiostro.
- Annulla / Ripristina completo (`↶ Indietro`, `↷ Ripristina`): pulsanti del pannello laterale e della tela, `Ctrl/Cmd+Z`, `Ctrl/Cmd+Y` o `Ctrl/Cmd+Maiusc+Z`.
- Più forme contemporaneamente: ogni forma è numerata nell'elenco e può essere selezionata con `Tab` / `Maiusc+Tab`, copiata / incollata o eliminata.
- Forma centrata con 1 clic (`⊕ Crea forma centrata`): posiziona all'istante una forma centrata e regolabile, adattata alla tua immagine.
- Gestione delle maschere: salva, esporta (.json, .png) o importa (.svg, .png, .jpg, .jpeg, .webp, .json) file di maschera.
- Forme modificabili: tutte le forme create restano modificabili finché non fai clic su `Applica`, e possono essere gestite.
- Supporto per scorciatoie da tastiera / mouse.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin1.png">

<br />

### 🧩 Compatibilità

- xTool Studio v1.9.11
- xTool Studio Pre-Release v1.10.2

<br />

## 🚀 Installazione

### Prerequisiti

- **xTool Studio** installato su **Windows** o su **macOS**:
   - Percorso predefinito su **Windows**: `%LOCALAPPDATA%\Programs\xTool Studio`; sono supportati anche percorsi standard come `Programs`, `Program Files` e `Program Files (x86)`
   - Percorso predefinito su **macOS**: `/Applications/xTool Studio.app`
   
> [!NOTE]
> È anche possibile definire manualmente la cartella di installazione se il percorso di installazione è insolito.

- Scarica l'ultima versione del **plugin Shape & Polygon Mask**: [Qui](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/releases/latest)

> [!TIP]
> L'installer scarica automaticamente il binario di **Node.js** compatibile con il tuo sistema. Puoi comunque scaricarlo manualmente e copiare il binario nella cartella `node`.
>
> - Scarica l'ultimo binario di **Node.js** da [nodejs.org](https://nodejs.org/en/download) e seleziona la versione **Standalone Binary**:
>
>   - **Windows Intel/AMD** → Scegli **Windows** con architettura **x64** → Prendi il file `node.exe`.
>   - **Windows ARM** → Scegli **Windows** con architettura **ARM64** → Prendi il file `node.exe`.
>   - **Mac Intel** → Scegli **macOS** con architettura **x64** → Prendi il file `node` nella cartella `bin`.
>   - **Mac Apple Silicon** → Scegli **macOS** con architettura **ARM64** → Prendi il file `node` nella cartella `bin`.

<br />

**🔒 Backup automatico sicuro:** prima di apportare qualsiasi modifica, l'installer esegue automaticamente il backup dei file originali.

### Installazione (Windows)

  **1.** Chiudi **xTool Studio** se è in esecuzione.<br />
  **2.** Fai doppio clic sul file **`windows.bat`**.<br />
  **3.** Digita la scelta **`1`** per avviare l'installer:<br />
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-windows.png" alt="Windows Menu" width="700" /></p>
  **4.** E seleziona la lingua desiderata:
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-windows.png" alt="Windows Installer" width="700" /></p>
  **5.** Apri **xTool Studio**, aggiungi un'immagine, apri `Smart Mask` e scegli `Maschera` in `Extraction methods`.


### Installazione (macOS)

  **1.** Chiudi **xTool Studio** se è in esecuzione.<br />
  **2.** Apri il **Terminale** e applica **`chmod +x`** al file `macos.command`.<br />
  **3.** Fai doppio clic sul file **`macos.command`**.<br />
  **4.** Digita la scelta **`1`** per avviare l'installer:<br />
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-macos.png" alt="macOS Menu" width="700" /></p>
  **5.** E seleziona la lingua desiderata:
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-macos.png" alt="macOS Installer" width="700" /></p>  
  **6.** Se macOS nega l'accesso in scrittura all'app: `Impostazioni di Sistema` → `Privacy e sicurezza` → `Accesso completo al disco` → Abilita `Terminale`, poi riavvia `Terminale` e riprova.<br />
  **7.** Apri **xTool Studio**, aggiungi un'immagine, apri `Smart Mask` e scegli `Maschera` in `Extraction methods`.

> [!NOTE]
> Dopo la nuova firma ad hoc, macOS potrebbe richiedere di nuovo i permessi (file, portachiavi) e potrebbe essere necessario effettuare di nuovo l'accesso. Gli aggiornamenti automatici di xTool Studio sovrascrivono il plugin: basta eseguire di nuovo l'installer.


### Lingua del plugin

L'installer chiede quale lingua usare: `English`, `Français`, `Español`, `Italiano` o `Deutsch`.<br />
Per cambiare lingua in seguito, esegui di nuovo l'installer con l'altra lingua (non serve disinstallare prima).

<br />

## 🔄 Disinstallazione / Ripristino di xTool Studio originale

Per rimuovere il plugin e ripristinare in qualsiasi momento l'archivio originale non modificato di xTool Studio:

  **1.** Chiudi **xTool Studio**.<br />
  **2.** Fai doppio clic sul file **`windows.bat`** su Windows, oppure sul file **`macos.command`** su macOS.<br />
  **3.** Digita la scelta **`2`** per avviare il disinstallatore e conferma la disinstallazione.

  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-windows.png" alt="Windows Uninstaller" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-macos.png" alt="macOS Uninstaller" width="700" /></p>

> [!NOTE]
> **Per gli utenti macOS:** per riavere la firma originale di xTool, reinstalla l'app.

<br />

## 📑 Verifica dello stato del plugin

  **1.** Fai doppio clic sul file **`windows.bat`** su **Windows**, oppure sul file **`macos.command`** su **macOS**.<br />
  **2.** Digita la scelta **`3`** per avviare il controllo dello stato.

  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-windows.png" alt="Windows Status" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-macos.png" alt="macOS Status" width="700" /></p>

<br />

## ⌨️ Scorciatoie da tastiera

| Scorciatoia | Azione |
|:--|:--|
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>Z</kbd> | **Indietro**: Annulla l'ultima modifica o l'ultimo *Applica* |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>Y</kbd> | **Ripristina**: Ripristina l'ultima modifica |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>C</kbd> | **Copia** la forma attiva |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>V</kbd> | **Incolla** la forma copiata |
| <kbd>Tab</kbd> / <kbd>Maiusc</kbd> + <kbd>Tab</kbd> | **Selezionare** la forma successiva / precedente | 
| <kbd>Invio</kbd> | **Applica** |
| <kbd>Esc</kbd> | **Annulla** |
| <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Sposta la forma attiva di **1 mm** (0,05 in) |
| <kbd>Maiusc</kbd> + <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Sposta la forma attiva di **5 mm** (0,25 in) |
| <kbd>⌫</kbd> / <kbd>Canc</kbd> | *Poligono*: elimina l'ultimo punto · *Altre forme*: Elimina la forma attiva |

> [!NOTE]
> <kbd>Invio</kbd>, <kbd>Esc</kbd> e le frecce funzionano solo quando c'è almeno una forma in sospeso.
> Le scorciatoie sono disattivate durante la digitazione in un campo (ad esempio il valore di un cursore).

## 🖱️ Mouse

| Gesto | Azione |
|:--|:--|
| **Trascina** | Disegna la forma |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + **Trascina** | Inverte la modalità di tracciamento: ⌖ Dal centro ↔ ⛶ Dall'angolo |
| <kbd>Maiusc</kbd> + **Trascina** | Cerchio → Ellisse · Quadrato → Rettangolo · Anello → Anello libero |
| <kbd>Maiusc</kbd> + **Rotazione** | Ruota a passi di **15°** |
| **Clic** su una forma | La seleziona (diventa attiva) |
| **Clic** su un punto *(poligono)* | Seleziona e sposta il punto |
| <kbd>Alt</kbd> + **Clic** su un punto *(poligono)* | Elimina quel punto |
| **Clic destro** *(poligono)* | Elimina il punto sotto il cursore, altrimenti l'ultimo punto |
| **Clic** sui pulsanti della tela | Annulla · Indietro · Applica |

<br />

## 💗 Ringraziamenti

Se apprezzi il mio lavoro, sentiti libero di sostenermi offrendomi una 🍺 o un ☕. Grazie mille! 🙂

<a href="https://ko-fi.com/guilouz" target="_blank"><img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/ko-fi.png?raw=true" width="350" target="_blank"></a>

Un ringraziamento speciale va a **Gatis Udrass** per le basi su cui ha costruito il suo plugin.
