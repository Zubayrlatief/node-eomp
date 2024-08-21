import express from 'express';
import { fetchProduct, insertProduct, deleteProduct, updateProduct } from '../controller/productsController.js';

const router = express.Router();

router.get('/', fetchProduct);
router.get('/products/:id', fetchProduct);
router.post('/addProduct', insertProduct);
router.patch('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;