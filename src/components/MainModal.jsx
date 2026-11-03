import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: #28272b;
  border-radius: 32px 32px 0 0;
  padding: 32ox 24ox;
  display: inline-flex;
`;

const Image = styled.div``;

const Text = styled.p``;

const Button = styled.button``;

const MainModal = ({ imageSrc, text, buttonText, onClose }) => {
  return (
    <ModalContainer>
      <Image></Image>
    </ModalContainer>
  );
};

export default MainModal;
