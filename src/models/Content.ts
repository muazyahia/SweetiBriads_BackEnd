import mongoose, { Schema, Document } from 'mongoose';

export interface IContent extends Document {
  heroData: Record<string, any>;
  signatureData: Record<string, any>;
  aboutData: Record<string, any>;
  reviewsData: Record<string, any>;
  bookingData: Record<string, any>;
  contactData: Record<string, any>;
}

const ContentSchema: Schema = new Schema(
  {
    heroData: { type: Object, default: {} },
    signatureData: { type: Object, default: {} },
    aboutData: { type: Object, default: {} },
    reviewsData: { type: Object, default: {} },
    bookingData: { type: Object, default: {} },
    contactData: { type: Object, default: {} },
  },
  { timestamps: true }
);

export default mongoose.model<IContent>('Content', ContentSchema);
