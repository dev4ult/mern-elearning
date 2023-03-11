import asyncHandler from 'express-async-handler';
import courseModel from '../models/courseModel.js';

const getCourses = asyncHandler(async (req, res) => {
  const data = await courseModel.find({});

  res.status(200).json(data);
});

const createCourse = asyncHandler(async (req, res) => {
  const { name, owner } = req.body;

  if (!name || !owner) {
    res.status(400);
    throw new Error('Please add all the required fields');
  }

  const course = await courseModel.create({
    name,
    owner,
  });

  if (course) {
    res.redirect('/courses/');
  } else {
    res.status(400);
    throw new Error('Something went wrong');
  }
});

export { getCourses, createCourse };
