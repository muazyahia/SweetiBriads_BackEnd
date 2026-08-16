import { Router } from 'express';
import { getGallery, createGalleryItem, deleteGalleryItem, uploadGalleryItem } from '../controllers/gallery.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { upload } from '../middlewares/upload.middleware';

const router = Router();

router.get('/', getGallery);
router.post('/', authMiddleware, createGalleryItem);
router.post('/upload', authMiddleware, upload.single('file'), uploadGalleryItem);
router.delete('/:id', authMiddleware, deleteGalleryItem);

export default router;
