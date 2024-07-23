import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const signin = (email, password) => {
  return axios.post(`${API_URL}/signin`, { email, password });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

const authService = {
  signin,
  login,
};

export default authService;
