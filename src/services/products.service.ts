import productsModel from '../database/models/product.model';
import { Product, ProductWithoutId } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(
  product: ProductWithoutId,
): Promise<ServiceResponse<Product>> {
  const newProduct = await productsModel.create(product);
  return { status: 201, data: newProduct.dataValues };
}

async function list(): Promise<ServiceResponse<Product[]>> {
  const products = await productsModel.findAll();
  const productsClean = products.map((product) => product.dataValues);
  return { status: 200, data: productsClean };
}

export default {
  create,
  list,
};