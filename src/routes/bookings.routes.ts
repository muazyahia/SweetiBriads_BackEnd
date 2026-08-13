import { Router } from 'express';
import { getBookings, createBooking, getBookingStats, deleteBooking } from '../controllers/bookings.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getBookings);
router.post('/', createBooking);
router.get('/stats', authMiddleware, getBookingStats);
router.delete('/:id', authMiddleware, deleteBooking);

export default router;
