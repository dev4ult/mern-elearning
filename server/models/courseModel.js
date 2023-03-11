import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add the course name'],
    },
    owner: {
      type: String,
      required: [true, 'Please add the name of course s owner'],
    },
    student: {
      type: [String],
    },
    lecturer: {
      type: [String],
    },
  },
  { timeStamps: true }
);

export default mongoose.model('Course', courseSchema);
