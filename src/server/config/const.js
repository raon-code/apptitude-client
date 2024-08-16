/**
 * const.js
 *   재사용 가능한 전역변수 모음
 *
 *   /config/index.js 보다 좀 더 상위 계층의 값으로,
 *   거의 변경되지 않는 값 모음
 */
export const SERVER_DEFAULT = {
  NODE_ENV: 'local', // 실행환경
  HOST: 'localhost', // 호스트
  PORT: 3001 // 포트
};

export const DEBUG_MODE = !process.env.NODE_ENV;

export const SEC_TO_MS = 1000; // 1초 -> 1000밀리초

export const API_BASE_PATH = ''; // API 기본 경로
