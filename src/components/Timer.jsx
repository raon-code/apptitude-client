import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fefefe;
`;

const Title = styled.p`
  color: var(--font_sub2, #bebdc4);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const TimeDisplay = styled.h1`
  color: var(--font_white, #fefefe);
  text-align: center;
  font-family: Pretendard;
  font-size: 68px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.272px;
`;

const Timer = ({ isDetoxStarted }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isDetoxStarted && !isActive) {
      setIsActive(true);
    } else if (!isDetoxStarted && isActive) {
      setIsActive(false);
    }

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, isDetoxStarted]);

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      '0'
    );
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <TimerContainer>
      <Title>누적 해독 현황</Title>
      <TimeDisplay>{formatTime(seconds)}</TimeDisplay>
    </TimerContainer>
  );
};

export default Timer;
