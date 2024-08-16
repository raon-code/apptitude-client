/**
 * index.js
 *  실행 환경변수 관리
 *
 *  실행환경에 영향을 받지 않는 공통적으로 사용되는 환경설정 값 관리
 */
import { SERVER_DEFAULT, API_BASE_PATH } from './const';

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

  // _baseUrl
  //   {scheme}://{host}:{port}{API_BASE_PATH}
  //   (포트번호 따로 설정하지 않은 경우 생략)
  //   ex) http://localhost:3001

  switch (nodeEnv) {
    // 개발환경
    // 운영환경
    case 'production':
      _scheme = 'https';
      _host = 'api.buddybattle.net';
      _port = 3000;
      _baseUrl = `${_scheme}://${_host}${API_BASE_PATH}`;
      break;
    default:
      _scheme = 'http';
      _host = SERVER_DEFAULT.HOST;
      _port = SERVER_DEFAULT.PORT;
      _baseUrl = `${_scheme}://${_host}:${_port}${API_BASE_PATH}`;
      break;
  }

  return {
    scheme: _scheme,
    host: _host,
    port: _port,
    baseUrl: _baseUrl
  };
}

export default config;
