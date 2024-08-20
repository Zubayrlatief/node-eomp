import express from 'express';
import { fetchUsers, fetchUser, insertUser, deleteUser, updateUser } from '../controller/usersController.js';

const router = express.Router();

router.get('/users', fetchUsers);
router.get('/users/:id', fetchUser);
router.post('/register', insertUser);
router.patch('/users/update/:id', updateUser);
router.delete('/users/delete/:id', deleteUser);

export default router;