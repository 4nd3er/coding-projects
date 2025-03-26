import { Router } from "express";
import { createUser, deleteUserById, getUserById, getUsers, updateUserById } from "../controllers/users.controller.js";
import { validateRole, validationToken } from "../middlewares/auth.js";

const router = Router();

router.get('/users', validationToken, (req, res, next) => validateRole(req, res, next, 'admin'), getUsers);
router.get('/users/:id', validationToken, getUserById);
router.post('/users', createUser);
router.put('/users/:id', validationToken, updateUserById);
router.delete('/users/:id', validationToken, (req, res, next) => validateRole(req, res, next, 'admin'), deleteUserById);

export default router;