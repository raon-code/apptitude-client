import apiClient from '@/server/config/api';

/**
 * GET
 *
 * @param {*} endpoint
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
 * POST
 *
 * @param {*} endpoint
 * @param {*} data
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
 * PUT
 *
 * @param {*} endpoint
 * @param {*} data
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
 * DELETE
 *
 * @param {*} endpoint
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
