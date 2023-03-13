import mongoose, { Schema } from 'mongoose';

const authSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please add email field'],
  },
  password: {
    type: String,
    required: [true, 'Please add password field'],
  },
});

export default mongoose.model('users', authSchema);
