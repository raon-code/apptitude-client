import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, space } from '@/styles/tokens';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  gap: ${space(1)};
`;

const Label = styled.p`
  color: ${colors.textMuted};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;

const Time = styled.p`
  color: ${colors.text};
  font-size: 68px;
  font-weight: 600;
  letter-spacing: -0.272px;
  font-variant-numeric: tabular-nums;
`;

export function formatTime(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    '0'
  );
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

export default function Timer({ isDetoxStarted }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isDetoxStarted) return undefined;

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isDetoxStarted]);

  return (
    <Container>
      {!isDetoxStarted && <Label>누적 해독 현황</Label>}
      <Time aria-live='off'>{formatTime(seconds)}</Time>
    </Container>
  );
}
