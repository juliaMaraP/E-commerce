Catálogo de E-commerce com Autenticação e Padrões de Design (Service & Repository)
Este projeto implementa um catálogo de e-commerce com autenticação de usuários, utilizando Laravel para o backend, React para o frontend, MySQL como banco de dados, e Docker para containerização. O código segue os padrões de design Service e Repository, promovendo uma boa organização e separação de responsabilidades.

Funcionalidades
Backend (Laravel)
Produtos:

Listagem de produtos com paginação.

Exibição de detalhes de um produto específico.

Filtro por categoria de produto.

Busca de produtos por nome ou descrição.

Categorias:

Listagem de categorias de produtos.

Autenticação e Autorização:

Registro de usuários.

Login de usuários com geração de token JWT.

Proteção de endpoints com autenticação baseada em Sanctum.

Frontend (React)
Exibição da lista de produtos com filtragem por categoria e pesquisa por nome/descrição.

Detalhamento do produto.

Cadastro e login de usuários com armazenamento do token no localStorage.

Docker
O projeto está containerizado com Docker e Docker Compose.

Inclui três containers:

Backend (Laravel + PHP + Composer).

Banco de dados MySQL.

Frontend (React + Node.js).

Pré-requisitos
Antes de rodar o projeto, certifique-se de que você tem os seguintes itens instalados:

Docker e Docker Compose: Para rodar o ambiente containerizado.

Composer: Para gerenciar as dependências do Laravel.

Node.js e npm: Para rodar o frontend em React.

Instruções de Execução
Passo 1: Clonar o Repositório
Clone este repositório para o seu ambiente local:

bash
Copiar
git clone https://github.com/seu-usuario/ecommerce-catalog.git
cd ecommerce-catalog
Passo 2: Configuração do Docker
Com o Docker e Docker Compose instalados, navegue até o diretório do projeto e execute o comando para iniciar os containers.

bash
Copiar
docker-compose up --build
Esse comando irá:

Criar e iniciar os containers do backend, frontend e banco de dados.

Rodar o Laravel em um container, o React em outro, e o MySQL no terceiro.

Passo 3: Configuração do Banco de Dados
Após os containers estarem em execução, você precisará rodar as migrations para configurar o banco de dados. Para isso, execute o seguinte comando no container do backend:

bash
Copiar
docker-compose exec app php artisan migrate
Isso irá criar as tabelas necessárias no banco de dados.

Passo 4: Configuração do Frontend
O frontend em React será automaticamente acessado pelo Docker na URL configurada. Mas para rodá-lo localmente (fora do Docker), basta entrar no diretório do frontend e rodar:

bash
Copiar
cd frontend
npm install
npm start
Isso irá rodar o React no http://localhost:3000.

Passo 5: Acessar a API
A API do Laravel estará disponível em http://localhost:8000. A partir deste ponto, você pode acessar os endpoints de produtos, categorias, autenticação e outras funcionalidades.

Endpoints da API
POST /api/register - Registrar um novo usuário.

Corpo da requisição:

json
Copiar
{
  "name": "Nome do Usuário",
  "email": "usuario@exemplo.com",
  "password": "senha123",
  "password_confirmation": "senha123"
}
POST /api/login - Realizar login de um usuário.

Corpo da requisição:

json
Copiar
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
Resposta:

json
Copiar
{
  "message": "Login bem-sucedido",
  "token": "seu_token_jwt_aqui"
}
GET /api/products - Listar todos os produtos com paginação.

GET /api/products/{id} - Exibir detalhes de um produto específico.

GET /api/products?category={id} - Filtrar produtos por categoria.

GET /api/products?search={query} - Buscar produtos por nome ou descrição.

GET /api/categories - Listar todas as categorias de produtos.

Proteção dos Endpoints
Endpoints que requerem autenticação (como a criação de produtos) devem ser chamados com o token JWT no cabeçalho da requisição:

bash
Copiar
Authorization: Bearer seu_token_jwt_aqui
Estrutura do Projeto
Backend (Laravel)
app/Http/Controllers/AuthController.php: Lógica de autenticação (registro e login).

app/Repositories/UserRepository.php: Interações com o banco de dados para o modelo de usuário.

app/Services/UserService.php: Lógica de negócios para o usuário.

app/Models/User.php: Modelo de dados para usuários.

routes/api.php: Definição das rotas da API.

Frontend (React)
src/components/ProductList.js: Exibição da lista de produtos.

src/components/ProductDetail.js: Detalhes de um produto.

src/pages/Login.js: Página de login.

src/pages/Register.js: Página de registro de usuário.

src/api.js: Funções para consumir a API do Laravel.