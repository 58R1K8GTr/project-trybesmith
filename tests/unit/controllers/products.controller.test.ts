import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsController from '../../../src/controllers/products.controller';
import productsService from '../../../src/services/products.service';
import { productMocksWithoutId, productMocksWithId } from '../../mocks/response.mock';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('testando se o produto é criado', async function () {
    const mockStatus = { status: 201, data: productMocksWithId[0] };
    sinon.stub(productsService, 'create').resolves(mockStatus);
    req.body = productMocksWithoutId[0];
    await productsController.create(req, res);
    expect(res.json).to.have.been.calledWith(productMocksWithId[0]);
    expect(res.status).to.have.been.calledWith(201);
  });

  it('testando se é possível obter os products', async function () {
    const mockStatus = { status: 200, data: productMocksWithId };
    sinon.stub(productsService, 'list').resolves(mockStatus);
    await productsController.list(req, res);
    expect(res.json).to.have.been.calledWith(productMocksWithId);
    expect(res.status).to.have.been.calledWith(200);
  });

});
