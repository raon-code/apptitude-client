# enum 구조 및 사용법 정리

- 구조
  { <enum키> : <CommonTemplate 인스턴스> }

enum 값으로 CommonTemplate 클래스를 사용
common-template.js 참고

- CommonTemplate 요소
  code: 코드값
  value: 실제값
  other: 추가정보(필요한 경우 사용)

- 사용법(1): enum 값에서 정보 가져오기

```javascript
AGE_RANGE.AGE_20.code; // 'AR1'
AGE_RANGE.AGE_20.value; // '20대'
AGE_RANGE.AGE_20.other; // undefined
```

- 사용법(2): code 값에서 enum 값 가져오기

```javascript
AGE_RANGE_MAP.AR1.code; // 'AR1'
AGE_RANGE_MAP.AR1.value; // '20대'
AGE_RANGE_MAP.AR1.other; // undefined
```
