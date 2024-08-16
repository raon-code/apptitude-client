import axios from 'axios';
import config from '@/server/config';
import constConfig from '@/server/config/const';

const apiClient = axios.create({
  baseURL: config.server.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(
  (config) => {
    // 요청 전 처리
    if (constConfig.DEBUG_MODE) {
      console.debug(config);
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    console.error(error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // 응답 후 공통 처리
    if (constConfig.DEBUG_MODE) {
      console.debug(response);
    }
    return response;
  },
  (error) => {
    // 응답 에러 처리
    if (error.response && error.response.status === 401) {
      // 인증 에러
      console.error(error);
      // TODO: 로그인 페이지로 리다이렉트
    }
    return Promise.reject(error);
  }
);

export default apiClient;
