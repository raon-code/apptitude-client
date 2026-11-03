import { useRef, useState } from 'react';
import styled from 'styled-components';
import Nav from '@/components/Nav';
import VS from '@/components/VS';
import Chart from '@/components/Chart';
import BattleMore from '@/components/BattleMore';
import { Screen, Content } from '@/components/ui/Screen';
import { colors, radius, space } from '@/styles/tokens';

const Shell = styled.div`
  filter: ${({ $dim }) => ($dim ? 'blur(3px)' : 'none')};
  transition: filter 160ms ease;
`;

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${space(2)};
  padding: ${space(2)} 0;
`;

const Title = styled.h1`
  color: ${colors.text};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const Countdown = styled.span`
  color: ${colors.accent};
  font-size: 20px;
  font-weight: 500;
`;

const MoreButton = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const Body = styled(Content)`
  align-items: center;
`;

const PokeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  margin-top: ${space(4)};
  padding-left: ${space(6)};
  padding-right: ${space(2)};
  background: ${colors.surface};
  border-radius: ${radius.pill};
`;

const PokeText = styled.span`
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
`;

const PokeButton = styled.button`
  padding: ${space(2)} ${space(2.5)};
  border-radius: ${radius.pill};
  background: ${colors.accent};
  color: ${colors.onAccent};
  font-size: 16px;
  font-weight: 500;
`;

const StatusCard = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 392px;
  margin-top: ${space(4)};
  padding-top: ${space(8)};
  background: ${colors.surface};
  border-radius: ${radius.lg};
`;

const StatusHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space(2)};
  padding: 0 ${space(6)} ${space(4)};
`;

const StatusLabel = styled.span`
  color: ${colors.textMuted};
  font-size: 16px;
  font-weight: 500;
`;

const ScoreRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Score = styled.span`
  color: ${colors.text};
  font-size: 24px;
  font-weight: 500;
`;

const Avatars = styled.div`
  display: flex;
  gap: ${space(2)};
`;

const AvatarChip = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${radius.pill};
  font-size: 12px;
  font-weight: 500;
  background: ${({ $tone }) =>
    $tone === 'me' ? colors.accent : colors.textSubtle};
  color: ${({ $tone }) => ($tone === 'me' ? colors.bg : colors.onAccent)};
`;

const Delta = styled.div`
  display: flex;
  align-items: center;
`;

const DeltaValue = styled.span`
  color: ${colors.danger};
  font-size: 16px;
  font-weight: 500;
`;

const DeltaLabel = styled.span`
  color: ${colors.textMuted};
  font-size: 16px;
  font-weight: 500;
`;

export default function Battle() {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeMore = () => setIsOpen(false);

  return (
    <>
      <Shell $dim={isOpen}>
        <Screen $nav>
          <Header>
            <Title>더이상 이렇게 살지 말자</Title>
            <Countdown>D-4</Countdown>
            <MoreButton
              type='button'
              aria-label='대결 메뉴'
              onClick={() => setIsOpen(true)}
            >
              <svg
                width='4'
                height='21'
                viewBox='0 0 4 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 10.5C4 11.6046 3.10457 12.5 2 12.5C0.895431 12.5 3.49691e-07 11.6046 3.49691e-07 10.5C3.49691e-07 9.39543 0.895431 8.5 2 8.5C3.10457 8.5 4 9.39543 4 10.5Z'
                  fill={colors.text}
                />
                <path
                  d='M4 2.5C4 3.60457 3.10457 4.5 2 4.5C0.895431 4.5 6.99382e-07 3.60457 6.99382e-07 2.5C6.99382e-07 1.39543 0.895431 0.5 2 0.5C3.10457 0.5 4 1.39543 4 2.5Z'
                  fill={colors.text}
                />
                <path
                  d='M4 18.5C4 19.6046 3.10457 20.5 2 20.5C0.89543 20.5 0 19.6046 0 18.5C0 17.3954 0.89543 16.5 2 16.5C3.10457 16.5 4 17.3954 4 18.5Z'
                  fill={colors.text}
                />
              </svg>
            </MoreButton>
          </Header>
          <Body>
            {/* 나 vs 상대방 */}
            <VS />
            {/* 쿡찌르기 */}
            <PokeRow>
              <PokeText>상대방을 쿡 찔러보세요!</PokeText>
              <PokeButton type='button'>쿡 찌르기</PokeButton>
            </PokeRow>
            {/* 현황 */}
            <StatusCard>
              <StatusHead>
                <StatusLabel>누적 디톡스 현황</StatusLabel>
                <ScoreRow>
                  <Score>달성률 80%</Score>
                  <Avatars>
                    <AvatarChip $tone='me'>me</AvatarChip>
                    <AvatarChip $tone='other'>other</AvatarChip>
                  </Avatars>
                </ScoreRow>
                <Delta>
                  <DeltaValue>40%p</DeltaValue>
                  <svg
                    width='12'
                    height='13'
                    viewBox='0 0 12 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2 8.5L4 6.5L6 8.5L9 5.5' stroke={colors.danger} />
                    <path d='M7 5.5H9V7.5' stroke={colors.danger} />
                  </svg>
                  <DeltaLabel>(전날대비)</DeltaLabel>
                </Delta>
              </StatusHead>
              <Chart containerRef={containerRef} />
            </StatusCard>
          </Body>
        </Screen>
      </Shell>
      <Nav />
      <BattleMore isOpen={isOpen} closeMore={closeMore} />
    </>
  );
}
