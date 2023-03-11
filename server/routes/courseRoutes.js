import { Router } from 'express';
import { getCourses, createCourse } from '../controllers/courseController.js';

const router = Router();

router.route('/').get(getCourses).post(createCourse);

export default router;
