import { Router } from 'express';
import { analyzeRepo, getRepos } from '../controllers/github.controller.js';

export const githubRoutes = Router();
githubRoutes.get('/repos', getRepos);
githubRoutes.post('/repo-analysis', analyzeRepo);
