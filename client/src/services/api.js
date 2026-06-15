import axios from 'axios';

// fallback ensures deployment never breaks
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // IMPORTANT for auth cookies (safe to keep)
});

// Attach JWT token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;