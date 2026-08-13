import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  name: string;
  location?: string;
  text: string;
  date: Date;
}

const ReviewSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<IReview>('Review', ReviewSchema);
