🧱 BrickNest - Frontend Client
Bienvenue sur le dépôt Frontend du projet BrickNest. Cette interface utilisateur est développée avec React et propulsée par Vite pour des performances optimales.

📋 Prérequis
Node.js (v16 ou supérieur recommandé)

npm (inclus avec Node.js)

Le Backend BrickNest (doit être lancé en parallèle pour que l'application fonctionne pleinement)

🚀 Installation

Cloner le dépôt :

git clone https://github.com/thAlexis/BrickNest_Frontend.git
cd bricknest_frontend

Installer les dépendances : Comme toutes les dépendances sont listées dans le package.json, une simple commande suffit :

npm install

⚙️ Configuration
Actuellement, le projet ne nécessite pas de fichier .env spécifique pour démarrer. L'application est configurée pour pointer vers les endpoints par défaut.

Port Frontend : 5173

Port Backend attendu : 3000 (Assurez-vous que votre API tourne sur ce port).

🏃‍♂️ Démarrage
Lancement standard (Frontend seul)
Pour lancer le serveur de développement Vite :

npm run dev
L'application sera accessible à l'adresse : http://localhost:5173

🔄 Lancement conjoint (Front + Back)
Si vous utilisez Concurrently pour lancer tout le projet d'une seule commande, assurez-vous de respecter l'arborescence suivante sur votre machine locale :

📂 Dossier_Racine_Projet/
├── 📂 bricknest-backend (Le code de l'API)
└── 📂 bricknest-frontend (Ce dossier)

Si le script est configuré dans le package.json (généralement à la racine ou dans ce dossier avec des chemins relatifs), la commande unique lancera les deux serveurs :

npm run dev

# Note : Vérifiez que le script "dev" utilise bien "concurrently" pour cibler les deux dossiers.

🛠️ Stack Technique
Framework : React

Build Tool : Vite

Langage : JavaScript / JSX

Gestionnaire de paquets : npm
