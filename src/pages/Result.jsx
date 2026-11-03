import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Back from '@/components/Back';
import BattleResult from '@/components/BattleResult';
import Nav from '@/components/Nav';
import Push from '@/components/Push';
import VS from '@/components/VS';
import { Content, Screen } from '@/components/ui/Screen';
import { colors, radius, space } from '@/styles/tokens';

const PUSH_TEXT = {
  victory: '친구에게 대결보상을 요청했어요!',
  defeat: '친구에게 보상완료를 요청했어요!',
  tie: '대결 결과를 확인했어요!'
};

const HINT = {
  victory: '친구에게 대결 보상을 요청하세요!',
  defeat: '친구에게 보상 완료를 요청하세요!'
};

const Hint = styled.p`
  margin-top: ${space(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textMuted};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

const Actions = styled.div`
  display: flex;
  gap: ${space(2)};
  margin-top: ${space(6)};
`;

const Action = styled.button`
  flex: 1;
  min-height: 56px;
  padding: ${space(4)} ${space(3)};
  border-radius: ${radius.pill};
  background: ${colors.accent};
  color: ${colors.onAccent};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.45px;
  transition: transform 120ms ease;

  &:active {
    transform: scale(0.98);
  }
`;

export default function Result() {
  const { state } = useLocation();
  const type = state?.type ?? 'victory';
  const [isPush, setIsPush] = useState(false);
  const hint = HINT[type];
  const closePush = useCallback(() => setIsPush(false), []);

  return (
    <Screen $nav>
      <Content>
        <Back title='대결결과' />
        <VS gameEnd />
        <BattleResult type={type} />
        {hint ? (
          <>
            <Hint>{hint}</Hint>
            <Actions>
              <Action
                type='button'
                onClick={() => setIsPush(true)}
                aria-label='상대방에게 보상 요청 알림 보내기'
              >
                상대방 콕 찌르기
              </Action>
            </Actions>
          </>
        ) : null}
      </Content>
      <Push isPush={isPush} setPushOut={closePush} text={PUSH_TEXT[type]} />
      <Nav />
    </Screen>
  );
}
