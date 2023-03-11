import { Router } from 'express';
import { getCourses, createCourse, findCourse } from '../controllers/courseController.js';

const router = Router();

router.route('/').get(getCourses).post(createCourse);

router.get('/:id', findCourse);

export default router;
