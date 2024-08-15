/**
 * index.js
 *  실행 환경변수 관리
 */
import { SERVER_DEFAULT } from './const';

const config = {
  // 실행 환경
  nodeEnv: process.env.NODE_ENV || SERVER_DEFAULT.NODE_ENV,
  // 서버 URL
  serverUrl:
    process.env.SERVER_URL && process.env.SERVER_PORT
      ? `${process.env.SERVER_URL}:${process.env.SERVER_PORT}`
      : `${SERVER_DEFAULT.URL}:${SERVER_DEFAULT.PORT}`
};

export default config;
