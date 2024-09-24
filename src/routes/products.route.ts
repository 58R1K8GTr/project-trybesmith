import express from 'express';
import productsController from '../controllers/products.controller';

const routerProducts = express.Router();

routerProducts.post('/', productsController.create);
routerProducts.get('/', productsController.list);

export default routerProducts;