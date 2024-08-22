import express from 'express';
import { getUsers, getUser, insertUser, deleteUser, updateUser, loginUser } from '../controller/usersController.js';
import { checkUser } from '../middleware/authenticate.js'

const router = express.Router();

router.get('/', getUsers);
router.get('/users/:id', getUser);
router.post('/login', checkUser, loginUser);
router.post('/register', insertUser);  // Changed this line
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);


export default router;
