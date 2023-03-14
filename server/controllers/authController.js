import asyncHandler from 'express-async-handler';

const login = asyncHandler(async (req, res) => {
  const data = await authModel.find({});
});

export { login };
