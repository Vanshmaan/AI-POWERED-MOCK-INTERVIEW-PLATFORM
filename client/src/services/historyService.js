import API from './api.js';

const getHistory = async (page = 1, limit = 10) => {
  const response = await API.get(`/api/history?page=${page}&limit=${limit}`);
  return response.data.data;
};

const deleteHistoryItem = async (id) => {
  const response = await API.delete(`/api/history/${id}`);
  return response.data;
};

const clearHistory = async () => {
  const response = await API.delete('/api/history/clear');
  return response.data;
};

export { getHistory, deleteHistoryItem, clearHistory };