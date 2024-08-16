/**
 * const.js
 *   재사용 가능한 전역변수 모음
 *
 *   /config/index.js 보다 좀 더 상위 계층의 값으로,
 *   거의 변경되지 않는 값 모음
 */
module.exports = {
  // 서버 디폴트 값
  SERVER_DEFAULT: {
    NODE_ENV: 'local', // 실행환경
    HOST: 'localhost', // 호스트
    PORT: 3001 // 포트
  },
  // 디버그 모드(local)
  DEBUG_MODE: !process.env.NODE_ENV,
  // 시간 설정
  SEC_TO_MS: 1000, // 1초 -> 1000밀리초
  API_BASE_PATH: '' // API 기본 경로
};
