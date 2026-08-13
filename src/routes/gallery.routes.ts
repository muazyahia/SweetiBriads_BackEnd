import { Router } from 'express';
import { getGallery, createGalleryItem, deleteGalleryItem } from '../controllers/gallery.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getGallery);
router.post('/', authMiddleware, createGalleryItem);
router.delete('/:id', authMiddleware, deleteGalleryItem);

export default router;
