import express from 'express'
import { fetchUser, fetchUser, insertUser, deleteUser, updateUser } from '../controller/usersController.js'

const router = express.Router()
  
router.get('/fetchUsers', fetchUser)

router.get('/fetchUsers/:id', fetchUser)

router.post('/insert', insertUser)

router.post('/delete/:id', deleteUser)

router.post('/update', updateUser)
 
export default router
