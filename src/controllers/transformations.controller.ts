import { Request, Response } from 'express';
import Transformation from '../models/Transformation';

export const getTransformations = async (req: Request, res: Response) => {
  try {
    const transformations = await Transformation.find().sort({ createdAt: -1 });
    res.json(transformations);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createTransformation = async (req: Request, res: Response) => {
  try {
    const transformation = new Transformation(req.body);
    await transformation.save();
    res.status(201).json(transformation);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTransformation = async (req: Request, res: Response) => {
  try {
    const transformation = await Transformation.findByIdAndDelete(req.params.id);
    if (!transformation) {
      return res.status(404).json({ message: 'Transformation not found' });
    }
    res.json({ message: 'Transformation deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

import cloudinary from '../config/cloudinary';

const uploadToCloudinary = (buffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'sweetibraids_transformations' },
      (error, result) => {
        if (error) return reject(error);
        if (result) return resolve(result.secure_url);
        reject(new Error('Unknown upload error'));
      }
    );
    uploadStream.end(buffer);
  });
};

export const createTransformationWithImages = async (req: Request, res: Response) => {
  try {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    if (!files || !files['before'] || !files['after']) {
      return res.status(400).json({ message: 'Both before and after images are required.' });
    }

    const [beforeImageUrl, afterImageUrl] = await Promise.all([
      uploadToCloudinary(files['before'][0].buffer),
      uploadToCloudinary(files['after'][0].buffer)
    ]);

    const transformation = new Transformation({
      ...req.body,
      beforeImageUrl,
      afterImageUrl
    });

    await transformation.save();
    res.status(201).json(transformation);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Upload failed' });
  }
};
