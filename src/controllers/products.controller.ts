import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response) {
  const { body } = req;
  const { status, data } = await productsService.create(body);
  res.status(status).json(data);
}

export default {
  create,
};