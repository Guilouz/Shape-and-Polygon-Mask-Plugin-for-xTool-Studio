#  Plugin Shape & Polygon Mask pour xTool Studio

Avez-vous déjà essayé de créer un masque pour un dessous de verre rond, une plaque rectangulaire ou un objet en angle dans **xTool Studio** ?<br />
Attendre l'extraction par IA ou dessiner les masques à la main au pinceau prend une éternité, et les bords manquent souvent de précision.

Vous pouvez désormais préparer vos masques en quelques secondes seulement, sans aucune attente liée à l'IA, grâce à cette extension personnalisée pour l'application de bureau **xTool Studio**.<br />
Elle ajoute une suite complète de formes géométriques interactives et un outil de masque polygonal point par point, accessibles directement dans `Smart Mask` -> `Extraction Methods` -> `Masque` (ainsi qu'en mode `Couleur spot`).

Dessinez, centrez, redimensionnez, faites pivoter et affinez vos masques **instantanément, sans attendre l'extraction par IA !**

Il s’agit d'un portage du plugin de Gatis Udrass, à laquelle j’ai ajouté de nouvelles fonctionnalités et des correctifs.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin2.png">

<br />

### ✨ Fonctionnalités principales

- Compatible Windows et macOS.
- Interface multilingue : anglais, français, allemand, espagnol, italien.
- Installateur autonome et portable : télécharge automatiquement le binaire de **Node.js** nécessaire s'il n'est pas déjà présent dans le dossier `node`.
- Masquage instantané (zéro temps d'attente IA) : conservez ou effacez directement des zones du masque de votre image avec des formes géométriques nettes, des polygones personnalisés ou des fichiers de masque importés.
- Point central interactif (`⊕`) et poignées de redimensionnement / rotation :
  - Après avoir dessiné une forme, elle reste en mode d'ajustement interactif avant d'être appliquée.
  - Faites glisser le `point central bleu` (`⊕`) pour aligner la forme sur le centre exact de votre objet (avec des guides d'alignement en croix).
  - Faites glisser une `poignée de bord ou de coin` pour redimensionner sans perdre votre point central.
  - Faites glisser la `poignée de rotation` pour pivoter sans perdre votre point central.
  - Ajustez finement la position et la taille au mm près (ou en pouces) avec les `touches fléchées` (`←`, `↑`, `↓`, `→`), les boutons de déplacement du panneau latéral, ou des valeurs saisies pour la largeur, la hauteur et la rotation.
  - Cliquez sur **`✓ Appliquer`** (ou appuyez sur `Entrée`) une fois satisfait, ou sur **`✕ Annuler`** (`Échap`) pour abandonner.
- 11 modes de forme intégrés (via le menu déroulant) :
  - **`○ Cercle`** → Cercle parfait `1:1` (idéal pour les dessous de verre ronds, pièces, médaillons et ornements).
  - **`⬭ Ovale / Ellipse`** → Ovale / ellipse à proportions libres avec 8 poignées de redimensionnement.
  - **`▭ Rectangle`** → Rectangle à proportions libres avec `Rayon des coins` réglable (`0–200 mm`).
  - **`□ Carré`** → Carré `1:1` à côtés égaux avec `Rayon des coins` réglable (`0–200 mm`).
  - **`⏢ Quadrilatère 4 points`** → Quadrilatère dont chacun des 4 coins se déplace indépendamment, pour épouser des objets inclinés ou en perspective.
  - **`⬡ Polygone régulier`** → Polygone régulier avec un nombre de côtés réglable (`3–24`, `6` par défaut), premier sommet en haut. Réglez la valeur `Côtés` avec les boutons − / + ou en la saisissant ; la forme reste régulière et uniforme, et chacun de ses points peut toujours être déplacé pour la déformer.
  - **`⭔ Polygone par points`** → Cliquez n'importe où sur l'image pour placer des points qui se relient aussitôt en une forme fermée en direct. Faites glisser un point pour l'ajuster, glissez le milieu d'une arête pour insérer de nouveaux points, faites un clic droit sur un point pour le supprimer, ou glissez le centre `⊕` pour déplacer tout le polygone.
  - **`☆ Étoile`** → Étoile régulière avec un nombre de `Branches` réglable (`3–24`, `5` par défaut), les points intérieurs étant placés à 45 % du rayon extérieur. Changez le nombre avec les boutons − / + ou en le saisissant, et faites glisser un point pour remodeler la forme.
  - **`♡ Cœur`** → Cœur classique à deux lobes arrondis et pointe basse nette, ajusté à la zone que vous tracez. Redimensionnez, pivotez, alignez et déplacez-le comme n'importe quelle autre forme.
  - **`◎ Anneau`** → Anneau circulaire / elliptique avec `Épaisseur de l'anneau` réglable (`0,5-100 mm`).
  - **`✎ Lasso à main levée`** → Dessinez une boucle à main levée et repositionnez-la si besoin.
- Adoucissement des bords (`0–25 mm`) : adoucit les bords du masque pour des transitions soignées en gravure et en impression UV / encre.
- Annuler / Rétablir complets (`↶ Retour`, `↷ Rétablir`) : boutons du panneau latéral et du canevas, `Ctrl/Cmd+Z`, `Ctrl/Cmd+Y` ou `Ctrl/Cmd+Maj+Z`.
- Plusieurs formes à la fois : chaque forme est numérotée dans la liste, peut être sélectionnée avec `Tab` / `Maj+Tab`, copiée / collée ou supprimée.
- Forme centrée en 1 clic (`⊕ Créer une forme centrée`) : place instantanément une forme centrée et ajustable, adaptée à votre image.
- Gestion des masques : enregistrez, exportez (.json, .png) ou importez (.svg, .png, .jpg, .jpeg, .webp, .json) des fichiers de masque.
- Formes modifiables : toutes les formes créées restent modifiables jusqu'à ce que vous cliquiez sur `Appliquer`, et elles peuvent être gérées.
- Prise en charge des raccourcis clavier / souris.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin1.png">

<br />

### 🧩 Compatibilité

- xTool Studio v1.9.11
- xTool Studio Pre-Release v1.10.2

<br />

## 🚀 Installation

### Prérequis

- **xTool Studio v1.9.11** ou **Pre-Release v1.10.2** installé sous **Windows** ou sous **macOS** :
   - Emplacement par défaut sous **Windows** : `%LOCALAPPDATA%\Programs\xTool Studio` ; les emplacements standard tels que `Programs`, `Program Files` et `Program Files (x86)` sont également pris en charge
   - Emplacement par défaut sous **macOS** : `/Applications/xTool Studio.app`
   
> [!NOTE]
> Il est également possible de définir manuellement le dossier d'installation si le chemin d'installation est non standard.

- Téléchargez la dernière version du **plugin Shape & Polygon Mask** : [Ici](https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/releases/latest)

> [!TIP]
> L'installateur télécharge automatiquement le binaire **Node.js** compatible avec votre système. Vous pouvez toutefois le télécharger manuellement et copier le binaire dans le dossier `node`.
>
> - Téléchargez le dernier binaire **Node.js** depuis [nodejs.org](https://nodejs.org/en/download) et choisissez la version **Standalone Binary** :
>
>   - **Windows Intel/AMD** → Choisissez **Windows** avec l'architecture **x64** → Prenez le fichier `node.exe`.
>   - **Windows ARM** → Choisissez **Windows** avec l'architecture **ARM64** → Prenez le fichier `node.exe`.
>   - **Mac Intel** → Choisissez **macOS** avec l'architecture **x64** → Prenez le fichier `node` dans le dossier `bin`.
>   - **Mac Apple Silicon** → Choisissez **macOS** avec l'architecture **ARM64** → Prenez le fichier `node` dans le dossier `bin`.

<br />

**🔒 Sauvegarde automatique sécurisée :** Avant toute modification, l'installateur sauvegarde automatiquement les fichiers d'origine.

### Installation (Windows)

  **1.** Fermez **xTool Studio** s'il est en cours d'exécution.<br />
  **2.** Double-cliquez sur le fichier **`windows.bat`**.<br />
  **3.** Saisissez le choix **`1`** pour lancer l'installateur :<br />
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-windows.png" alt="Windows Menu" width="700" /></p>
  **4.**  et sélectionnez la langue souhaitée:
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-windows.png" alt="Windows Installer" width="700" /></p>
  **5.** Ouvrez **xTool Studio**, ajoutez une image, ouvrez `Masque intelligent` et choisissez `Masque` sous `Méthodes d'extraction`.


### Installation (macOS)

  **1.** Fermez **xTool Studio** s'il est en cours d'exécution.<br />
  **2.** Ouvrez le **Terminal** et appliquez **`chmod +x`** au fichier `macos.command`.<br />
  **3.** Double-cliquez sur le fichier **`macos.command`**.<br />
  **4.** Saisissez le choix **`1`** pour lancer l'installateur :<br />
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/menu-macos.png" alt="macOS Menu" width="700" /></p>
  **5.**  et sélectionnez la langue souhaitée:
         <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/installer-macos.png" alt="macOS Installer" width="700" /></p> 
  **6.** Si macOS refuse l'accès en écriture à l'application : `Réglages Système` → `Confidentialité et sécurité` → `Accès complet au disque` → Ajoutez `Terminal`, puis redémarrez `Terminal` et réessayez.<br />
  **7.** Ouvrez **xTool Studio**, ajoutez une image, ouvrez `Masque intelligent` et choisissez `Masque` sous `Méthodes d'extraction`.

> [!NOTE]
> Après la re-signature ad hoc, macOS peut redemander des autorisations (fichiers, trousseau) et il se peut que vous deviez vous reconnecter. Les mises à jour automatiques de xTool Studio écrasent le plugin : il suffit de relancer l'installateur.


### Langue du plugin

L'installateur demande quelle langue utiliser : `English`, `Français`, `Español`, `Italiano` ou `Deutsch`.<br />
Pour changer de langue plus tard, relancez simplement l'installateur avec l'autre langue (inutile de désinstaller d'abord).

<br />

## 🔄 Désinstaller le plugin / Restaurer xTool Studio

Pour supprimer le plugin et restaurer à tout moment l'archive d'origine non modifiée de **xTool Studio** :

  **1.** Fermez **xTool Studio**.<br />
  **2.** Double-cliquez sur le fichier **`windows.bat`** sous Windows, ou sur le fichier **`macos.command`** sous macOS.<br />
  **3.** Saisissez le choix **`2`** pour lancer le désinstallateur et confirmez la désinstallation.

  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-windows.png" alt="Windows Uninstaller" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/uninstaller-macos.png" alt="macOS Uninstaller" width="700" /></p>

> [!NOTE]
> **Pour les utilisateurs de macOS :** pour retrouver la signature d'origine de xTool, réinstallez l'application.

<br />

## 📑 Vérifier le statut du plugin

  **1.** Double-cliquez sur le fichier **`windows.bat`** sous **Windows**, ou sur le fichier **`macos.command`** sous **macOS**.<br />
  **2.** Saisissez le choix **`3`** pour lancer la vérification du statut.

  **Windows:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-windows.png" alt="Windows Status" width="700" /></p>
        
  **macOS:**
  <p align="left"><img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/status-macos.png" alt="macOS Status" width="700" /></p>

<br />

## ⌨️ Raccourcis clavier

| Raccourci | Action |
|:--|:--|
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>Z</kbd> | **Retour** : Annule la dernière modification ou le dernier *Appliquer* |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>Y</kbd> | **Rétablir** : Restaure la dernière modification |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>C</kbd> | **Copier** la forme active |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>V</kbd> | **Coller** la forme copiée |
| <kbd>Tab</kbd> / <kbd>Maj</kbd> + <kbd>Tab</kbd> | **Sélectionner** la forme suivante / précédente | 
| <kbd>Entrée</kbd> | **Appliquer** |
| <kbd>Échap</kbd> | **Annuler** |
| <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Déplacer la forme active de **1 mm** (0,05 in) |
| <kbd>Maj</kbd> + <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Déplacer la forme active de **5 mm** (0,25 in) |
| <kbd>⌫</kbd> / <kbd>Suppr</kbd> | *Polygone* : Supprimer le dernier point |

> [!NOTE]
> <kbd>Entrée</kbd>, <kbd>Échap</kbd> et les flèches ne réagissent que lorsqu'au moins une forme est en attente.
> Les raccourcis sont désactivés pendant la saisie dans un champ (valeur d'un curseur, par exemple).

## 🖱️ Souris

| Geste | Action |
|:--|:--|
| **Glisser** | Dessiner la forme |
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + **Glisser** | Inverser le mode de tracé : ⌖ Depuis un centre ↔ ⛶ Depuis un coin |
| <kbd>Maj</kbd> + **Glisser** | Cercle → Ellipse · Carré → Rectangle · Anneau → Anneau libre |
| <kbd>Maj</kbd> + **Rotation** | Rotation par pas de **15°** |
| **Clic** sur une forme | La sélectionner (elle devient active) |
| **Clic** sur un point *(polygone)* | Sélectionner et déplacer le point |
| <kbd>Alt</kbd> + **Clic** sur un point *(polygone)* | Supprimer ce point |
| **Clic droit** *(polygone)* | Supprimer le point sous le curseur, sinon le dernier point |
| **Clic** sur les boutons du canevas | Annuler · Retour · Appliquer |

<br />

## 💗 Crédits

Si mon travail vous plaît, n'hésitez pas à me soutenir en m'offrant une 🍺 ou un ☕. Merci beaucoup ! 🙂

<a href="https://ko-fi.com/guilouz" target="_blank"><img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/ko-fi.png?raw=true" width="350"></a>

Un remerciement tout particulier à **Gatis Udrass** pour la base de son plugin.
