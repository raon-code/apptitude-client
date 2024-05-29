import styled from 'styled-components';
import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import Timer from '../components/Timer';

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #050409;
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
  height: 45.55vw;
  background-image: url('../../../main_icon_frame.svg');
  margin-top: 19px;

  span:nth-child(1) {
    background-image: url('../../../icon_red.svg');
    display: inline-block;
    width: 21.1vw;
    height: 21.1vw;
  }
`;

export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('디톡스 시작하기!');
  const [confirm, setConfirm] = useState(true);
  const [period, setPeriod] = useState('대결 시작 전');

  function onClick() {
    // if (titles.length === index + 1) {
    //   console.log('끝');
    //   return;
    // }
    // setIndex((prevIndex) => prevIndex + 1);
    // setTitle(titles[index + 1]);
    // setPlaceholder(placeholders[index + 1]);
    // if (index === 2) {
    // }
  }

  return (
    <div>
      <MainWrap>
        <Container>
          <BattlePeriod>{period}</BattlePeriod>
          <Button clickEvent={onClick} confirm={confirm} step={status} />
          <Timer />
          <MainIcon>
            <span></span>
            <span></span>
            <span></span>
          </MainIcon>
        </Container>
      </MainWrap>

      <Nav />
      {modalOpen ? <Modal /> : null}
    </div>
  );
}
