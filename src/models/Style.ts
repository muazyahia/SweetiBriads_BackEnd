import mongoose, { Schema, Document } from 'mongoose';

export interface IStyle extends Document {
  name: string;
  description?: string;
  tagline?: string;
  features: Array<{ title: string; desc: string }>;
  modelImage?: string;
  posterImage?: string;
}

const StyleSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    tagline: { type: String },
    features: { type: [{ title: String, desc: String }], default: [] },
    modelImage: { type: String },
    posterImage: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IStyle>('Style', StyleSchema);
