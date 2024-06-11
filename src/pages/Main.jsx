import styled from 'styled-components';
import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import Timer from '../components/Timer';

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor || '#050409'};
  padding: 0 16px 0;
  border: none;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  height: calc(100% - 57px);
  position: relative;
`;

const BattlePeriod = styled.div`
  background-image: url('../../../main-top.svg');
  background-repeat: no-repeat;
  background-position: center;
  width: 126px;
  height: 63px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: var(--font_sub, #6e7487);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
  padding-top: 34px;
  margin-bottom: 62px;
`;

const MainIcon = styled.div`
  width: 95.55vw;
  height: 164px;
  background-image: url('../../../main_icon_frame.svg');
  background-repeat: no-repeat;
  background-position: center 0;
  margin-top: 19px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 10px;
  position: relative;
  padding-bottom: 12.5px;
  span {
    background-repeat: no-repeat;
    background-position: center bottom 0;
    display: inline-block;
    width: 76px;
    height: 76px;
  }
  span:nth-child(1) {
    background-image: url('../../../icon_red.svg');
  }
  span:nth-child(2) {
    background-image: url('../../../icon_yellow.svg');
  }
  span:nth-child(3) {
    background-image: url('../../../icon_green.svg');
  }
`;

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDetoxStarted, setIsDetoxStarted] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#050409');

  const handleButtonClick = () => {
    setIsDetoxStarted((prev) => !prev);
    setBackgroundColor(isDetoxStarted ? '#050409' : '#008000');
  };

  return (
    <div>
      <MainWrap style={{ backgroundColor: backgroundColor }}>
        <Container>
          <BattlePeriod>대결 시작 전</BattlePeriod>
          <Button
            clickEvent={handleButtonClick}
            step={isDetoxStarted ? '디톡스 그만하기' : '디톡스 시작하기!'}
            confirm={isDetoxStarted}
          />
          <Timer isDetoxStarted={isDetoxStarted} />
          <MainIcon>
            <span></span>
            <span></span>
            <span></span>
          </MainIcon>
        </Container>
      </MainWrap>
      <Nav />
      {modalOpen && <Modal />}
    </div>
  );
};

export default Main;
