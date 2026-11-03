import axios from 'axios';
import config from '@/server/config';

const apiClient = axios.create({
  baseURL: config.server.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // TODO: 인증 만료 처리(로그인 페이지로 리다이렉트)
    }
    return Promise.reject(error);
  }
);

export default apiClient;
