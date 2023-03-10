import axios from 'axios';

const API_URL = 'http://localhost:3000/courses/';

const getCourses = async () => {
  const response = await axios(API_URL);
  return response.data;
};

const findCourse = async (courseId) => {
  const response = await axios(API_URL + courseId);
  return response.data;
};

const courseService = { getCourses, findCourse };
export default courseService;
