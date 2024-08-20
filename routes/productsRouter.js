import express from 'express';
import { fetchProduct, insertProduct, deleteProduct, updateProduct } from '../controller/productsController.js';

const router = express.Router();

router.get('/products', fetchProduct);
router.get('/products/:id', fetchProduct);
router.post('/products/addProduct', insertProduct);
router.patch('/products/update/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;