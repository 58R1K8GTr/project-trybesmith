import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productsService from '../../../src/services/products.service';
import { productMocksWithId, productMocksWithoutId } from '../../mocks/response.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('testando se é possível cadastrar um produto', async function () {
    const productMock = ProductModel.build(productMocksWithId[0])
    sinon.stub(ProductModel, 'create').resolves(productMock);
    const { status, data } = await productsService.create(productMocksWithoutId[0]);
    expect(status).to.be.equal(201);
    expect(data).to.be.deep.equal(productMocksWithId[0]);
  });

});
