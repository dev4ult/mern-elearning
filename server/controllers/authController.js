import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import userModel from '../models/userModel.js';

const getToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '30d' });
};

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (user && bcrypt.compare(password, user.password)) {
    res.status(200).json({ usermail: umail, token: getToken(10) });
  } else {
    throw new Error('Invalid username/email or password');
  }
});

const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email) {
    throw new Error('username or email is required to regist this user');
  }

  const emailIsExist = await userModel.findOne({ email });

  if (emailIsExist) {
    throw new Error('email has been registered');
  }

  if (!password) {
    throw new Error('password field is required');
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  userModel.create({ username, email, password: hashPassword });

  res.status(200).json({ message: 'user is successfully registered' });
});

export { login, register };
