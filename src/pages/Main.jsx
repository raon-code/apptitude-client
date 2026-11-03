import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '@/components/Button';
import MainModal from '@/components/MainModal';
import Nav from '@/components/Nav';
import Timer from '@/components/Timer';
import { Screen, Content, Spacer } from '@/components/ui/Screen';
import { colors, space } from '@/styles/tokens';

const Surface = styled.div`
  min-height: 100dvh;
  background: ${({ $active }) => ($active ? colors.accent : colors.bg)};
  transition: background 240ms ease;
`;

const Wrap = styled(Screen)`
  padding-top: ${space(6)};
`;

const Badge = styled.span`
  align-self: center;
  padding: ${space(2)} ${space(3)};
  border-radius: 10px;
  background: ${({ $active }) =>
    $active ? colors.accentSoft : colors.surface};
  color: ${({ $active }) => ($active ? colors.onAccent : colors.textMuted)};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;

const Stage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${space(9)};
  gap: ${space(6)};
  flex: 1;
`;

const Message = styled.p`
  position: absolute;
  bottom: ${space(10)};
  left: 0;
  right: 0;
  text-align: center;
  color: ${({ $active }) => ($active ? colors.onAccent : colors.textSoft)};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.45px;
`;

const IconFrame = styled.div`
  width: 100%;
  max-width: 340px;
  height: 164px;
  background: url('/main_icon_frame.svg') center top / contain no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: ${space(2.5)};
  padding-bottom: 12px;
  margin-top: ${space(5)};

  span {
    width: 76px;
    height: 76px;
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  span:nth-child(1) {
    background-image: url('/icon_red.svg');
  }

  span:nth-child(2) {
    background-image: url('/icon_yellow.svg');
  }

  span:nth-child(3) {
    background-image: url('/icon_green.svg');
  }

  ${({ $active }) =>
    $active &&
    css`
      background-image: url('/main_notice.svg');
      height: 60px;
      align-items: center;
      padding-bottom: 0;
    `}
`;

const BattlePeriod = styled.div`
  margin: ${space(6)} auto 0;
  width: 126px;
  height: 63px;
  background: url('/main-top.svg') center / contain no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: ${space(2)};
  color: ${colors.textSubtle};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;

export default function Main() {
  const [isDetoxStarted, setIsDetoxStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      setIsPaused(document.visibilityState === 'hidden');
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const handlePrimaryClick = () => {
    if (isDetoxStarted) {
      setIsDetoxStarted(false);
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsDetoxStarted(true);
    setIsModalOpen(false);
  };

  return (
    <Surface $active={isDetoxStarted}>
      <Wrap $nav={!isDetoxStarted}>
        <Content>
          {isDetoxStarted ? (
            <Badge $active>대결 중</Badge>
          ) : (
            <BattlePeriod>대결 시작 전</BattlePeriod>
          )}
          <Stage>
            <Timer isDetoxStarted={isDetoxStarted && !isPaused} />
            {isDetoxStarted ? (
              <IconFrame $active>
                <span />
              </IconFrame>
            ) : (
              <IconFrame>
                <span />
                <span />
                <span />
              </IconFrame>
            )}
            <Message $active={isDetoxStarted}>
              {isDetoxStarted ? (
                <>
                  시간을 선택하는 것은
                  <br />
                  시간을 절약하는 것이다.
                  <br />
                  -베이컨-
                </>
              ) : (
                <>
                  잘하고있어!
                  <br />
                  조금만 더 힘내서 디톡스해보자!
                </>
              )}
            </Message>
          </Stage>
          <Button
            clickEvent={handlePrimaryClick}
            step={isDetoxStarted ? '디톡스 그만하기' : '디톡스 시작하기!'}
            confirm={!isDetoxStarted}
          />
        </Content>
        <Spacer />
      </Wrap>
      {!isDetoxStarted && <Nav />}
      <MainModal
        open={isModalOpen}
        title='지금부터 디톡스를 시작할까요?'
        description='시작하면 타이머가 누적되고, 앱을 벗어나면 잠시 멈춰요.'
        onConfirm={handleConfirm}
        onClose={() => setIsModalOpen(false)}
      />
    </Surface>
  );
}
