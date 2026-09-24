import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    username,
    password,
  });

  // ApiResponse wrapper returns { success, message, data: { token, username, role } }
  if (response.data && response.data.data.token) {
    localStorage.setItem('token', response.data.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.data));
  }

  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};