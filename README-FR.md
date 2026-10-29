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

**Général**
- Compatible avec **Windows** et **macOS**.
- Interface multilingue : anglais, français, allemand, espagnol, italien.
- Installateur autonome et portable : télécharge automatiquement le binaire **Node.js** nécessaire dans le dossier `node` s'il n'est pas déjà présent.

**Masquage instantané**
- Conservez ou effacez instantanément des zones du masque d'une image avec des formes géométriques, des polygones personnalisés, des tracés à main levée ou des fichiers de masque importés — sans aucun traitement par IA.
- **Aperçu en direct** : cliquez sur le bouton `Aperçu` pour voir l'image telle qu'elle sera avant d'appliquer (les zones retirées s'affichent sous forme de damier).
- Cliquez sur `✓ Appliquer` (ou appuyez sur `Entrée`) une fois satisfait, ou sur `✕ Annuler` (`Échap`) pour abandonner.

**Formes**

| Forme | Description |
|---|---|
| ○ Cercle | Cercle parfait `1:1`. |
| ⬭ Ovale / Ellipse | Ovale / ellipse à proportions libres avec 8 poignées de redimensionnement. |
| ▭ Rectangle | Rectangle à proportions libres avec `Rayon des coins`. |
| □ Carré | Carré à côtés égaux avec `Rayon des coins`. |
| ⏢ Quadrilatère 4 points | Quatre coins indépendants, idéal pour les objets en biais ou en perspective ; prend en charge le `Rayon des coins`. |
| ⬡ Polygone régulier | `3–24` côtés (par défaut `6`) ; chaque point peut toujours être déplacé pour le déformer ; prend en charge le `Rayon des coins`. |
| ⭔ Polygone par points | Cliquez pour placer des points ; déplacez les points, déplacez le milieu d'un côté pour insérer de nouveaux points, faites un clic droit sur un point pour le supprimer. |
| ☆ Étoile | `3–24` branches (par défaut `5`) avec un `Ratio intérieur` réglable (`10–90 %`, par défaut `45 %`) ; prend en charge le `Rayon des coins`. |
| ♡ Cœur | Deux lobes arrondis et une pointe nette, avec une boîte de redimensionnement à 4 coins. |
| ◎ Anneau | Anneau circulaire / elliptique avec `Épaisseur de l'anneau` réglable (`0.5–100 mm`). |
| ✎ Lasso à main levée | Dessinez une boucle à main levée, puis repositionnez-la. |

- Rayon des coins : `0–200 mm`.
- Flou des bords : `0–25 mm` (bords adoucis pour les transitions de gravure et d'impression UV / encre).

**Édition interactive**
- Chaque nouvelle forme reste en mode ajustement jusqu'à ce que vous l'appliquiez.
- Faites glisser le point central bleu `⊕` pour aligner la forme sur le centre exact de votre objet.
- Faites glisser une poignée de bord ou de coin pour redimensionner, ou la poignée de rotation pour pivoter, sans perdre le point central.
- Ajustez finement la position et la taille en mm ou en pouces avec les `Touches fléchées` (`Maj` pour des pas plus grands), les boutons de déplacement, ou en saisissant des valeurs exactes pour la largeur, la hauteur et la rotation.
- `⊕ Créer une forme centrée` : place instantanément une forme réglable adaptée à votre image.
- `↶ Retour` / `↷ Rétablir` complets : boutons du panneau latéral et du canevas, `Ctrl/Cmd+Z`, `Ctrl/Cmd+Y` ou `Ctrl/Cmd+Maj+Z`.

**Formes multiples**
- Combinez plusieurs formes en une seule opération : elles sont numérotées dans la liste **Formes éditables** et restent modifiables jusqu'à ce que vous cliquiez sur `Appliquer`.
- Sélectionnez avec `Tab` / `Maj+Tab` ou en cliquant, `Dupliquer` (`Ctrl/Cmd+D`), `Supprimer`, et `Masquer` / `Verrouiller` n'importe quelle forme.

**Gestion des masques**
- Enregistrez des masques, y compris des masques multi-formes qui restaurent chaque forme (type, rotation, rayon, flou…) prête à être modifiée.
- Exportez (`.json`, `.png`) ou importez (`.svg`, `.png`, `.jpg`, `.jpeg`, `.webp`, `.json`).

<img src="https://raw.githubusercontent.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/refs/heads/main/images/plugin1.png">

<br />

### 🧩 Compatibilité

- xTool Studio v1.9.11
- xTool Studio Pre-Release v1.10.2

<br />

## 🚀 Installation

### Prérequis

- **xTool Studio** installé sous **Windows** ou sous **macOS** :
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
| <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>D</kbd> | **Dupliquer** la forme active |
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

<a href="https://ko-fi.com/guilouz" target="_blank"><img src="https://github.com/Guilouz/Shape-and-Polygon-Mask-Plugin-for-xTool-Studio/blob/main/images/ko-fi.png?raw=true" width="350" target="_blank"></a>

Un remerciement tout particulier à **Gatis Udrass** pour la base de son plugin.
