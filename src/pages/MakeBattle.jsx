import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '@/components/Back';
import Button from '@/components/Button';
import BattleCalendar from '@/components/Calendar';
import TimePicker from '@/components/TimePicker';
import { Content, Screen, Spacer } from '@/components/ui/Screen';
import { colors, radius, space, typography } from '@/styles/tokens';

const titles = ['대결 이름', '대결 기간', '대결 보상', '대결 확인'];
const stepInfo = [
  <>
    1:1 대결방의 이름과 기간을
    <br />
    설정해주세요!
  </>,
  <>
    디톡스 시간을
    <br />
    설정해 주세요!
  </>,
  <>
    대결 보상을
    <br />
    설정해주세요!
  </>,
  <>
    설정한 대결 내용을
    <br />
    확인해주세요!
  </>
];
const placeholders = [
  '이름은 최대 20자입니다.',
  '언제부터 언제까지 대결하나요?',
  '이름은 최대 20자입니다.',
  ''
];
const randomBattleName = [
  '더이상 이렇게 살 수는 없다',
  '스마트폰 중독자 탈출 챌린지',
  '디낳괴'
];
const randomBenefit = ['떡볶이 쏘기', '치킨 쏘기', '송금 100만원'];

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space(3)};
  margin-top: ${space(4)};
`;

const StepInfo = styled.h2`
  align-self: center;
  max-width: 300px;
  padding-top: ${space(10)};
  text-align: center;
  color: ${colors.text};
  font-size: 22px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.55px;
`;

const InputTitle = styled.h4`
  color: ${colors.textMuted};
  font-size: ${typography.body.size};
  font-weight: ${typography.body.weight};
  letter-spacing: ${typography.body.letterSpacing};
`;

const StepInput = styled.input`
  width: 100%;
  padding: ${space(4)};
  border: 1px solid transparent;
  border-radius: ${radius.sm};
  background-color: ${colors.surface};
  color: ${colors.text};
  font-size: ${typography.body.size};
  outline: none;

  &::placeholder {
    color: ${colors.textSubtle};
  }

  &:focus {
    border-color: ${colors.accent};
  }
`;

const RandomButton = styled.button`
  align-self: center;
  display: inline-flex;
  align-items: center;
  gap: ${space(1)};
  padding: ${space(2)} ${space(5)};
  color: ${colors.text};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.35px;
  border-radius: ${radius.pill};
  background-color: ${colors.surface};
`;

const RefreshIcon = styled.span`
  width: 16px;
  height: 16px;
  background: url('/refresh.svg') center / contain no-repeat;
`;

const BattleTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space(3)};
  margin-top: ${space(4)};
  color: ${colors.textMuted};
  font-size: ${typography.body.size};
`;

const TimeSummary = styled.p`
  display: flex;
  align-items: center;
  gap: ${space(2)};
  margin-top: ${space(6)};
  padding: ${space(4)};
  border-radius: ${radius.sm};
  border: 1px solid ${colors.text};
  color: ${colors.text};
  font-size: ${typography.subtitle.size};
  line-height: 28px;
`;

const HourglassIcon = styled.span`
  width: 24px;
  height: 24px;
  background: url('/Hhourglass_move_light_fill.svg') center / contain no-repeat;
`;

const Summary = styled.dl`
  display: flex;
  flex-direction: column;
  gap: ${space(4)};
  margin-top: ${space(8)};
  padding: ${space(5)};
  border-radius: ${radius.md};
  background: ${colors.surface};

  div {
    display: flex;
    justify-content: space-between;
    gap: ${space(4)};
  }

  dt {
    color: ${colors.textSubtle};
    font-size: ${typography.body.size};
  }

  dd {
    margin: 0;
    color: ${colors.text};
    font-size: ${typography.body.size};
    font-weight: 600;
    text-align: right;
  }
`;

function getRandomItemFromArray(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function formatPeriod(period) {
  if (!period?.[0] || !period?.[1]) return '미설정';
  const format = (date) => moment(date).format('YYYY.MM.DD');
  return `${format(period[0])} ~ ${format(period[1])}`;
}

export default function MakeBattle() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState('');
  const [benefit, setBenefit] = useState('');
  const [period, setPeriod] = useState(null);
  const [selectedTime, setSelectedTime] = useState({ hour: 0, minute: 0 });

  const isLastStep = index === titles.length - 1;
  const hasTitle = title.trim().length > 0;
  const hasBenefit = benefit.trim().length > 0;
  const hasPeriod = Boolean(period?.[0] && period?.[1]);
  const hasTime = selectedTime.hour > 0 || selectedTime.minute > 0;
  const canContinue =
    index === 0
      ? hasTitle
      : index === 1
        ? hasPeriod && hasTime
        : index === 2
          ? hasBenefit
          : true;

  const goNext = () => {
    if (!canContinue) return;
    if (isLastStep) {
      navigate('/wait-battle');
      return;
    }
    setIndex((current) => current + 1);
  };

  const goBack = () => {
    if (index === 0) {
      navigate(-1);
      return;
    }
    setIndex((current) => current - 1);
  };

  const fillRandom = () => {
    if (index === 2) {
      setBenefit(getRandomItemFromArray(randomBenefit));
      return;
    }
    setTitle(getRandomItemFromArray(randomBattleName));
  };

  return (
    <Screen>
      <Back title={titles[index]} backClick={goBack} />
      <Content>
        <StepInfo>{stepInfo[index]}</StepInfo>
        <Field>
          {index === 1 ? (
            <>
              <InputTitle>대결 기간</InputTitle>
              <BattleCalendar onChange={setPeriod} value={period} />
              <BattleTime>
                <InputTitle>하루 디톡스 시간</InputTitle>
                <TimePicker
                  setHours={(hour) =>
                    setSelectedTime((prev) => ({ ...prev, hour }))
                  }
                  setMinutes={(minute) =>
                    setSelectedTime((prev) => ({ ...prev, minute }))
                  }
                />
                <TimeSummary>
                  <HourglassIcon />
                  {`총 디톡스 시간은 ${selectedTime.hour}시간 ${selectedTime.minute}분 입니다.`}
                </TimeSummary>
              </BattleTime>
            </>
          ) : index === 3 ? (
            <Summary>
              <div>
                <dt>대결 이름</dt>
                <dd>{title.trim() || '미설정'}</dd>
              </div>
              <div>
                <dt>대결 기간</dt>
                <dd>{formatPeriod(period)}</dd>
              </div>
              <div>
                <dt>하루 디톡스</dt>
                <dd>
                  {selectedTime.hour}시간 {selectedTime.minute}분
                </dd>
              </div>
              <div>
                <dt>대결 보상</dt>
                <dd>{benefit.trim() || '미설정'}</dd>
              </div>
            </Summary>
          ) : (
            <StepInput
              type='text'
              placeholder={placeholders[index]}
              value={index === 2 ? benefit : title}
              maxLength={20}
              onChange={(event) =>
                index === 2
                  ? setBenefit(event.target.value)
                  : setTitle(event.target.value)
              }
            />
          )}
        </Field>
        {index === 0 || index === 2 ? (
          <RandomButton type='button' onClick={fillRandom}>
            랜덤으로 뽑기
            <RefreshIcon />
          </RandomButton>
        ) : null}
        <Spacer />
        <Button
          clickEvent={goNext}
          step={isLastStep ? '대결방 만들기' : '다음'}
          confirm={canContinue}
          disabled={!canContinue}
        />
      </Content>
    </Screen>
  );
}
