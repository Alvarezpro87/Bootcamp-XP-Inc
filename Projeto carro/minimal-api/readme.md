# Minimal API com Autenticação JWT em ASP.NET Core

Este projeto é uma API mínima desenvolvida em ASP.NET Core que gerencia administradores e veículos. Ele implementa autenticação e autorização usando tokens JWT, e utiliza o Entity Framework Core com SQL Server para persistência de dados.

## Índice

- [Minimal API com Autenticação JWT em ASP.NET Core](#minimal-api-com-autenticação-jwt-em-aspnet-core)
  - [Índice](#índice)
  - [Recursos](#recursos)
  - [Pré-requisitos](#pré-requisitos)
  - [Configuração do Ambiente](#configuração-do-ambiente)
  - [Uso do Swagger](#uso-do-swagger)

## Recursos

- **API Mínima**: Utiliza o modelo minimalista de desenvolvimento de APIs introduzido no ASP.NET.
- **Autenticação JWT**: Implementa autenticação baseada em tokens JWT.
- **Autorização por Roles**: Controla o acesso aos endpoints com base em roles (perfis de usuário).
- **Entity Framework Core**: Utiliza EF Core para acesso ao banco de dados SQL Server.
- **Swagger UI**: Integração com Swagger para documentação e teste da API.
- **Injeção de Dependência**: Segue o princípio de inversão de controle para gerenciar dependências.

## Pré-requisitos

- [.NET SDK 6.0 ou superior](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) (pode ser o SQL Server Express ou LocalDB)
- Uma IDE como [Visual Studio](https://visualstudio.microsoft.com/pt-br/vs/) ou [Visual Studio Code](https://code.visualstudio.com/)

## Configuração do Ambiente

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Alvarezpro87/Bootcamp-XP-Inc/tree/532a2c73c84adf37debc17fc1571b990b4d7aed0/Projeto%20carro/minimal-api

2. **Configure a String de Conexão**
   No arquivo appsettings.json, atualize a string de conexão para apontar para o seu servidor SQL Server:

   ```bash
    {
    "ConnectionStrings": {
        "DefaultConnection": "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=SeuBancoDeDados;Integrated Security=True"
    },
    "Jwt": {
        "Key": "sua-chave-super-secreta-e-suficientemente-longa"
    }
    }


Importante: Substitua "sua-chave-super-secreta-e-suficientemente-longa" por uma chave segura para assinatura dos tokens JWT.


1. **Aplicar Migrações e Atualizar o Banco de Dados**

   ```bash
   dotnet ef migrations add InitialCreate
    dotnet ef database update
## Como Executar o Projeto

Execute o seguinte comando no diretório do projeto
    
    dotnet run

## Estrutura do Projeto

- **Dominio**
  - **DTOs**: Objetos de Transferência de Dados.
  - **Entity**: Entidades do modelo de dados.
  - **Enums**: Definições de enums utilizados na aplicação.
  - **ModelViews**: Modelos para as visualizações.
  - **Services**: Serviços que contêm a lógica de negócio.
  - **Interface**: Interfaces dos repositórios.
- **Infra**
  - **Db**: Contexto do banco de dados.
 

## Endpoints Disponíveis

### Autenticação

- **Login**

  ```http
  POST /administradores/login

Body:

```http
{
  "email": "adm@Test.com",
  "password": "123456"
}
```

- **Administradores**
- Listar Administradores

```http

GET /administradores
```
  Descrição:

Retorna uma lista de administradores.
Requer Autorização: Role Admin.
Obter Administrador por ID

```http

GET /administradores/{id}
```
  Descrição:

Retorna os detalhes de um administrador específico.
Requer Autorização: Role Admin.
 - Criar Administrador

```http

POST /administradores
```
Body:

```http

{
  "email": "novo@admin.com",
  "password": "senhaSegura",
  "perfil": "Editor"
}
```
Descrição:

Cria um novo administrador.
Requer Autorização: Role Admin.
Veículos
- Listar Veículos

```http

GET /veiculos

```
Descrição:

Retorna uma lista de veículos.
Requer Autorização.
 - Obter Veículo por ID

```http

GET /veiculos/{id}
```
Descrição:

Retorna os detalhes de um veículo específico.
Requer Autorização: Roles Admin ou Editor.
- Criar Veículo

```http

POST /veiculos
```

Body:

```http
Copiar código
{
  "nome": "Modelo X",
  "marca": "Marca Y",
  "ano": 2021
}
```
Descrição:

Cria um novo veículo.
Requer Autorização: Roles Admin ou Editor.
 - Atualizar Veículo
```http

PUT /veiculos/{id}

```
Body:

```http

{
  "nome": "Modelo X Atualizado",
  "marca": "Marca Y",
  "ano": 2022
}
```
Descrição:

Atualiza as informações de um veículo existente.
Requer Autorização: Role Admin.
 - Excluir Veículo

```http

DELETE /veiculos/{id}
```
Descrição:

Exclui um veículo.
Requer Autorização: Role Admin.

## Uso do Swagger

A API está integrada com o Swagger para facilitar a documentação e o teste dos endpoints.

Acesse o Swagger UI em: http://localhost:Porta/swagger

- Autenticação via Swagger:

Clique em "Authorize" no Swagger UI.

Insira o token JWT:

```http
{seu_token_jwt}
```
Agora você pode testar os endpoints protegidos.
