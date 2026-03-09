import { Router } from 'express';
import { codeAssistant, debugAssistant, docsGenerator, projectArchitect, testGenerator } from '../controllers/ai.controller.js';

export const aiRoutes = Router();
aiRoutes.post('/code-assistant', codeAssistant);
aiRoutes.post('/debug', debugAssistant);
aiRoutes.post('/project-architect', projectArchitect);
aiRoutes.post('/docs-generator', docsGenerator);
aiRoutes.post('/test-generator', testGenerator);
