# Escolha a imagem base
FROM node:14-alpine

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos do projeto
COPY . .

# Exponha a porta que o backend escuta
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
