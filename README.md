<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
  <header>
    <h1>Catálogo de E-commerce</h1>
    <p>Este projeto é um catálogo simples de produtos para um e-commerce com autenticação de usuários. O catálogo permite a exibição de produtos, listagem por categoria, e pesquisa de produtos. O backend foi desenvolvido com Laravel, o frontend com React, e o banco de dados em MySQL. O projeto foi containerizado utilizando Docker.</p>
  </header>
  
  <section>
    <h2>📋 Objetivo</h2>
    <p>O objetivo deste projeto é fornecer um sistema de catálogo de produtos com autenticação de usuários, com a estrutura bem organizada usando os padrões de design Service e Repository, além da utilização de response collection para padronização das respostas da API.</p>
  </section>

  <section>
    <h2>⚙️ Requisitos do Backend (Laravel + MySQL)</h2>
    <h3>1. API em Laravel</h3>
    <ul>
      <li><strong>GET /api/products</strong>: Listar todos os produtos com paginação.</li>
      <li><strong>GET /api/products/{id}</strong>: Exibir detalhes de um produto específico.</li>
      <li><strong>GET /api/products?category={id}</strong>: Listar produtos por categoria.</li>
      <li><strong>GET /api/products?search={query}</strong>: Buscar produtos por nome ou descrição.</li>
      <li><strong>GET /api/categories</strong>: Listar todas as categorias de produtos.</li>
      <li><strong>POST /api/login</strong>: Autenticar usuário e gerar um token de acesso.</li>
      <li><strong>POST /api/register</strong>: Registrar um novo usuário.</li>
    </ul>
    <h3>2. Autenticação e Autorização</h3>
    <p>A autenticação é implementada utilizando o Laravel Sanctum para garantir que os endpoints protegidos possam ser acessados apenas por usuários autenticados.</p>
  </section>

  <section>
    <h2>🎨 Requisitos do Frontend (React)</h2>
    <h3>1. Exibição dos Produtos</h3>
    <ul>
      <li>Criar uma página de listagem de produtos consumindo a API do Laravel.</li>
      <li>Adicionar funcionalidades de paginação e filtro de categoria.</li>
    </ul>
    <h3>2. Pesquisa de Produtos</h3>
    <p>Criar um campo de busca que consome a API de pesquisa e exibe os resultados na página de listagem.</p>
    <h3>3. Detalhamento do Produto</h3>
    <p>Criar uma página de detalhes de produto que consome a API e exibe informações completas sobre o produto selecionado.</p>
    <h3>4. Cadastro e Login de Usuário</h3>
    <p>Criar páginas de Cadastro e Login utilizando a API de autenticação, e armazenar o token JWT no localStorage após login.</p>
  </section>

  <section>
    <h2>🐳 Dockerização do Projeto</h2>
    <p>O projeto foi containerizado utilizando o Docker para garantir que tanto o backend quanto o frontend possam ser executados em ambientes isolados. O Docker Compose foi configurado para orquestrar os seguintes containers:</p>
    <ul>
      <li><strong>Backend</strong>: Laravel + PHP + Composer</li>
      <li><strong>Banco de Dados</strong>: MySQL</li>
      <li><strong>Frontend</strong>: React + Node.js</li>
    </ul>
  </section>

  <section>
    <h2>🛠️ Como Rodar o Projeto Localmente</h2>
    <h3>1. Clonando o Repositório</h3>
    <pre><code>git clone [https://github.com/seu-usuario/ecommerce-catalog.git](https://github.com/juliaMaraP/E-commerce.git)</code></pre>
    
    <h3>2. Rodando com Docker</h3>
    <p>Após clonar o repositório, entre na pasta do projeto e execute os seguintes comandos:</p>
    <pre><code>docker-compose up --build</code></pre>
    <p>Isso irá construir os containers e iniciar o backend, frontend, e o banco de dados MySQL.</p>
    
    <h3>3. Configurações do Backend</h3>
    <ul>
      <li>Execute as migrations do Laravel:</li>
      <pre><code>docker-compose exec backend php artisan migrate</code></pre>
      <li>Popule o banco de dados com alguns dados de teste (opcional):</li>
      <pre><code>docker-compose exec backend php artisan db:seed</code></pre>
    </ul>

    <h3>4. Acesse o Projeto</h3>
    <p>O frontend estará disponível no endereço <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> e o backend estará acessível no endereço <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>.</p>
  </section>

  <section>
    <h2>🔐 Segurança e Boas Práticas</h2>
    <p>A autenticação foi implementada com Laravel Sanctum e as respostas da API seguem o padrão de response collection para garantir consistência e facilidade de consumo no frontend.</p>
    <p>O código segue boas práticas de design, utilizando o padrão Repository e Service para garantir a separação de responsabilidades, modularidade e facilidade de manutenção.</p>
  </section>
 </body>
</html>
