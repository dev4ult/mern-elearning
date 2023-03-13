import mongoose, { Schema } from 'mongoose';

const studentSchema = new Schema({
  nim: {
    type: Number,
    required: [true, 'Please add nim field'],
  },
});

export default mongoose.model('students', studentSchema);
