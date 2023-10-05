# Définit notre image de base
FROM node:16.14

# Définit le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Ajoute les fichiers "packages" de notre projet au conteneur
COPY package*.json ./

# Permet de lancer des commandes pendant la construction du conteneur
RUN npm install

# Ajoute les fichiers de notre projet au conteneur
COPY . .

# Numéro de port par lequel notre conteneur sera accessible 
EXPOSE 8000

# Créer un volume de stockage dans notre conteneur
#VOLUME /app/logs

# Commande par défault lorsque le conteneur est lancé
CMD [ "npm", "start" ]
