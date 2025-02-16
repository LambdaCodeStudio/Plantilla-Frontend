import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
    (    response: any) => response,
    (    error: { response: { status: number; }; }) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

export default api;