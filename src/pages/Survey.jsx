import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '@/components/Back';
import Button from '@/components/Button';
import OptionGrid from '@/components/survey/OptionGrid';
import { Screen, Content, Spacer } from '@/components/ui/Screen';
import { AGES, CATEGORIES, GENDERS } from '@/features/signup/options';
import { useSignup } from '@/features/signup/SignupContext';
import { colors, space } from '@/styles/tokens';
import styled from 'styled-components';

const steps = [
  {
    key: 'gender',
    title: '성별이 어떻게 되세요?',
    options: GENDERS,
    columns: 2
  },
  {
    key: 'category',
    title: '소속을 알려주세요',
    options: CATEGORIES,
    columns: 2
  },
  { key: 'age', title: '연령대가 어떻게 되세요?', options: AGES, columns: 2 }
];

const Progress = styled.div`
  height: 4px;
  border-radius: 2px;
  background: ${colors.surface};
  margin: ${space(2)} 0 ${space(6)};
  overflow: hidden;

  div {
    height: 100%;
    width: ${({ $percent }) => `${$percent}%`};
    background: ${colors.accent};
    transition: width 200ms ease;
  }
`;

const Question = styled.h1`
  color: ${colors.text};
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.55px;
  text-align: center;
  margin-bottom: ${space(8)};
`;

export default function Survey() {
  const [stepIndex, setStepIndex] = useState(0);
  const { draft, updateDraft } = useSignup();
  const navigate = useNavigate();
  const step = steps[stepIndex];
  const value = draft[step.key];

  const handleNext = () => {
    if (!value) return;

    if (stepIndex === steps.length - 1) {
      navigate('/make-battle');
      return;
    }

    setStepIndex((current) => current + 1);
  };

  const handleBack = () => {
    if (stepIndex === 0) {
      navigate('/login');
      return;
    }
    setStepIndex((current) => current - 1);
  };

  return (
    <Screen>
      <Content>
        <Back title='시작하기' backClick={handleBack} />
        <Progress $percent={((stepIndex + 1) / steps.length) * 100}>
          <div />
        </Progress>
        <Question>{step.title}</Question>
        <OptionGrid
          options={step.options}
          value={value}
          columns={step.columns}
          onChange={(next) => updateDraft({ [step.key]: next })}
        />
        <Spacer />
        <Button
          clickEvent={handleNext}
          step={stepIndex === steps.length - 1 ? '시작하기' : '다음'}
          confirm={Boolean(value)}
        />
      </Content>
    </Screen>
  );
}
