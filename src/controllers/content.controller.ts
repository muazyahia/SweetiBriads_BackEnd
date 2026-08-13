import { Request, Response } from 'express';
import Content from '../models/Content';

export const getContent = async (req: Request, res: Response) => {
  try {
    let content = await Content.findOne();
    if (!content) {
      content = new Content();
      await content.save();
    }
    res.json(content);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateContent = async (req: Request, res: Response) => {
  try {
    let content = await Content.findOne();
    if (!content) {
      content = new Content();
    }
    Object.assign(content, req.body);
    await content.save();
    res.json(content);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
