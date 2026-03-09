import { Router } from 'express';
import { getHistory } from '../controllers/history.controller.js';

export const historyRoutes = Router();
historyRoutes.get('/', getHistory);
