import mongoose, { Schema, Document } from 'mongoose';

export interface IGalleryItem extends Document {
  imageUrl: string;
  category?: string;
  styleName?: string;
  price?: string;
}

const GallerySchema: Schema = new Schema(
  {
    imageUrl: { type: String, required: true },
    category: { type: String },
    styleName: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IGalleryItem>('GalleryItem', GallerySchema);
