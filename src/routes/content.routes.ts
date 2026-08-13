import { Router } from 'express';
import { getContent, updateContent } from '../controllers/content.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getContent);
router.put('/', authMiddleware, updateContent);

export default router;
