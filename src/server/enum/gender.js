import CommonTemplate from '@/server/enum/common-template';
import { convertToEnumMap } from '@/server/common/convertor';

/**
 * gender.js
 *  성별 도메인
 */
const GENDER = {
  FEMALE: new CommonTemplate('GD0', '여자'),
  MALE: new CommonTemplate('GD1', '남자')
};

const GENDER_MAP = convertToEnumMap(GENDER);

export { GENDER, GENDER_MAP };
