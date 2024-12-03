import express from 'express';
import { getUsers, addUser } from '../controllers/usersController.js';

const router = express.Router();

// Obtenir tous les utilisateurs
router.get('/', getUsers);

// Ajouter un utilisateur
router.post('/', addUser);

export { router as userRoutes };
