/**
 * 공통코드 리스트
 */
import {
  AGE_RANGE,
  AGE_RANGE_MAP,
  AGE_RANGE_CODE
} from '@/server/enum/age-range';
import { GENDER, GENDER_MAP, GENDER_CODE } from '@/server/enum/gender';
import { JOB_TYPE, JOB_TYPE_MAP, JOB_TYPE_CODE } from '@/server/enum/job-type';
import {
  MESSAGE_TYPE,
  MESSAGE_TYPE_MAP,
  MESSAGE_TYPE_CODE
} from '@/server/enum/message-type';
import { OS_TYPE, OS_TYPE_MAP, OS_TYPE_CODE } from '@/server/enum/os-type';
import {
  PLATFORM_TYPE,
  PLATFORM_TYPE_MAP,
  PLATFORM_TYPE_CODE
} from '@/server/enum/platform-type';
import { QUOTE, QUOTE_MAP, QUOTE_CODE } from '@/server/enum/quote';
import {
  RESULT_TYPE,
  RESULT_TYPE_MAP,
  RESULT_TYPE_CODE
} from '@/server/enum/result-type';
import {
  STATUS_TYPE,
  STATUS_TYPE_MAP,
  STATUS_TYPE_CODE
} from '@/server/enum/status-type';

const ENUM_LIST = [
  GENDER, // 성별
  AGE_RANGE, // 연령대
  JOB_TYPE, // 직업종류
  PLATFORM_TYPE, // 플랫폼 타입
  OS_TYPE, // 운영체제 타입
  MESSAGE_TYPE, // 메시지 타입
  RESULT_TYPE, // 대결결과 타입
  STATUS_TYPE, //대결상태 타입
  QUOTE // 명언
];

const ENUM_MAP_LIST = [
  GENDER_MAP, // 성별
  AGE_RANGE_MAP, // 연령대
  JOB_TYPE_MAP, // 직업종류
  PLATFORM_TYPE_MAP, // 플랫폼 타입
  OS_TYPE_MAP, // 운영체제 타입
  MESSAGE_TYPE_MAP, // 메시지 타입
  RESULT_TYPE_MAP, // 대결결과 타입
  STATUS_TYPE_MAP, //대결상태 타입
  QUOTE_MAP // 명언
];

const ENUM_CODE_LIST = [
  GENDER_CODE, // 성별
  AGE_RANGE_CODE, // 연령대
  JOB_TYPE_CODE, // 직업종류
  PLATFORM_TYPE_CODE, // 플랫폼 타입
  OS_TYPE_CODE, // 운영체제 타입
  MESSAGE_TYPE_CODE, // 메시지 타입
  RESULT_TYPE_CODE, // 대결결과 타입
  STATUS_TYPE_CODE, //대결상태 타입
  QUOTE_CODE // 명언
];

// 객체의 값을 변경하지 못하도록 설정
ENUM_LIST.forEach((_enum) => {
  Object.freeze(_enum);
});

// 객체의 값을 변경하지 못하도록 설정
ENUM_MAP_LIST.forEach((enumMap) => {
  Object.freeze(enumMap);
});

// 객체의 값을 변경하지 못하도록 설정
ENUM_CODE_LIST.forEach((enumCode) => {
  Object.freeze(enumCode);
});

export { ENUM_LIST, ENUM_MAP_LIST, ENUM_CODE_LIST };
