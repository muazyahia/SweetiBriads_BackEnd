import { Request, Response } from 'express';
import Style from '../models/Style';

export const getStyles = async (req: Request, res: Response) => {
  try {
    const styles = await Style.find().sort({ createdAt: -1 });
    res.json(styles);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createStyle = async (req: Request, res: Response) => {
  try {
    const style = new Style(req.body);
    await style.save();
    res.status(201).json(style);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteStyle = async (req: Request, res: Response) => {
  try {
    const style = await Style.findByIdAndDelete(req.params.id);
    if (!style) {
      return res.status(404).json({ message: 'Style not found' });
    }
    res.json({ message: 'Style deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStyle = async (req: Request, res: Response) => {
  try {
    const style = await Style.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!style) {
      return res.status(404).json({ message: 'Style not found' });
    }
    res.json(style);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
