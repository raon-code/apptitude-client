import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import MainModal from '../components/MainModal';
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
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
  margin: 32px 0 82px;
  width: fit-content;
`;

const Notice = styled.div`
  background-image: url('../../../main_notice.svg');
  width: 276px;
  height: 60px;
`;

const Message = styled.p`
  color: ${(props) =>
    props.isDetoxStarted ? '#050409' : 'rgba(255, 255, 255, 0.87)'};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.45px;
  position: absolute;
  bottom: 141px;
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

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (isDetoxStarted) {
        // 대결이 시작되었을 때만 처리
        if (document.visibilityState === 'hidden') {
          setIsDetoxStarted(false); // 화면이 가려질 때 타이머 일시정지
        } else {
          setIsDetoxStarted(true); // 화면이 다시 보일 때 타이머 재개
        }
      }
    };

    setBackgroundColor(isDetoxStarted ? '#04C357' : '#050409');

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isDetoxStarted]); // isDetoxStarted가 바뀔 때만 effect 실행

  const handleButtonClick = () => {
    setIsDetoxStarted((prev) => !prev);
    setBackgroundColor(isDetoxStarted ? '#04C357' : '#050409');
    setConfirm(!confirm);
    setShowBattlePeriod(!isDetoxStarted); // isDetoxStarted 값에 따라 토글
    if (!isDetoxStarted) {
      setModalOpen(true); // 디톡스 시작 시 모달 열기
    } else {
      setModalOpen(false); // 디톡스 종료 시 모달 닫기
    }
  };

  return (
    <div>
      <MainWrap backgroundColor={backgroundColor}>
        <Container>
          {isDetoxStarted ? (
            <BattlePeriodIng show={isDetoxStarted ? 'true' : 'false'}>
              대결 중
            </BattlePeriodIng>
          ) : (
            <BattlePeriod>대결 시작 전</BattlePeriod>
          )}

          <Button
            clickEvent={handleButtonClick}
            step={isDetoxStarted ? '디톡스 그만하기' : '디톡스 시작하기!'}
            isDetoxStarted={isDetoxStarted}
            confirm={confirm}
          />
          <Timer isDetoxStarted={isDetoxStarted} />
          {isDetoxStarted ? (
            <>
              <Notice />
              <Message isDetoxStarted={isDetoxStarted}>
                시간을 선택하는 것은
                <br />
                시간을 절약하는 것이다.
                <br />
                -베이컨-
              </Message>
            </>
          ) : (
            <>
              <MainIcon>
                <span></span>
                <span></span>
                <span></span>
              </MainIcon>
              <Message isDetoxStarted={isDetoxStarted}>
                잘하고있어!
                <br />
                조금만 더 힘내서 디톡스해보자!
              </Message>
            </>
          )}
        </Container>
      </MainWrap>
      {isDetoxStarted ? '' : <Nav />}
      {/* <Nav /> */}
      {/* {modalOpen && <Modal />} */}
      <MainModal />
    </div>
  );
};

export default Main;
