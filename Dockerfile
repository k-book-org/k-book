# Utiliza una imagen oficial de Node.js como base
FROM node:21-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /kbook-app

# Copia el archivo package.json y package-lock.json al contenedor
COPY ./k-book-app/package*.json ./

# Copia el resto de los archivos del proyecto al contenedor
COPY ./k-book-app .

RUN rm -r -f ./node_modules
RUN rm ./package-lock.json

# Instala las dependencias del proyecto
RUN npm install
RUN npm install -g @angular/cli

# Construye la aplicación Angular
# RUN npm run dev

# Expone el puerto que usa tu aplicación Angular
EXPOSE 4200

# Comando para iniciar la aplicación Angular
CMD ng serve
