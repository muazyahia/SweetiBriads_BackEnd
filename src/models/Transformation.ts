import mongoose, { Schema, Document } from 'mongoose';

export interface ITransformation extends Document {
  beforeImageUrl: string;
  afterImageUrl: string;
  title?: string;
  category?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const TransformationSchema: Schema = new Schema(
  {
    beforeImageUrl: { type: String, required: true },
    afterImageUrl: { type: String, required: true },
    title: { type: String },
    category: { type: String },
    beforeLabel: { type: String },
    afterLabel: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<ITransformation>('Transformation', TransformationSchema);
