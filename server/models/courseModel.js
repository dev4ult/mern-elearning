import mongoose, { Schema } from 'mongoose';

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
    major: {
      type: String,
      required: [true, 'Please choose a major'],
    },
    accessibility: {
      type: String,
      enum: ['Public', 'Private'],
      required: [true, 'Please choose the accesibility'],
    },
    key: {
      type: String,
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

export default mongoose.model('courses', courseSchema);
