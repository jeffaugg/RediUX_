# Escolha a imagem base
FROM node:14-alpine

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Limpe o cache do npm
RUN npm cache clean --force

# Instale as dependências
RUN npm install

# Copie os arquivos do projeto
COPY . .

# Construa o aplicativo para produção
RUN npm run build

# Exponha a porta que o frontend escuta
EXPOSE 8080

# Comando para servir o aplicativo construído
CMD ["npm", "start"]
