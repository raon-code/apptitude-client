import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Contract from '@/components/Contract';
import Modal from '@/components/Modal';
import Nav from '@/components/Nav';
import Title from '@/components/Title';
import VS from '@/components/VS';
import { Content, Screen, Spacer } from '@/components/ui/Screen';
import { colors, radius, space } from '@/styles/tokens';

const WAIT_MINUTES = 30;
const WARNING_THRESHOLD = 16;

const ContentWrap = styled.div`
  filter: ${({ $blurred }) => ($blurred ? 'blur(4px)' : 'none')};
  transition: filter 160ms ease;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TimerRow = styled.div`
  margin: ${space(6)} ${space(6)} 0;
`;

const TimerLabels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: ${colors.textMuted};
  font-size: 16px;
  font-weight: 500;
`;

const Remaining = styled.span`
  color: ${({ $warning }) => ($warning ? colors.accentSoft : colors.accent)};
  font-weight: 600;
`;

const Total = styled.span`
  color: ${colors.textSubtle};
  font-size: 14px;
  margin-left: 2px;
`;

const Track = styled.div`
  height: 8px;
  margin-top: ${space(2)};
  border-radius: ${radius.md};
  background: ${colors.surface};
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  border-radius: ${radius.md};
  width: ${({ $percent }) => `${$percent}%`};
  background: ${({ $warning }) =>
    $warning ? colors.accentSoft : colors.accent};
  transition: width 300ms ease;
`;

const Actions = styled.div`
  display: flex;
  gap: ${space(3)};
  margin-top: ${space(6)};
  margin-bottom: ${space(4)};

  button {
    flex: 1;
    min-height: 56px;
    border-radius: ${radius.pill};
    font-size: 18px;
    font-weight: 700;
  }
`;

const CancelButton = styled.button`
  background: ${colors.surface};
  color: ${colors.text};
`;

const InviteButton = styled.button`
  background: ${colors.accent};
  color: ${colors.onAccent};
`;

export default function WaitBattle() {
  const [minutesLeft, setMinutesLeft] = useState(WAIT_MINUTES);
  const [isCancelOpen, setIsCancelOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesLeft((current) => (current > 0 ? current - 1 : 0));
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const isWarning = minutesLeft < WARNING_THRESHOLD;
  const percent = Math.floor((minutesLeft / WAIT_MINUTES) * 100);

  return (
    <Screen $nav>
      <ContentWrap $blurred={isCancelOpen}>
        <Content>
          <Title title='친구 기다리는 중' />
          <VS />
          <TimerRow>
            <TimerLabels>
              <span>대결방 유효 시간</span>
              <span>
                <Remaining $warning={isWarning}>{minutesLeft}분 남음</Remaining>
                <Total>/{WAIT_MINUTES}분</Total>
              </span>
            </TimerLabels>
            <Track>
              <Fill $percent={percent} $warning={isWarning} />
            </Track>
          </TimerRow>
          <Contract type='waitBattle' />
          <Spacer />
          <Actions>
            <CancelButton type='button' onClick={() => setIsCancelOpen(true)}>
              대결취소
            </CancelButton>
            <InviteButton type='button'>카톡으로 초대하기</InviteButton>
          </Actions>
        </Content>
      </ContentWrap>
      <Nav />
      <Modal
        openModal={isCancelOpen}
        closeModal={() => setIsCancelOpen(false)}
      />
    </Screen>
  );
}
