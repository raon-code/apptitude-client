/**
 * const.js
 *  재사용 가능한 전역변수 모음
 */
module.exports = {
  // 서버 디폴트 값
  SERVER_DEFAULT: {
    URL: 'http://localhost',
    PORT: 3001,
    NODE_ENV: 'local'
  },
  // 디버그 모드 여부
  DEBUG_MODE: !process.env.NODE_ENV,
  // 시간
  SEC_TO_MS: 1000,
  API_BASE_PATH: '/api'
};
