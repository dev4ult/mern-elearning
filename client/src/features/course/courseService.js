import axios from 'axios';

const API_URL = 'http://localhost:3000/courses/';

const allCourses = async () => {
  const response = await axios(API_URL);
  return response.data;
};

const courseService = { allCourses };
export default courseService;
