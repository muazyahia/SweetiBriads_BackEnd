import { Router } from 'express';
import { uploadImage } from '../controllers/upload.controller';
import { upload } from '../middlewares/upload.middleware';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, upload.single('file'), uploadImage);

export default router;
