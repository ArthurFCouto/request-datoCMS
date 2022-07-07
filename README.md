# Requisições DatoCMS
## Node JS + GraphQL

<h3 align="center">
  Aplicação com exemplos de requisições na plataforma DatoCMS. Foi desenvolvido a classe service para a comunicação com a API, e a classe teste para a execução dos métodos.
</h3>

## O que é DatoCMS :question:

Segundo o portal da própria plataforma, o DatoCMS é uma plataforma amigável, segura e poderosa que permite que profissionais, principalmente equipes de desenvolvedores, criem um back-end complexo em minutos e tragam qualquer tipo de conteúdo para qualquer lugar.

É um CMS baseado em API, onde todo o conteúdo é acessível via requisições. É oferecido uma API de entrega de conteúdo em GraphQL e API de gerenciamento de conteúdo.

### Funcionalidades testadas :gear:

- :heavy_check_mark: Cadastro de produtos;
- :heavy_check_mark: Busca de produtos: Pelo código ou pela descrição;
- :heavy_check_mark: Listagem de todos os produtos;
- :heavy_check_mark: Exlusão de produtos;
- :heavy_check_mark: Cadastro de usuários;

### Configurações necessárias :computer:

Para visualizar e testar a aplicação em sua máquina é preciso:

-  [Git](https://git-scm.com);
-  [Node](https://nodejs.org/);

### Clonando o repositório :arrows_counterclockwise:
1. Pelo terminal, acesse o diretório em que deseja ter o repositório clonado e execute o comando a seguir.
```bash
# clonando o repositório
git clone https://github.com/ArthurFCouto/request-datoCMS
```

### Iniciando a aplicação :rocket:
1. Pelo terminal, acesse a pasta do repositório clonado e execute os comandos abaixo.
```bash
# instalando as dependências
npm install

# Executando os testes
npm test
```
### Testes :white_check_mark:
1. Antes de iniciar os testes, você deve criar um aquivo `.env` e armazenar o token fornecido pela plataforma DatoCMS. E na plataforma DatoCMS você deve iniciar um projeto e criar as tabelas produto, usuário e seus devidos campos.
2. Para verificar se os métodos estão funcionando corretamente, acesse o terminal e execute o comando abaixo, e aguarde os resultados do teste.
```bash
# testando atendimento aos requisitos
npm test
```

---

Feito por [Arthur Couto](https://www.linkedin.com/in/arthur-couto-b8181743/).
