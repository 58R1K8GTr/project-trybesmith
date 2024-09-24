import express from 'express';
import productsRouter from './products.route';

const router = express.Router();

router.use('/products', productsRouter);

export default router;