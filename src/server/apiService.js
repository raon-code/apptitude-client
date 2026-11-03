import apiClient from '@/server/config/api';

/**
 * API 호출 실패를 호출부가 분기할 수 있는 형태로 전달한다.
 * status가 없으면 네트워크 단절/타임아웃으로 취급한다.
 */
export class ApiError extends Error {
  constructor(message, status = null, cause) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.cause = cause;
  }

  static from(error) {
    const status = error?.response?.status ?? null;
    const message =
      error?.response?.data?.message ?? error?.message ?? '요청에 실패했습니다.';
    return new ApiError(message, status, error);
  }
}

async function request(method, endpoint, body) {
  try {
    const response = await apiClient.request({
      method,
      url: endpoint,
      data: body
    });
    return response.data;
  } catch (error) {
    throw ApiError.from(error);
  }
}

/**
 * GET 요청(데이터 조회)
 *
 * @param {string} endpoint 요청 URL [ex1]/tests [ex2]/tests?name=hello
 */
export function getData(endpoint) {
  return request('get', endpoint);
}

/**
 * POST 요청(데이터 생성)
 *
 * @param {string} endpoint 요청 URL
 * @param {Object} data 요청 body 데이터
 */
export function postData(endpoint, data) {
  return request('post', endpoint, data);
}

/**
 * PUT 요청(데이터 수정)
 *
 * @param {string} endpoint 요청 URL
 * @param {Object} data 요청 body 데이터
 */
export function putData(endpoint, data) {
  return request('put', endpoint, data);
}

/**
 * DELETE 요청(데이터 삭제)
 *
 * @param {string} endpoint 요청 URL
 */
export function deleteData(endpoint) {
  return request('delete', endpoint);
}
