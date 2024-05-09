import styled from 'styled-components';
import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Nav from '../components/Nav';

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #050409;
  padding: 64px 16px 0;
  border: none;
  display: flex;
  flex-direction: column;
`;

export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('디톡스 시작하기!');

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
        <Button clickEvent={onClick} status={status} />
      </MainWrap>

      <Nav />
      {modalOpen ? <Modal /> : null}
    </div>
  );
}
