# Dockerfile para o React

# Usar imagem oficial do Node.js
FROM node:16

# Criar e definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto React
COPY . .

# Instalar as dependências
RUN npm install

# Expor a porta 3000 para a aplicação React
EXPOSE 3000

# Iniciar o servidor de desenvolvimento do React
CMD ["npm", "start"]
