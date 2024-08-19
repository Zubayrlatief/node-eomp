import express from 'express'
import { fetchProduct, fetchProduct, insertProduct, deleteProducts, updateProduct } from '../controller/productsController.js'

const router = express.Router()
  
router.get('/fetchProducts', fetchUser)

router.get('/fetchProducts/:id', fetchUser)

router.post('/insert', insertUser)

router.post('/delete/:id', deleteUser)

router.post('/update', updateUser)
 
export default router