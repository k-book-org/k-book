# Utiliza una imagen oficial de Node.js como base
FROM node:22-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /kbook-app

# Copia el resto de los archivos del proyecto al contenedor
COPY /k-book-app .

# Instala las dependencias del proyecto
RUN npm install
RUN npm install -g @angular/cli

# Construye la aplicación Angular
# RUN npm run devs

# Expone el puerto que usa tu aplicación Angular
EXPOSE 4200

# Comando para iniciar la aplicación Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
