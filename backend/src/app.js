import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { authRoutes } from './routes/auth.routes.js';
import { aiRoutes } from './routes/ai.routes.js';
import { githubRoutes } from './routes/github.routes.js';
import { historyRoutes } from './routes/history.routes.js';

export const app = express();

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'devforge-api' }));
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/github', githubRoutes);
app.use('/api/history', historyRoutes);
