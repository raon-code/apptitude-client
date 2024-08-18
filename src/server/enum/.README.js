/**
 * .README.js
 * enum 사용법 정리
 */
import CommonTemplate from '@/server/enum/common-template';
import { convertToEnumMap } from '@/server/common/convertor';

/**
 * new CommonTemplate('<코드>', '<실제값>', <추가정보(선택)>)
 */
const README = {
  TEST01: new CommonTemplate('_RE0', '테스트01'),
  TEST02: new CommonTemplate('_RE1', '테스트02'),
  TEST03: new CommonTemplate('_RE2', '테스트03'),
  TEST04: new CommonTemplate('_RE3', '테스트04'),
  TEST05: new CommonTemplate('_RE4', '테스트05(추가정보)', { info: '추가정보' })
};

// { TEST01: { code: '_RE0', value: '테스트01', ... }, ... }
// --> { _RE0: { code: '_RE0', value: '테스트01', ... }, ... }
const README_MAP = convertToEnumMap(AGE_RANGE);

// 사용법(1): enum 값에서 정보 가져오기
README.TEST01.code; // '_RE0'
README.TEST01.value; // '테스트01'
README.TEST04.other; // { info: '추가정보' }

// 사용법(2): code 값으로 enum 값 가져오기
README_MAP._RE0.code; // '_RE0'
README_MAP._RE0.value; // '테스트01'
README_MAP._RE4.other; // { info: '추가정보' }

// README_CODE의 경우 validator에서 사용
export { README, README_MAP };
