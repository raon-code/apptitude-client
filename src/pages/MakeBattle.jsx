import styled from 'styled-components';
import { useState } from 'react';
import Back from '../components/Back';
import Button from '../components/Button';

const titles = ['대결 이름', '대결 목표', '대결 보상', '대결 확인'];
const stepInfo = [
  '1:1 대결방의 이름과 기간을 설정해주세요!',
  '디톡스 시간을 설정해 주세요!',
  '대결 보상을 설정해주세요!'
];

const FieldWrap = styled.div`
  width: 100vw;
  height: calc(100vh - 45px);
`;
const StepInfo = styled.h2`
  font-size: 20px;
  color: #333;
  display: flex;
  justify-content: center;
`;

export default function Battle() {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(titles[index]);
  const [step, setStep] = useState('다음');
  const [confirm, setConfirm] = useState(true);

  function onClick() {
    if (titles.length === index + 1) {
      console.log('끝');
      return;
    }
    setIndex((prevIndex) => prevIndex + 1);
    setTitle(titles[index + 1]);
    if (index === 2) {
      setStep('확인했습니다!');
    }
  }

  function backClick() {
    console.log(index);
    if (index === 0) {
      window.history.back();
    }
    setIndex((prevIndex) => prevIndex - 1);
    setTitle(titles[index - 1]);
    if (index !== 2) {
      setStep('다음!');
    }
  }

  return (
    <div>
      <Back
        title={title}
        backClick={backClick}
        style={{ backgroundColor: '#000' }}
      />
      <FieldWrap>
        <StepInfo>{stepInfo[index]}</StepInfo>
      </FieldWrap>
      <Button clickEvent={onClick} step={step} confirm={confirm} />
    </div>
  );
}
