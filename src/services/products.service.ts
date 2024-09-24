import productsModel from '../database/models/product.model';
import { Product, ProductWithoutId } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(
  product: ProductWithoutId,
): Promise<ServiceResponse<Product>> {
  const newProduct = await productsModel.create(product);
  return { status: 201, data: newProduct.dataValues };
}

export default {
  create,
};