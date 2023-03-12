import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add name field'],
    },
    email: {
      type: String,
      required: [true, 'Please add email field'],
    },
    password: {
      type: String,
      required: [true, 'Please add password field'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
