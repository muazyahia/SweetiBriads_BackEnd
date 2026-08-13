import { Request, Response } from 'express';
import cloudinary from '../config/cloudinary';

export const uploadImage = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file provided' });
  }

  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: 'sweetibraids' },
    (error, result) => {
      if (error) {
        console.error('Cloudinary upload error:', error);
        return res.status(500).json({ message: 'Upload failed', error });
      }
      return res.status(200).json({ url: result?.secure_url });
    }
  );

  // Convert buffer to stream and pipe it to Cloudinary
  uploadStream.end(req.file.buffer);
};
