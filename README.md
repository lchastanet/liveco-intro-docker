# Les bases de Docker

Les commandes de base :

```shell
$ docker images -a
```

Permet de lister les images présentes sur le système.

```shell
$ docker ps
```

Permet de lister les conteneur qui sont actuellement actifs sur le système.

```shell
$ docker pull [nom_de_l_image]
```

Permet de récupérer sur [docker hub](https://hub.docker.com/) des images préfabriquées pour tout type d'application.

```shell
$ docker run -it [nom_de_l_image]
```

Permet de lancer un conteneur en mode interractif sur la base de notre image, l'option `-d` permet de lancer le conteneur en mode détaché (en arrière plan), de la même manière l'option `-p` permet de binder les ports de votre machine sur ceux du container (dans l'exemple d'un serveur web on ferait `-p 8080:80`, pour rediriger toutes les requêtes de `http://localhost:8080`, vers le port d'écoute `80` de notre conteneur).

```shell
$ docker stop [id_du_conteneur]
```

Permet de stoper un conteneur.

```shell
$ docker system prune
```

Permet de supprimer tous les conteneurs, tous les réseaux, toutes les images et tous les caches présents sur le système.

Pour créer sa propre image docker, il faut créer un fichier `Dockerfile` :

```shell
$ touch Dockerfile
```

```dockerfile
FROM alpine:3.16

CMD ["echo", "Hello world !"]
```

Pour construire notre image :

```shell
$ docker build -t mon_image .
```

Pour lancer votre image :

```shell
$ docker run -d -p 2368:2368 ocr-docker-build
```

Votre image est déromais disponible et vous pouvez la lancée !

Afin de composer une stack complète nous allons utiliser `docker-compose`

```shell
$ docker-compose up -d
```

Permet de démarer une stack decrite dans un `docker-compose`

```shell
$ docker-compose ps
```

Affiche les stacks.

```shell
$ docker-compose stop
```

Arrête tous les conteneurs d'une stack.

```shell
$ docker-compose down
```

Supprime tous les conteneurs d'une stack.

```shell
$ docker-compose config
```

Permet de valider le fichier `docker-compose.yml`.