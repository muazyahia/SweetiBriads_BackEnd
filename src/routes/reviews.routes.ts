import { Router } from 'express';
import { getReviews, createReview, deleteReview } from '../controllers/reviews.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getReviews);
router.post('/', createReview);
router.delete('/:id', authMiddleware, deleteReview);

export default router;
