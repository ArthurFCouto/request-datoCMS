const assert = require('assert');
const datoService = require('../src/service/datoservice');

const PRODUCT_EXPECTED = {
  id: '14559086',
  barcode: 'https://api.cosmos.bluesoft.com.br/products/barcode/D215D0FAC1ACAEF6B65EE7ED9820DD38.png',
  codigo: '7891910000197',
  descricao: 'AÇÚCAR REFINADO UNIÃO 1KGS',
  imagem: 'https://cdn-cosmos.bluesoft.com.br/products/7891910000197',
  precoMedio: 5.890000000000001,
};
const LIST_PRODUCT_EXPECTED = ['atualPagina', 'porPagina', 'totalPagina', 'totalProduto', 'listaProduto'];
const PRODUCT_NOT_FOUND = {
  details: {
    data: 'O recurso solicitado não existe',
    status: 404,
    statusText: 'Not Found'
  },
  error: 'Ops! Ocorreu um erro durante a exclusão do produto'
};
const USER_EXPECTED = {
  nome: 'Arthur Couto',
  email: 'arthur@gmail.com',
  telefone: '38999414205',
  senha: '12345678',
};

describe('Dato Service testing', function () {
  this.timeout(10000);

  it('Verificando a validação no cadastro de um produto já cadastrado', async () => {
    const expected = {
      details: {
        data: [
          {
            code: 'VALIDATION_UNIQUE',
            message: 'VALIDATION_UNIQUE',
            value: 'codigo',
          },
        ],
        status: 422,
        statusText: 'Unprocessable Entity',
      },
      error: 'Ops! Ocorreu um erro durante o cadastro do produto',
    };
    const result = await datoService.createProduct(PRODUCT_EXPECTED).catch((error) => error);
    assert.deepEqual(result, expected);
  });

  it('Verificando o método de busca pelo código', async () => {
    const result = await datoService.getProductByCode(PRODUCT_EXPECTED.codigo).catch((error) => error);
    assert.deepEqual(result, PRODUCT_EXPECTED);
  });

  it('Verificando o método de busca pela descrição', async () => {
    const result = await datoService.getProductByDescription(PRODUCT_EXPECTED.descricao).catch((error) => error);
    const { listaProduto } = result;
    assert.deepEqual(listaProduto[0], PRODUCT_EXPECTED);
  });

  it('Verificando o método de listagem de todos os produtos', async () => {
    const result = await datoService.getAllProduct().catch((error) => error);
    const resultCompare = Object.keys(result);
    assert.deepEqual(resultCompare, LIST_PRODUCT_EXPECTED);
  });

  it('Verificando a resposta default para um erro', async () => {
    const result = await datoService.destroy().catch((error) => error);
    assert.deepEqual(result, PRODUCT_NOT_FOUND);
  });

  it('Verificando a validação no cadastro de um usuário já cadastrado', async () => {
    const expected = {
      details: {
        data: [
          {
            code: 'VALIDATION_UNIQUE',
            message: 'VALIDATION_UNIQUE',
            value: 'telefone',
          },
        ],
        status: 422,
        statusText: 'Unprocessable Entity',
      },
      error: 'Ops! Ocorreu um erro durante a criação do usuário',
    };
    const result = await datoService.createUser(USER_EXPECTED).catch((error) => error);
    assert.deepEqual(result, expected);
  });
});
