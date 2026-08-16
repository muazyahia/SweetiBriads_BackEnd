import { Request, Response } from 'express';
import GalleryItem from '../models/Gallery';
import cloudinary from '../config/cloudinary';

export const getGallery = async (req: Request, res: Response) => {
  try {
    const items = await GalleryItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createGalleryItem = async (req: Request, res: Response) => {
  try {
    const item = new GalleryItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const uploadGalleryItem = (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file provided' });
    }

    const { category, styleName, price } = req.body;

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'sweetibraids_gallery' },
      async (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ message: 'Upload failed', error });
        }

        try {
          const item = new GalleryItem({
            imageUrl: result?.secure_url,
            category,
            styleName,
            price
          });
          await item.save();
          return res.status(201).json(item);
        } catch (dbError: any) {
          return res.status(500).json({ message: dbError.message });
        }
      }
    );

    uploadStream.end(req.file.buffer);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteGalleryItem = async (req: Request, res: Response) => {
  try {
    const item = await GalleryItem.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
