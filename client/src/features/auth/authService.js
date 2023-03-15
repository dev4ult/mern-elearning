import axios from 'axios';

const API_URL = 'http://localhost:3000/users/';

const login = async (username, password) => {
  const response = await axios.post(API_URL + 'login', {});

  return response.data;
};

const authService = { login };

export default authService;
