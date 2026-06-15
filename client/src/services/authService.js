// ============================================
// authService.js - Authentication API Calls
// ============================================
// Reference: Axios POST/GET requests - reference-javascript.md
// ============================================

import API from './api.js';

const register = async (name, email, password) => {
  const response = await API.post('/api/auth/register', { name, email, password });
  return response.data.data;
};

const emailLogin = async (email, password) => {
  const response = await API.post('/api/auth/login', { email, password });
  return response.data.data;
};

const getMe = async () => {
  const response = await API.get('/api/auth/me');
  return response.data.data;
};

const logout = async () => {
  const response = await API.post('/api/auth/logout');
  return response.data;
};

export { register, emailLogin, getMe, logout };
