import express from 'express';
import { getUsers, getUser, insertUser, deleteUser, updateUser } from '../controller/usersController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/users/:id', getUser);
router.post('/register', insertUser);  // Changed this line
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
