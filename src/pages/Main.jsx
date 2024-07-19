import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BattlePeriod = styled.div`
  background-image: url('../../../main-top.svg');
  background-repeat: no-repeat;
  background-position: center;
  width: 126px;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 8px;
  margin: 0 auto;
  color: var(--font_sub, #6e7487);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
  margin-bottom: 62px;
`;

const BattlePeriodIng = styled.div`
  display: inline-flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--Secondary_color, #a5e9c2);
  color: var(--font_main, #0f0e14);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
  margin: 32px 0 82px;
  width: fit-content;
`;

const Notice = styled.div`
  background-image: url('../../../bg_notice.svg');
  background-repeat: no-repeat;
  background-position: center;
  width: 276px;
  height: 60px;
  padding: 24px 12px 12px;
  text-align: center;
  display: flex;
  gap: 10px;
  span:first-child {
    background-image: url('../../../icon_notice.svg');
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
  }
  span:nth-child(2) {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.5px;
  }
`;
const BottomTxt = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  color: var(--font_white, #fefefe);
  margin-top: 20px;
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
  const [confirm, setConfirm] = useState(true);
  const [isDetoxStarted, setIsDetoxStarted] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#050409');
  const [showBattlePeriod, setShowBattlePeriod] = useState(true);
  const [bottomText, setBottomText] = useState('안녕!');

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setIsDetoxStarted((prev) => {
          if (prev) {
            setIsDetoxStarted(false); // 화면이 가려질 때 타이머 일시정지
            return prev;
          }
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleButtonClick = () => {
    setIsDetoxStarted((prev) => !prev);
    setBackgroundColor(isDetoxStarted ? '#050409' : '#04C357');
    setConfirm(!confirm);
    setShowBattlePeriod(!isDetoxStarted); // isDetoxStarted 값에 따라 토글

    if (!isDetoxStarted) {
      setBottomText('명언');
    } else if (isDetoxStarted) {
      setBottomText('힘내!');
    }
  };

  // useEffect(() => {
  //   if (!isDetoxStarted) {
  //     setBottomText('안녕!');
  //   }
  // }, [isDetoxStarted]);

  return (
    <div>
      <MainWrap backgroundColor={backgroundColor}>
        <Container>
          {isDetoxStarted ? (
            <BattlePeriodIng show={!isDetoxStarted}>대결 중</BattlePeriodIng>
          ) : (
            <BattlePeriod>대결 시작 전</BattlePeriod>
          )}
          <Timer isDetoxStarted={isDetoxStarted} />
          {isDetoxStarted ? (
            <Notice>
              <span></span>
              <span>화면 이탈 시 카운트가 중단돼요!</span>
            </Notice>
          ) : (
            <MainIcon>
              <span></span>
              <span></span>
              <span></span>
            </MainIcon>
          )}
          <BottomTxt>{bottomText}</BottomTxt>
          <Button
            clickEvent={handleButtonClick}
            step={isDetoxStarted ? '디톡스 그만하기' : '디톡스 시작하기!'}
            isDetoxStarted={isDetoxStarted}
            confirm={confirm}
          />
        </Container>
      </MainWrap>
      {!isDetoxStarted && <Nav />}
      {modalOpen && <Modal />}
    </div>
  );
};

export default Main;
