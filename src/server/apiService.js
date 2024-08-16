import apiClient from '@/server/config/api';

/**
 * GET 요청(데이터 조회)
 *
 * @param {string} endpoint 요청 URL [ex1]/tests [ex2]/tests?name=hello
 * @returns
 */
export async function getData(endpoint) {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * POST 요청(데이터 생성)
 *
 * @param {string} endpoint 요청 URL [ex1]/tests [ex2]/tests?name=hello
 * @param {Object} data 요청 body 데이터
 * @returns
 */
export async function postData(endpoint, data) {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * PUT 요청(데이터 수정)
 *
 * @param {string} endpoint 요청 URL [ex1]/tests [ex2]/tests?name=hello
 * @param {Object} data 요청 body 데이터
 * @returns
 */
export async function putData(endpoint, data) {
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * DELETE 요청(데이터 삭제)
 *
 * @param {string} endpoint 요청 URL [ex1]/tests [ex2]/tests?name=hello
 * @returns
 */
export async function deleteData(endpoint) {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
