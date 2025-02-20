## Projeto: Sistema de Pedidos

### Arquitetura
Este projeto é composto por três componentes principais:

**Frontend (Angular 19)**: Aplicação web responsável pela interface do usuário.
**Backend (Spring Boot 3.2 com Java 17)**: API REST que gerencia a lógica de negócios e comunicação com o banco de dados.
**Banco de Dados (PostgreSQL)**: Banco de dados relacional usado para armazenar os dados da aplicação.

Esses três componentes são orquestrados usando **Docker Compose** para simplificar o processo de configuração e execução do ambiente de desenvolvimento.

### Requisitos
Docker: Para rodar os contêineres. Você pode instalar o Docker aqui.
Docker Compose: Para orquestrar os contêineres. O Docker Compose já é incluído na instalação do Docker Desktop, mas se você precisar de uma versão separada, pode instalar aqui.
Como Rodar
#### 1. Baixe o Projeto
Clone este repositório para sua máquina local:

```sh
git clone git@github.com:joberthrogers18/orderPlanning.git
cd orderPlanning
```

#### 2. Construção dos Contêineres com Docker Compose
Para rodar a aplicação, basta usar o Docker Compose. O arquivo docker-compose.yml já está configurado para rodar os três componentes (Frontend, Backend e Banco de Dados).

Na raiz do seu projeto, execute o comando:

```sh
docker-compose up --build
```

Esse comando irá:

Construir as imagens do Frontend (Angular) e Backend (Spring Boot).
Rodar o PostgreSQL como banco de dados. Expor as portas necessárias para que você possa acessar as aplicações no seu navegador.
O processo pode levar alguns minutos, dependendo da sua conexão e da performance da sua máquina, pois o Docker vai baixar as imagens necessárias (como o PostgreSQL).

3. Acessando a Aplicação
Após o Docker Compose iniciar os contêineres, você pode acessar a aplicação da seguinte maneira:

Frontend (Angular): http://localhost:4200
Backend (Spring Boot): http://localhost:8080
Banco de Dados (PostgreSQL): Acesse via localhost:5432 usando as credenciais definidas no arquivo docker-compose.yml:
Usuário: postgres
Senha: postgres
Banco de Dados: order-db
