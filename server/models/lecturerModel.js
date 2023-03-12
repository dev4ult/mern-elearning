import mongoose, { Schema } from 'mongoose';

const lecturerSchema = new Schema(
  {
    nip: {
      type: Number,
      required: [true, 'Please add nip field'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Lecturer', lecturerSchema);
