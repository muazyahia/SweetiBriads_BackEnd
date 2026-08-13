import { Router } from 'express';
import { getTransformations, createTransformation, deleteTransformation, createTransformationWithImages } from '../controllers/transformations.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { upload } from '../middlewares/upload.middleware';

const router = Router();

router.get('/', getTransformations);
router.post('/', authMiddleware, createTransformation);
router.post('/upload', authMiddleware, upload.fields([{ name: 'before', maxCount: 1 }, { name: 'after', maxCount: 1 }]), createTransformationWithImages);
router.delete('/:id', authMiddleware, deleteTransformation);

export default router;
