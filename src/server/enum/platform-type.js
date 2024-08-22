import CommonTemplate from '@/server/enum/common-template';
import { convertToEnumMap } from '@/server/common/convertor';

/**
 * platform-type.js
 *  로그인 플랫폼 타입 도메인
 */
const PLATFORM_TYPE = {
  KAKAO: new CommonTemplate('PT0', '카카오')
};

const PLATFORM_TYPE_MAP = convertToEnumMap(PLATFORM_TYPE);

export { PLATFORM_TYPE, PLATFORM_TYPE_MAP };
