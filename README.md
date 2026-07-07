# 🛡️ Trybesmith API — Loja de Itens Medievais em TypeScript com MSC & Sequelize

O **Trybesmith** é uma API RESTful voltada para o gerenciamento de uma loja de itens medievais sob encomenda (como espadas e martelos lendários). O foco principal deste projeto foi construir um back-end robusto utilizando **TypeScript**, estruturado na arquitetura de camadas **MSC (Model-Service-Controller)** e integrado a um banco de dados relacional MySQL por meio do **Sequelize**.

A aplicação conta com endpoints seguros para criação, listagem e relacionamento de produtos e usuários, protegidos por autenticação via **JWT (JSON Web Tokens)** e validações estritas de dados.

---

## 🚀 Habilidades Desenvolvidas & Consolidadas

Este projeto consolidou práticas essenciais para o desenvolvimento de APIs comerciais escaláveis e seguras:

* **Arquitetura de Camadas (MSC):**
    * Separação clara de responsabilidades dividida entre as camadas de controle (*Controllers*), lógica de negócio (*Services*) e interface com o banco de dados (*Models*).
* **Tipagem Estrita com TypeScript:**
    * Criação e exportação de tipos e interfaces customizadas (como `Product` e `User`) para garantir contratos de dados previsíveis e livres de bugs em tempo de compilação.
* **Operações Relacionais Complexas com Sequelize:**
    * Agrupamento e associação de dados (*Joins*) entre tabelas (ex: mapear usuários combinando e transformando uma lista de IDs de produtos artesanais pertencentes a cada um).
* **Segurança e Autenticação Dinâmica:**
    * Implementação de fluxo de login utilizando **JWT** para geração e assinatura de tokens de acesso contendo o payload do usuário.
    * Verificação e comparação segura de senhas criptografadas no banco de dados através da biblioteca **Bcrypt**.
* **Validações de Payload customizadas:**
    * Criação de regras de negócio estritas para tratamento de erros e respostas adequadas em conformidade com o padrão REST (retornando status `400` para campos ausentes e `422` para incompatibilidade de tipos ou tamanhos).
* **Testes de Integração e Cobertura:**
    * Escrita de testes automatizados alcançando **mais de 80% de cobertura** das camadas de *Service* e *Controller*.
    * Uso de técnicas como *Type Assertion* e o método `.build()` do Sequelize para simular instâncias de dados sem poluir o banco real.

---

## 📁 Endpoints e Fluxos de Negócio Implementados

A API é estruturada sob os padrões do modelo de maturidade REST, distribuída nos seguintes recursos:

1.  **`POST /products`**: Cadastra um novo produto medieval atrelando-o a um usuário dono (`userId`). Possui validações completas de obrigatoriedade, tipo (`string` / `number`) e tamanho mínimo de caracteres.
2.  **`GET /products`**: Retorna a lista completa de todas as armas e itens cadastrados na base de dados.
3.  **`GET /users`**: Retorna todas as pessoas usuárias do sistema junto a uma lista agregada contendo os `id`s dos produtos artesanais sob posse de cada uma (`productIds: [1, 2]`).
4.  **`POST /login`**: Autentica um usuário validando suas credenciais encriptadas no banco de dados e gerando um Token JWT válido.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **Linguagem Principal:** TypeScript (v4+)
* **Framework Web:** Express.js
* **Mapeamento ORM:** Sequelize
* **Banco de Dados Relacional:** MySQL
* **Segurança:** JSON Web Tokens (`jsonwebtoken`) & `bcryptjs`
* **Ambiente Isolado:** Docker & Docker Compose
* **Qualidade de Código:** ESLint (Análise estática)

---

## 🐳 Como Executar a API via Docker

Toda a infraestrutura do back-end e do banco de dados está automatizada para rodar de maneira isolada em containers.

1.  **Clone o repositório:**
    ```bash
    git clone git@github.com:seu-usuario/sd-040-project-trybesmith.git
    cd sd-040-project-trybesmith
    ```

2.  **Suba e configure os containers (API na porta `3001` e DB na `3306`):**
    ```bash
    docker-compose up -d --build
    ```

3.  **Acesse o terminal do container e execute o reset do banco para gerar as tabelas e dados iniciais:**
    ```bash
    docker exec -it trybesmith_api bash
    npm run db:reset
    ```

---

## 🧪 Comandos de Testes e Qualidade

Os testes e verificações podem ser chamados diretamente de dentro do container da API:

* **Executar a suite completa de testes locais:**
  ```bash
  npm run test:local
  ```

  * **Verificar a cobertura de código das camadas Service e Controller**:
  ```bash
  npm run test:coverage
  ```

  * **Executar a análise estática do Linter (ESLint)**:
  ```bash
  npm run lint
  ```

## 📐 Modelo de Dados (DER):

A estrutura do banco mapeia a relação de posse de itens artesanais:

* **users**: Guarda o nome de usuário, cargo e a senha encriptada por bcrypt.
* **products**: Cada item possui um nome, preço e aponta diretamente para o seu dono através da chave estrangeira **userId**.
