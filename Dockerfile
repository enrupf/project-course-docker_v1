# Seleccionamos la imagen 
FROM node:16

# Seleccionar el directorio de trabajo
WORKDIR /app

# Copiar package.json and package-lock.json
COPY package*.json .

# Instalar dependencias
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 
RUN mkdir /app/node_modules/.cache && chmod -R 777 /app/node_modules/.cache

# Copiar el resto de archivos en el working directory
COPY . .

# Ejecutamos npm start
CMD ["npm", "start"]