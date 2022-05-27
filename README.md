# Requisições DatoCMS
## Node JS
#

<h3 align="center">
  Aplicação com exemplos de requisições na plataforma DatoCMS. Foi desenvolvido a classe service para comunicação com a API, e a classe teste para a execução dos métodos.
</h3>

### DatoCMS
Segundo o portal da própria plataforma, o DatoCMS é uma plataforma amigável, segura e poderosa que permite que profissionais, principalmente equipes de desenvolvedores, criem um back-end complexo em minutos e tragam qualquer tipo de conteúdo para qualquer lugar.

É um CMS baseado em API, onde todo o conteúdo é acessível via requisições. É oferecido uma API de entrega de conteúdo em GraphQL e API de gerenciamento de conteúdo.

### Funcionalidades da Aplicação

- Cadastrar produtos;
- Buscar produtos pelo código;
- Buscar produtos pela descrição;
- Listar todos os produtos;
- Exluir produtos;
- Cadastrar um usuário.

### Configurações necessárias

Seguem as configurações neessárias para visualizar a aplicação em sua máquina.

-  [Git](https://git-scm.com);
-  [Node](https://nodejs.org/);
-  [Yarn](https://yarnpkg.com/);

### Clonando o repositório
1. Pelo terminal, acesse o diretório em que deseja ter o repositório clonado e execute o comando a seguir.
```bash
# clonando o repositório
git clone https://github.com/ArthurFCouto/request-datoCMS
```

### Iniciando a aplicação
1. . Pelo terminal, acesse a pasta do repositório clonado e execute os comandos abaixo.
```bash
# instalando as dependências
npm install

# Executando os testes
npm test
```
### Realizando os testes
1. Antes de iniciar os testes, você deve criar um aquivo `.env` e armazenar token fornecido pela plataforma DatoCMS. E na plataforma DatoCMS você deve iniciar um projeto e criar as tabelas produto, usuário e seus devidos campos.
2. Para verificar se os métodos estão funcionando corretamente, acesse o terminal e execute o comando abaixo, e aguarde os resultados do teste.
```bash
# testando atendimento aos requisitos
npm test
```

---

Feito por Arthur Couto: Contato: https://www.linkedin.com/in/arthur-couto-b8181743/