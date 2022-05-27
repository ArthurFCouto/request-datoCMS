const { SiteClient } = require('datocms-client');
const modelId = {
  produto: '241856',
  usuario: '241854',
};
const {
  modelResponseProduct, modelResponseUser, modelResponseError,
} = require('../../util');

require('dotenv').config();

class DatoService {
  constructor() {
    this.client = new SiteClient(process.env.TOKEN_DATOCMS);
  }

  async createProduct(data) {
    try {
      const product = await this.client.items.create({
        itemType: modelId.produto,
        descricao_produto: data.descricao,
        codigo_produto: data.codigo.toString(),
        imagem_produto: data.imagem,
        barcode_produto: data.barcode,
        preco_medio_nacional: data.precoMedio || '0.00',
      });
      return modelResponseProduct(product);
    } catch (error) {
      return modelResponseError('Ops! Ocorreu um erro durante o cadastro do produto', error);
    }
  }

  async getProductByCode(code) {
    try {
      const product = await this.client.items.all(
        {
          filter: {
            type: 'produto',
            fields: {
              codigoProduto: {
                eq: code,
              },
            },
          },
        },
      );
      const [response] = product;
      return response ? modelResponseProduct(response) : modelResponseError('Ops! Produto não encontrado', { statusCode: 404, statusText: 'Not found' });
    } catch (error) {
      return modelResponseError('Ops! Ocorreu um erro durante a pesquisa por código', error);
    }
  }

  async getProductByDescription(description) {
    try {
      const product = await this.client.items.all(
        {
          filter: {
            type: 'produto',
            fields: {
              descricaoProduto: {
                matches: {
                  pattern: description,
                },
              },
            },
          },
        },
        {
          allPages: true,
        },
      );
      return modelResponseProduct(product);
    } catch (error) {
      return modelResponseError('Ops! Ocorreu um erro durante a pesquisa', error);
    }
  }

  async getAllProduct() {
    try {
      const product = await this.client.items.all(
        {
          filter: {
            type: 'produto',
          },
        },
        {
          allPages: true,
        },
      );
      return modelResponseProduct(product);
    } catch (error) {
      return modelResponseError('Ops! Ocorreu um erro durante a pesquisa', error);
    }
  }

  async destroy(id) {
    try {
      const destroy = await this.client.item.destroy(id);
      return modelResponseProduct(destroy);
    } catch (error) {
      return modelResponseError('Ops! Ocorreu um erro durante a exclusão do produto', error);
    }
  }

  async createUser(data) {
    try {
      const user = await this.client.items.create({
        itemType: modelId.usuario,
        nome_usuario: data.nome,
        email_usuario: data.email,
        telefone_usuario: data.telefone,
        senha_usuario: data.senha,
      });
      return modelResponseUser(user);
    } catch (error) {
      return modelResponseError('Ops! Ocorreu um erro durante a criação do usuário', error);
    }
  }
}

module.exports = new DatoService();
