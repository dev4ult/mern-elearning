import asyncHandler from 'express-async-handler';

const login = asyncHandler(async (req, res) => {
  res.send(req.body);
});

export { login };
