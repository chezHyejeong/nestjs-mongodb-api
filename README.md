Le projet se trouve dans master.

# nestjs-mongodb-api

TP 2: Développement d’une API RESTful avec NestJS et Mise en place d’outils de monitoring sur l’API NestJS
réalisé par Hyejeong
Objectifs:
1. Appropriation de l’environnement conteneuriser NestJS-MongoDB mis à disposition
2. Intégration de la base de données Mongo côté application
3. Développement d’un module avec CRUD et API RESTful
4. Intégration de Swagger UI
5. Mise en place d’une stratégie de logging propre avec Winston:
  
   1 fichier de log par heure

   tous les niveaux de log

Pour aller plus loin:
1. Ajout d’un deuxième module liés au premier module via une relation 1 à plusieurs
2. Mise en place du logging des requêtes API avec Morgan (la difficulté se trouve dans l’intégration avec Winston)
3. Développement du suivi des metrics avec Prometheus et affichage des metrics sur un dashboard Grafana, exemples :

   Nombre de call API total

   Temps moyen de réponse de l’API

   Pourcentage de requêtes en erreur


## Commencer
Cloner d'abord le projet dans votre répertoire.

### Prérequis
Node.js, npm, MongoDB

### Installation
```bash
npm install
```

### Exécution
Exécutez la commande "tsc" dans le répertoire racine, puis exécutez "node dist/app.js"

```bash
tsc
node dist/main.js
```

### Fonctionnalités
Les principales fonctionnalités du projet.

Sauf Développement du suivi des metrics avec Prometheus et affichage des metrics sur un dashboard Grafana, toutes les fonctionalités sont développées.

### Variables d'environnement

Veuillez remplacer les variables d'environnement ci-dessous par vos propres login.

```bash
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=root
MONGO_INITDB_DATABASE=admin
MONGO_USERNAME=your_user
MONGO_PASSWORD=your_pathword
MONGO_DATABASE=nestjs-mongodb-api
MONGO_URI=mongodb://your_user:your_password@localhost:27017/nestjs-mongodb-api
```

