import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from '../src/routes/auth.routes';
import bookingsRoutes from '../src/routes/bookings.routes';
import contentRoutes from '../src/routes/content.routes';
import galleryRoutes from '../src/routes/gallery.routes';
import reviewsRoutes from '../src/routes/reviews.routes';
import stylesRoutes from '../src/routes/styles.routes';
import transformationsRoutes from '../src/routes/transformations.routes';
import uploadRoutes from '../src/routes/upload.routes';

dotenv.config();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Database connection (Cached for Serverless)
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is undefined in environment variables');
    }
    const db = await mongoose.connect(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Vercel Serverless requires DB connection on every request execution (it handles caching)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error: any) {
    res.status(500).json({ 
      message: 'Database connection failed', 
      error: error.message || error.toString() 
    });
  }
});

// Routes (with /api prefix to match frontend/dashboard expectations)
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/styles', stylesRoutes);
app.use('/api/transformations', transformationsRoutes);
app.use('/api/upload', uploadRoutes);

// Also support routes without /api prefix for backwards compatibility
app.use('/auth', authRoutes);
app.use('/bookings', bookingsRoutes);
app.use('/content', contentRoutes);
app.use('/gallery', galleryRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/styles', stylesRoutes);
app.use('/transformations', transformationsRoutes);
app.use('/upload', uploadRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Hello World! (Express on Vercel)');
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Local Development Server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
