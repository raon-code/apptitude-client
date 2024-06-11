/**
 * response의 json형태(참고용)
 * example) {status: 200, message: "OK", data: {key1: value1, key2: value2}}
 *
 * @param {number} statusCode http status code
 * @param {string} message message (생략가능, 생략할 경우 포함되지 않음)
 * @param {object} data data json object (생략가능, 생략할 경우 {}로 표시)
 */
const responseExample = {
  statusCode: '상태코드',
  message: '메시지',
  data: '데이터(없는경우{})' || {}
};
