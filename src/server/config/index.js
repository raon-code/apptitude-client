/**
 * index.js
 *  실행 환경변수 관리
 *
 *  실행환경에 영향을 받지 않는 공통적으로 사용되는 환경설정 값 관리
 */
const { SERVER_DEFAULT, API_BASE_PATH } = require('./const');

const _nodeEnv = process.env.NODE_ENV || SERVER_DEFAULT.NODE_ENV;
const serverConfig = getServerConfig(_nodeEnv);

const config = {
  // App 설정
  //   실행환경
  nodeEnv: _nodeEnv,
  // 서버설정
  server: serverConfig
};

function getServerConfig(nodeEnv) {
  let _scheme, _host, _port, _baseUrl;

  switch (nodeEnv) {
    // 개발환경
    case 'dev':
      _scheme = 'https';
      _host = 'api.buddybattle.net';
      break;
    // 운영환경
    case 'prod':
      _scheme = 'https';
      _host = 'api.buddybattle.net';
      break;
    default:
      _scheme = 'http';
      _host = SERVER_DEFAULT.HOST;
      _port = SERVER_DEFAULT.PORT;
      break;
  }

  // {scheme}://{host}:{port}{API_BASE_PATH}
  // (포트번호 따로 설정하지 않은 경우 생략)
  // ex) http://localhost:3001
  _baseUrl =
    `${_scheme}://${_host}` + (_port ? `:${_port}` : '') + API_BASE_PATH;

  return {
    scheme: _scheme,
    host: _host,
    port: _port,
    baseUrl: _baseUrl
  };
}

module.exports = config;
