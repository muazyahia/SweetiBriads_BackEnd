import { Router } from 'express';
import { getStyles, createStyle, updateStyle, deleteStyle } from '../controllers/styles.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getStyles);
router.post('/', authMiddleware, createStyle);
router.put('/:id', authMiddleware, updateStyle);
router.delete('/:id', authMiddleware, deleteStyle);

export default router;
