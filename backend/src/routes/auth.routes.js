import { Router } from 'express';
import { githubAuth } from '../controllers/auth.controller.js';

export const authRoutes = Router();
authRoutes.get('/github', githubAuth);
