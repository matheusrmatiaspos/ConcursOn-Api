# ConcursOn-Api
![Logo ConcursOn](https://github.com/user-attachments/assets/9b6cbf9a-cf49-4354-8b89-b2850f8377e2)
> Imagem de autoria própria

<hr>

## 🌐 Visão Geral
O ConcursOn é construido usando TypeScript, NodeJS e MongoDB. Permite que desenvolvedores criem aplicações para cadastrar concursos públicos com a lista de candidatos e vagas ofertadas, permitindo o envio de alertas aos usuários cadastrados através de e-mail, mensagem de WhastsApp e SMS, bem como permite que os usuários tenham controle dos concursos que participam, posição de classificação e a última posição chamada.

<hr>

## 🗃️ Índice
- [`💻 Pré-Requisitos`](#-pré-requisitos)
- [`🛠️ Stack Utilizada`](#%f0%9f%9b%a0-stack-utilizada)
- [`🚩 Iniciando a Aplicação`](#-iniciando-a-aplicação)
    - [`⬇️ Clonando o Repositório`](#️-clonando-o-repositório)
    - [`⚙️ Configurando o .env`](#️-cofigurando-o-env)
    - [`🏁 Rodando a Aplicação`](#-rodando-a-aplicação)
- [`⚓ EndPoints`](#-endpoints)
- [`📁 Estrutura das Pastas`](#-estrutura-das-pastas)
- [`📈 Progresso do Desenvolvimento`](#-progresso-do-desenvolvimento)
<hr>

## 💻 Pré-Requisitos
- NodeJS instalado;
- Conhecimentos de NodeJS e API RESTful;
- MongoDB instalado;
- Conhecimentos em MongoDB.

[`📗 Guia de Instação NodeJs`](https://nodejs.org/pt)
[`📙 Guia de Instação MongoDB`](https://www.mongodb.com/pt-br)

<hr>

## 🛠️ Stack Utilizada
A linguagem ecolhida foi TypeScript juntamente com NodeJS e o banco de dados não relacional MongoDB. Entre as libs utilizadas, as principais são:

- [Express Js](https://expressjs.com/pt-br/)
- [Mongoose Js](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)

![Diagrama da Stack](https://github.com/user-attachments/assets/d8e58ec7-89a7-4994-a903-83ad370db6d8)
> Imagem feita utilizando o [Excalidraw](https://excalidraw.com/)

<hr>

## 🚩 Iniciando a Aplicação
Antes de tudo você deve ter o MongoDB e o NodeJS instalados conforme os [pré-requisitos](#-pré-requisitos).

> [!NOTE]
> Sem a instalação dessas tecnologias a aplicação não irá rodar.

### ⬇️ Clonando o Repositório
Use o comando `git clone` para clonar este repositório ou faça o [download](https://github.com/matheusrmatiaspos/ConcursOn-Api/archive/refs/heads/main.zip) do mesmo:
```bash
git clone https://github.com/matheusrmatiaspos/ConcursOn-Api.git
```
### ⚙️ Cofigurando o .env
É importante criar um arquivos com variáveis a serem utilizadas pela aplicação, como porta onde a API irá rodar e o nome do DataBase que irá acessar, dessa forma crie um arquivo `.env` e insira as seguintes informações:
```bash
MONGODB_NOME = "minhabasededados"
MONGODB_PORTA = 12345
```
Substitua o `"minhabasebasededados"` pelo seu banco de dados criado no MongoDB e `12345` pela porta que deseja rodar a aplicação.

### 🏁 Rodando a Aplicação

Use o comando `npm install` para instalar as dependências do projeto
```bash
npm install
```
Use o comando `npm start` para iniciar a aplicação na porta indicada no [.env](#️-cofigurando-o-env)
```bash
npm start
```
Use o comando `npm run dev` para iniciar a aplicação em modo desenvolvimento na porta indicada no [.env](#️-cofigurando-o-env)
```bash
npm run dev
```
<hr>

## ⚓ Endpoints

### 📒 Editais
| EndPoint | Método | Descrição | Corpo da Requisição |
| --- | --- | --- | --- |
| /editais | GET | Obter todos os editais | N/A |
| /editais | POST| Inserir um edital | `{"numero_do_edital":"","municipio":"","empregos":[{"emprego":"","total_vagas":0,"ultimo-classificado":0,"inscrições":[{"numero_inscrição":0,"nome":"","informações_pessoais":{"cpf":"","rg":"","email":""},"status":{"situação":"","posição":0},"nota_final":0.0,"modalidade":""}]}]}` |


<hr>

## 📁 Estrutura das Pastas

```
index.ts              # Início da aplicação
.env                  # Arquivo das variáveis de ambiente
src
└───context           # Conexão com o banco de dados MongoDB
└───routes            # Rotas e endpoints da Aplicação
└───controllers       # Controladores de rota do Express para toda aplicação
└───repositories      # Todas as interações com o banco de dados
└───models            # Schemas do banco de dados (MongoDB)
└───types             # Os types da aplicação
```
<hr>

## 📈 Progresso do Desenvolvimento

#### 🔒 Segurança
- [ ] Implementação do JWT;
- [ ] Configuração de Roles de usuários.
- [ ] Validação de dados

#### 📒 Editais
- [x] Inserir edital de concurso;
- [x] Consultar todos os editais de concursos cadastrados;
- [ ] Alterar editais;
- [ ] Consultar edital por ID;
- [ ] Consultar editais relacionados a um usuário.

#### 👤 Usuários
- [ ] Cadastrar usuário;
- [ ] Consultar usuário.

#### 📢 Alertas
- [ ] Enviar alerta ao usuário por e-mail;
- [ ] Enviar alerta ao usuário por SMS;
- [ ] Enviar alerta ao usuário por WhastsApp.

<hr>
🫂 Obrigado por usar o ConcursOn API!