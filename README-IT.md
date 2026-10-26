#  Plugin Shape & Polygon Mask per xTool Studio

Hai mai provato a creare una maschera per un sottobicchiere rotondo, una targa rettangolare o un oggetto inclinato in **xTool Studio**?<br />
Aspettare l'estrazione con l'IA o disegnare le maschere a mano con il pennello richiede un'eternità, e i bordi spesso mancano di precisione.

Ora puoi preparare le tue maschere in pochi secondi, senza alcuna attesa legata all'IA, grazie a questa estensione personalizzata per l'app desktop **xTool Studio**.<br />
Aggiunge una suite completa di forme geometriche interattive e uno strumento di mascheratura poligonale punto per punto, accessibili direttamente da `Smart Mask` -> `Extraction Methods` -> `Maschera` (e anche in modalità `Spot Color`).

Disegna, centra, ridimensiona, ruota e rifinisci le tue maschere **all'istante, senza aspettare l'estrazione con l'IA!**

Questo è un port del plugin di Gatis Udrass, al quale ho aggiunto alcune nuove funzioni e correzioni.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin2.png" alt="Plugin" />

<br />

## ✨ Funzionalità principali

- Mascheratura istantanea (nessuna attesa dell'IA): mantieni (`Retain`) o cancella (`Remove`) direttamente aree della maschera della tua immagine con forme geometriche nitide, poligoni personalizzati o file di maschera importati.
- Punto centrale interattivo (`⊕`) e maniglie di ridimensionamento/rotazione:
  - Dopo aver disegnato una forma, questa resta in modalità di regolazione interattiva prima di essere applicata.
  - Trascina il `punto centrale blu` (`⊕`) per allineare la forma al centro esatto del tuo oggetto (con guide di allineamento a croce).
  - Trascina una qualsiasi `maniglia di bordo o di angolo` per ridimensionare senza perdere il punto centrale.
  - Trascina la `maniglia di rotazione` per ruotare senza perdere il punto centrale.
  - Regola posizione e dimensione pixel per pixel con i `tasti freccia` (`←`, `↑`, `↓`, `→`) o con i pulsanti di spostamento del pannello laterale.
  - Fai clic su **`✓ Applica`** (o premi `Invio`) quando sei soddisfatto, oppure su **`✕ Annulla`** (`Esc`) per scartare.
- 8 modalità di forma integrate (dal menu a discesa):
  - **`○ Cerchio`** → Cerchio perfetto `1:1` (ideale per sottobicchieri rotondi, monete, medaglioni e ornamenti).
  - **`⬭ Ovale / Ellisse`** → Ovale / ellisse a proporzioni libere con 8 maniglie di ridimensionamento.
  - **`▭ Rettangolo`** → Rettangolo a proporzioni libere con `Raggio degli angoli` regolabile (`0–200 px`).
  - **`□ Quadrato`** → Quadrato `1:1` a lati uguali con `Raggio degli angoli` regolabile (`0–200 px`).
  - **`⏢ Quadrilatero a 4 punti`** → Quadrilatero a 4 angoli, ognuno dei quali può essere trascinato in modo indipendente per adattarsi a oggetti inclinati o in prospettiva.
  - **`⭔ Poligono a punti`** → Fai clic in qualsiasi punto dell'immagine per posizionare dei punti che si collegano subito in una forma chiusa in tempo reale. Trascina un punto per regolarlo, trascina il punto medio di un bordo per inserire nuovi punti, fai clic destro su un punto per eliminarlo oppure trascina il centro `⊕` per spostare l'intero poligono.
  - **`◎ Anello`** → Anello circolare/ellittico con `Spessore dell'anello` regolabile (`2–200 px`).
  - **`✎ Lazo a mano libera`** → Disegna un anello a mano libera e riposizionalo se necessario.
- Sfumatura dei bordi (`0–40 px`): ammorbidisce i bordi della maschera per transizioni fluide nell'incisione e nella stampa UV/a inchiostro.
- Forma centrata con 1 clic (`⊕ Crea forma centrata`): posiziona all'istante una forma centrata e regolabile, adattata alla tua immagine.
- Annulla / Ripeti completi (`Ctrl+Z` / `Ctrl+Y` su Windows e `Cmd+Z` / `Cmd+Y` su macOS) e sincronizzazione in tempo reale tra originale e anteprima.
- Gestione delle maschere: salva, esporta (.json, .png) o importa (.svg, .png, .jpg, .jpeg, .webp, .json) file di maschera.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin1.png" alt="Plugin" />

<br />

## ✨ Novità aggiunte alla versione originale

- Aggiunto il supporto per macOS.
- Aggiunto il supporto per xTool Studio Pre-Release v1.10.2.
- Installer autonomo e portatile: non è più necessario installare **Node.js**, l'installer scarica automaticamente il binario richiesto se non è già presente nella cartella `node`.
- Supporto multilingua: inglese, francese, tedesco, spagnolo, italiano.
- Supporto per la rotazione della maschera: ora è possibile ruotare una maschera.
- Supporto per l'importazione di file SVG: l'SVG viene adattato all'immagine (90% della dimensione, centrato, con proporzioni mantenute) e applicato all'istante. Viene inoltre aggiunto alla libreria, proprio come un PNG importato.
- Risolto un problema per cui l'elenco delle maschere salvate non si aggiornava in tempo reale.
- Corretta la funzione ellittica per l'anello.
- Interfaccia migliorata.

<br />

## 🚀 Installazione

### Prerequisiti

- **xTool Studio v1.9.11** oppure **Pre-Release v1.10.2** installato su **Windows** o su **macOS**:
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

## 💗 Ringraziamenti

Un ringraziamento speciale a **Gatis Udrass** per il suo brillante plugin.
Puoi offrirgli un caffè con una donazione:

<p align="left">
  <img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/PayPal-QRCode-for-Gatis-Udrass.png?raw=true" alt="Dona tramite il codice QR di PayPal" width="260" />
</p>

E puoi ringraziare anche me (**Cyril Guislain**) se apprezzi le modifiche apportate:

<p align="left">
  <img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/PayPal-QRCode-for-Cyril-Guislain.png?raw=true" alt="Dona tramite il codice QR di PayPal" width="260" />
</p>

<p align="left">
  <em>Inquadra il codice QR di PayPal qui sopra con la fotocamera del telefono o con l'app PayPal per fare una donazione. Grazie per il tuo supporto!</em>
</p>
