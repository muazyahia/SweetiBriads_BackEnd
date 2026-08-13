import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  clientName: string;
  clientPhone: string;
  style: string;
  addons: string[];
  date: string;
  time: string;
}

const BookingSchema: Schema = new Schema(
  {
    clientName: { type: String, required: true },
    clientPhone: { type: String, required: true },
    style: { type: String, required: true },
    addons: { type: [String], default: [] },
    date: { type: String, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBooking>('Booking', BookingSchema);
