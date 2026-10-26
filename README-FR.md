#  Plugin Shape & Polygon Mask pour xTool Studio

Avez-vous déjà essayé de créer un masque pour un dessous de verre rond, une plaque rectangulaire ou un objet en angle dans **xTool Studio** ?<br />
Attendre l'extraction par IA ou dessiner les masques à la main au pinceau prend une éternité, et les bords manquent souvent de précision.

Vous pouvez désormais préparer vos masques en quelques secondes seulement, sans aucune attente liée à l'IA, grâce à cette extension personnalisée pour l'application de bureau **xTool Studio**.<br />
Elle ajoute une suite complète de formes géométriques interactives et un outil de masque polygonal point par point, accessibles directement dans `Smart Mask` -> `Extraction Methods` -> `Masque` (ainsi qu'en mode `Couleur spot`).

Dessinez, centrez, redimensionnez, faites pivoter et affinez vos masques **instantanément, sans attendre l'extraction par IA !**

Il s’agit d'un portage du plugin de Gatis Udrass, à laquelle j’ai ajouté de nouvelles fonctionnalités et des correctifs.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin2.png" alt="Plugin" />

<br />

## ✨ Fonctionnalités principales

- Masquage instantané (zéro attente IA) : Conservez ou supprimez directement des zones du masque de votre image avec des formes géométriques nettes, des polygones personnalisés ou des fichiers de masque importés.
- Point central interactif (`⊕`) et poignées de redimensionnement/rotation :
  - Après avoir dessiné une forme, celle-ci reste en mode d'ajustement interactif avant d'être appliquée.
  - Faites glisser le `point central bleu` (`⊕`) pour l'aligner exactement sur le centre de votre objet (avec des repères d'alignement en croix).
  - Faites glisser n'importe quelle `poignée de bord ou de coin` pour redimensionner sans perdre votre point central.
  - Faites glisser la `poignée de rotation` pour faire pivoter la forme sans perdre votre point central.
  - Affinez la position et la taille pixel par pixel avec les `touches fléchées` (`←`, `↑`, `↓`, `→`) ou les boutons de déplacement du panneau latéral.
  - Cliquez sur **`✓ Appliquer`** (ou appuyez sur `Entrée`) lorsque vous êtes satisfait, ou sur **`✕ Annuler`** (`Échap`) pour tout abandonner.
- 8 modes de forme intégrés (via le menu déroulant) :
  - **`○ Cercle`** → Cercle parfait `1:1` (idéal pour les dessous de verre ronds, pièces, médaillons et ornements).
  - **`⬭ Ovale / Ellipse`** → Ovale / ellipse à proportions libres avec 8 poignées de redimensionnement.
  - **`▭ Rectangle`** → Rectangle à proportions libres avec `Rayon des coins` réglable (`0–200 mm`).
  - **`□ Carré`** → Carré `1:1` à côtés égaux avec `Rayon des coins` réglable (`0–200 m`).
  - **`⏢ Quadrilatère 4 points`** → Quadrilatère à 4 coins, chacun pouvant être déplacé indépendamment pour s'adapter aux objets en angle ou en perspective.
  - **`⭔ Polygone par points`** → Cliquez n'importe où sur l'image pour placer des points qui se relient immédiatement en une forme fermée en direct. Faites glisser un point pour l'ajuster, faites glisser le milieu d'un bord pour insérer de nouveaux points, faites un clic droit sur un point pour le supprimer, ou faites glisser le centre `⊕` pour déplacer tout le polygone.
  - **`◎ Anneau`** → Anneau circulaire/elliptique avec `Épaisseur de l'anneau` réglable (`0.5-100 mm`).
  - **`✎ Lasso à main levée`** → Dessinez une boucle à main levée et repositionnez-la si nécessaire.
- Adoucissement des bords (0–25 mm) : Adoucit les bords du masque pour des transitions fluides en gravure et en impression UV/encre.
- Forme centrée en 1 clic (`⊕ Créer une forme centrée`) : Place instantanément une forme centrée et ajustable, adaptée à votre image.
- Gestion des masques : Enregistrez, exportez (.json, .png) ou importez (.svg, .png, .jpg, .jpeg, .webp, .json) des fichiers de masque.
- Formes modifiables : Toutes les formes créées restent modifiables jusqu’à ce que vous cliquiez sur `Appliquer` ; elles peuvent par ailleurs être gérées.

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin1.png" alt="Plugin" />

<br />

## ✨ Nouvelles fonctionnalités ajoutées à la version d'origine

- Ajout de la prise en charge de macOS.
- Ajout de la prise en charge de xTool Studio Pre-Release v1.10.2.
- Installateur autonome et portable : il n'est plus nécessaire d'installer **Node.js**, l'installateur télécharge automatiquement le binaire requis s'il n'est pas déjà présent dans le dossier `node`.
- Prise en charge multilingue : anglais, français, allemand, espagnol, italien.
- Prise en charge de la rotation du masque : il est désormais possible de faire pivoter un masque.
- Prise en charge de l'import de fichiers SVG : le SVG est ajusté à l'image (90 % de la taille, centré, proportions conservées) et appliqué instantanément. Il est aussi ajouté à la bibliothèque, comme un PNG importé.
- Correction de la liste des masques enregistrés qui n'était pas mise à jour en temps réel.
- Correction de la fonction elliptique pour l'anneau.
- Interface améliorée.

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

Un grand merci à **Gatis Udrass** pour son brillant plugin.
Vous pouvez lui offrir un café par un don :

<p align="left">
  <img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/PayPal-QRCode-for-Gatis-Udrass.png?raw=true" alt="Faire un don via le QR code PayPal" width="260" />
</p>

Et vous pouvez aussi me remercier (**Cyril Guislain**) si vous appréciez les modifications apportées :

<p align="left">
  <img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/PayPal-QRCode-for-Cyril-Guislain.png?raw=true" alt="Faire un don via le QR code PayPal" width="260" />
</p>

<p align="left">
  <em>Scannez le QR code PayPal ci-dessus avec l'appareil photo de votre téléphone ou l'application PayPal pour faire un don. Merci pour votre soutien !</em>
</p>
