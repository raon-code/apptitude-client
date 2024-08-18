/**
 * convertor.js
 *  각종 변환 공통함수
 */

/**
 * Enum(key, element{code,value,other}) -> Enum(key(code), element{code,value,other})
 * (code값을 통해 enum을 찾기 위한 map)
 *
 * @param {*} _enum
 * @returns
 */
export function convertToEnumMap(_enum) {
  const result = {};
  Object.values(_enum).forEach((element) => {
    result[element.code] = element;
  });
  return result;
}
