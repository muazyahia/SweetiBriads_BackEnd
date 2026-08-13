import { Request, Response } from 'express';
import GalleryItem from '../models/Gallery';

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
