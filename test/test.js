const assert = require('assert');
const datoService = require('../src/service/datoservice');

const MOCHA_EXPECTED = {
  id: '14559086',
  barcode: 'https://api.cosmos.bluesoft.com.br/products/barcode/D215D0FAC1ACAEF6B65EE7ED9820DD38.png',
  codigo: '7891910000197',
  descricao: 'AÇÚCAR REFINADO UNIÃO 1KGS',
  imagem: 'https://cdn-cosmos.bluesoft.com.br/products/7891910000197',
  precoMedio: 5.890000000000001,
};

const MOCHA_LIST_EXPECTED = expected = {
  atualPagina: 1,
  porPagina: 6,
  totalPagina: 1,
  totalProduto: 6,
  listaProduto: [],
};

describe('Dato Service', () => {
  it('Cadastra um produto na api DatoCMS (Já cadastrado)', async () => {
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
    const result = await datoService.createProduct(MOCHA_EXPECTED).catch((error) => error);
    assert.deepEqual(result, expected);
  }).timeout(10000);

  it('Busca um produto na api DatoCMS pelo código', async () => {
    const result = await datoService.getProductByCode(7891910000197).catch((error) => error);
    assert.deepEqual(result, MOCHA_EXPECTED);
  }).timeout(10000);

  it('Busca uma lista na api DatoCMS pela descrição', async () => {
    const expected = {
      atualPagina: 1,
      porPagina: 1,
      totalPagina: 1,
      totalProduto: 1,
      listaProduto: [
        {
          id: '14266485',
          barcode: '',
          codigo: '7891032014362',
          descricao: 'AZEITONA VERDE OLE FATIADA 130G',
          imagem: 'https://cdn-cosmos.bluesoft.com.br/products/7891032014362',
          precoMedio: '6.425000000000001',
        },
      ],
    };
    const result = await datoService.getProductByDescription('AZEITONA VERDE OLE').catch((error) => error);
    assert.deepEqual(result, expected);
  }).timeout(10000);

  it('Busca todos os produtos cadastrados da api DatoCMS', async () => {
    const result = await datoService.getAllProduct().catch((error) => error);
    const resultCompare = {...result, listaProduto: []};
    assert.deepEqual(resultCompare, MOCHA_LIST_EXPECTED);
  }).timeout(10000);

  it('Exclui um produto na api DatoCMS pelo id', async () => {
    const expected = {
      details: {
        data: 'O recurso solicitado não existe',
        status: 404,
        statusText: 'Not Found'
      },
      error: 'Ops! Ocorreu um erro durante a exclusão do produto'
    }
    const result = await datoService.destroy(123).catch((error) => error);
    assert.deepEqual(result, expected);
  }).timeout(10000);

  it('Cria um usuario na base DatoCMS', async () => {
    const user = {
      nome: 'Arthur Couto',
      email: 'arthur@gmail.com',
      telefone: '38999414205',
      senha: '12345678',
    };
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
    const result = await datoService.createUser(user).catch((error) => error);
    assert.deepEqual(result, expected);
  }).timeout(10000);
});