import styled from 'styled-components';
import { useState } from 'react';
import Back from '../components/Back';
import Button from '../components/Button';

const titles = ['대결 이름', '대결 목표', '대결 보상', '대결 확인'];
const stepInfo = [
  <span>
    1:1 대결방의 이름과 기간을
    <br />
    설정해주세요!
  </span>,
  <span>
    디톡스 시간을
    <br />
    설정해 주세요!
  </span>,
  <span>
    대결 보상을
    <br />
    설정해주세요!
  </span>
];
const placeholders = [
  '이름은 최대 20자입니다.',
  '언제부터 언제까지 대결하나요?',
  '이름은 최대 20자입니다.'
];
const stepTitles = ['대결 이름', '대결 기간', '대결 보상', '대결 확인'];

const FieldWrap = styled.div`
  width: 100vw;
  height: calc(100vh - 45px);
  background-color: #050409;
  padding: 64px 16px 0;
  border: none;
`;
const StepInfo = styled.h2`
  display: flex;
  justify-content: center;
  padding: 0 43.5px;
  text-align: center;
  color: var(--font_white, #fefefe);
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 34px; /* 154.545% */
  letter-spacing: -0.55px;
  margin-bottom: 31px;
`;
const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
`;
const StepInput = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  background-color: var(--inputBox_color, #28272b);
`;
const InputTitle = styled.h4`
  color: #bebdc4;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;
const RandomButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: inline-flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: var(--font_white, #fefefe);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.35px;
  }

  span {
    background-image: url('../../../refresh.svg');
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    display: inline-block;
  }
`;

export default function Battle() {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(titles[index]);
  const [step, setStep] = useState('다음');
  const [confirm, setConfirm] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [statusImage, setStatusImage] = useState('../../../status_1:3.svg');
  const [placeholder, setPlaceholder] = useState(placeholders[index]);

  function onClick() {
    if (titles.length === index + 1) {
      console.log('끝');
      return;
    }
    setIndex((prevIndex) => prevIndex + 1);
    setTitle(titles[index + 1]);
    setPlaceholder(placeholders[index + 1]);
    if (index === 2) {
      setStep('확인했습니다!');
    }
    setStatusImage(`../../../status_${index + 2}:3.svg`);
  }

  function backClick() {
    console.log(index);
    if (index === 0) {
      window.history.back();
    }
    setIndex((prevIndex) => prevIndex - 1);
    setTitle(titles[index - 1]);
    setPlaceholder(placeholders[index - 1]);
    if (index !== 2) {
      setStep('다음!');
    }
    setStatusImage(`../../../status_${index}:3.svg`);
  }

  return (
    <div>
      <Back
        title={title}
        backClick={backClick}
        statusImage={statusImage}
        style={{ backgroundColor: '#000' }}
      />
      <FieldWrap>
        <StepInfo>{stepInfo[index]}</StepInfo>
        <InputField>
          <InputTitle className='inputTitle'>{stepTitles[index]}</InputTitle>
          <StepInput
            type='text'
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </InputField>
        <RandomButton>
          <button>
            랜덤으로 뽑기<span></span>
          </button>
        </RandomButton>
      </FieldWrap>
      <Button clickEvent={onClick} step={step} confirm={confirm} />
    </div>
  );
}
