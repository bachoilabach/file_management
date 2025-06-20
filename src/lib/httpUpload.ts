import axios from 'axios';

const gapiUpload = axios.create({
  baseURL: 'https://www.googleapis.com/upload/drive/v3/files',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

gapiUpload.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      const parsed = JSON.parse(auth);
      const { state } = parsed;
      const { user } = state;
      const { accessToken } = user;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

gapiUpload.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    return Promise.reject(error);
  },
);

export default gapiUpload;
