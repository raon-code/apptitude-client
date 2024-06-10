/**
 * apiService.js
 */
const apiClient = require('@/server/config/api');

/**
 *
 * @param {*} endpoint
 * @returns
 */
async function getData(endpoint) {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 *
 * @param {*} endpoint
 * @param {*} data
 * @returns
 */
async function postData(endpoint, data) {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 *
 * @param {*} endpoint
 * @param {*} data
 * @returns
 */
async function putData(endpoint, data) {
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 *
 * @param {*} endpoint
 * @returns
 */
async function deleteData(endpoint) {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  getData,
  postData,
  putData,
  deleteData
};
