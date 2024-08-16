import CommonTemplate from '@/server/enum/common-template';
import {
  convertToEnumMap,
  convertToEnumCodeList
} from '@/server/common/convertor';

/**
 * message-type.js
 *  메시지 타입 도메인
 */
const MESSAGE_TYPE = {
  UNKNOWN: new CommonTemplate('MT0', '?')
};

const MESSAGE_TYPE_MAP = convertToEnumMap(MESSAGE_TYPE);
const MESSAGE_TYPE_CODE = convertToEnumCodeList(MESSAGE_TYPE);

export { MESSAGE_TYPE, MESSAGE_TYPE_MAP, MESSAGE_TYPE_CODE };
