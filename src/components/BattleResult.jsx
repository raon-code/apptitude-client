import styled from 'styled-components';
import { colors, radius, space } from '@/styles/tokens';
import contract from '@/assets/contract.png';

const Root = styled.div`
  width: 100%;
  margin-top: ${space(6)};
  padding-bottom: ${space(8)};
  background: ${colors.surface};
  border-radius: ${radius.lg};
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 134px;
  padding-top: ${space(6)};
`;

const Emblem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${radius.sm};
  background: ${colors.bg};
`;

const HeadTitle = styled.span`
  margin-top: ${space(3)};
  color: ${colors.text};
  font-size: 20px;
  font-weight: 500;
`;

const Divider = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, ${colors.bg} 33%, transparent 0%);
  background-position: bottom;
  background-size: 10px 2px;
  background-repeat: repeat-x;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    width: 9px;
    height: 9px;
    border-radius: ${radius.pill};
    background: ${colors.bg};
  }

  &::before {
    left: -4px;
  }

  &::after {
    right: -4px;
  }
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space(8)};
  margin-top: ${space(7)};
  padding: 0 ${space(6)};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${space(4)};
  font-size: 16px;
  font-weight: 500;
`;

const Label = styled.span`
  color: ${colors.textMuted};
`;

const Value = styled.span`
  color: ${colors.text};
  text-align: right;
`;

const titles = {
  victory: '나의 승리!',
  tie: '무승부!',
  defeat: '친구의 승리!'
};

export default function BattleResult({ type }) {
  return (
    <Root>
      <Head>
        <Emblem>
          <img src={contract} width='32' height='32' alt='' />
        </Emblem>
        <HeadTitle>{titles[type] ?? ''}</HeadTitle>
      </Head>
      <Divider aria-hidden='true' />
      <Rows>
        <Row>
          <Label>승리자</Label>
          <Value>더이상 이렇게 살지 말자</Value>
        </Row>
        <Row>
          <Label>대결 기간</Label>
          <Value>2024.12.30 ~ 2025.1.4</Value>
        </Row>
        <Row>
          <Label>대결 보상</Label>
          <Value>떡볶이 쏘기</Value>
        </Row>
      </Rows>
    </Root>
  );
}
