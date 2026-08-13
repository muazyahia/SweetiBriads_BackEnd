import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { sub: admin._id, email: admin.email },
      process.env.JWT_SECRET || 'super_secret_sweeti_key_2024',
      { expiresIn: '7d' }
    );

    return res.status(200).json({ access_token: token });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { newPassword } = req.body;
    
    // We get user ID from the authMiddleware
    // @ts-ignore
    const adminId = req.user?.sub;
    
    if (!adminId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(newPassword, salt);

    await Admin.findByIdAndUpdate(adminId, { passwordHash });

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
