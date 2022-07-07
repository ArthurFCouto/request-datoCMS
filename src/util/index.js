const fieldsProduct = {
  descricao_produto: 'descricao',
  codigo_produto: 'codigo',
  imagem_produto: 'imagem',
  barcode_produto: 'barcode',
  preco_medio_nacional: 'precoMedio',
};

const fieldsUser = {
  telefone_usuario: 'telefone',
  nome_usuario: 'nome',
  email_usuario: 'email',
  senha_usuario: 'senha',
};

function modelResponseProduct(product) {
  if (Array.isArray(product)) {
    return modelResponseProductList(product);
  }
  const {
    id, barcodeProduto, codigoProduto, descricaoProduto, imagemProduto, precoMedioNacional,
  } = product;
  return {
    id,
    barcode: barcodeProduto,
    codigo: codigoProduto,
    descricao: descricaoProduto,
    imagem: imagemProduto,
    precoMedio: precoMedioNacional,
  };
}

function modelResponseProductList(list) {
  const listaProduto = list.map((item) => modelResponseProduct(item));
  return {
    atualPagina: 1,
    porPagina: listaProduto.length,
    totalPagina: 1,
    totalProduto: listaProduto.length,
    listaProduto,
  };
}

function modelResponseUser(user) {
  const {
    id, email_usuario, nome_usuario, imagem_usuario, senha_usuario, telefone_usuario,
  } = user;
  return {
    id,
    email_usuario,
    nome_usuario,
    imagem_usuario,
    senha_usuario,
    telefone_usuario,
  };
}

function modelResponseError(message, error) {
  const errorMessage = {
    401: 'Não autorizado',
    404: 'O recurso solicitado não existe',
  };
  let details = {};
  if (error && error.statusCode) {
    if (error.statusCode === 422) {
      const { data } = error.body;
      const fields = data.map((field) => {
        if (field.attributes.details.code === 'INVALID_FORMAT') {
          return {
            code: field.attributes.details.code,
            value: field.attributes.details.failing_value,
            message: field.attributes.details.message,
          };
        }
        return {
          code: field.attributes.details.code,
          value: fieldsProduct[field.attributes.details.field] || fieldsUser[field.attributes.details.field],
          message: field.attributes.details.code,
        };
      });
      details = {
        data: fields,
        status: error.statusCode,
        statusText: error.statusText,
      };
    } else {
      details = {
        data: errorMessage[error.statusCode],
        status: error.statusCode,
        statusText: error.statusText,
      }
    };
  } else {
    console.log('Erro não mapeado: ', error);
    details = {
      data: 'Houve um erro interno no sistema',
      status: 500,
      statusText: 'Internal server error',
    };
  }
  const response = {
    error: message,
    details,
  };
  return new Promise((resolve, reject) => {
    reject(response);
  });
}

module.exports = {
  modelResponseProduct,
  modelResponseUser,
  modelResponseError,
};