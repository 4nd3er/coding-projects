import { Router } from "express";
import {
    createProject,
    deleteProjectById,
    getProjectById,
    getProjects,
    getProjectsByUserId,
    updateProjectById
} from "../controllers/projects.controller.js";
import { validationToken } from "../middlewares/auth.js";

const router = Router();

router.get('/projects', validationToken, getProjects);
router.get('/projects/:id', validationToken, getProjectById);
router.get('/projects/user/:userId', validationToken, getProjectsByUserId);
router.post('/projects', validationToken, createProject);
router.put('/projects/:id', validationToken, updateProjectById);
router.delete('/projects/:id', validationToken, deleteProjectById);

export default router;