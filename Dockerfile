# Define a imagem base
FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /app-front

# Copia os arquivos de requisitos para o diretório de trabalho
COPY package.json .

# Instala as dependências do projeto
RUN npm install

# Copia o código-fonte para o diretório de trabalho
COPY . .

EXPOSE 3000

# Define o comando de execução da API
CMD ["npm", "start"]
