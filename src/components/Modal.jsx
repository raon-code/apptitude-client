import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import image from '@/assets/Design2.png';
import { colors, layout, radius, space } from '@/styles/tokens';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(5, 4, 9, 0.8);
`;

const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 41;
  width: 100%;
  max-width: ${layout.maxWidth};
  padding: ${space(8)} ${space(6)} ${space(10)};
  background: ${colors.surface};
  border-radius: ${radius.xl} ${radius.xl} 0 0;
  text-align: center;
`;

const Title = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${space(1)};
  color: ${colors.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
`;

const Description = styled.p`
  margin-top: ${space(3)};
  color: ${colors.textMuted};
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
`;

const Illustration = styled.img`
  width: 90px;
  height: 90px;
  margin: ${space(6)} auto 0;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space(5)};
  margin-top: ${space(8)};
`;

const Primary = styled.button`
  padding: ${space(4)};
  border-radius: ${radius.pill};
  background: ${colors.accent};
  color: ${colors.onAccent};
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
`;

const Secondary = styled.button`
  color: ${colors.textSubtle};
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
`;

export default function Modal({ openModal, closeModal }) {
  const navigate = useNavigate();

  if (!openModal) return null;

  const handleRetry = () => {
    closeModal?.();
    navigate('/make-battle');
  };

  return (
    <>
      <Backdrop onClick={closeModal} />
      <Sheet role='dialog' aria-modal='true' aria-label='대결 취소'>
        <Title>
          <span>김수한무님</span>
          <span>대결이 취소되었어요!</span>
        </Title>
        <Description>다른 친구와 대결은 어떠세요?</Description>
        <Illustration src={image} alt='' />
        <Actions>
          <Primary type='button' onClick={handleRetry}>
            대결방 다시 만들기
          </Primary>
          <Secondary type='button' onClick={closeModal}>
            나중에 하기
          </Secondary>
        </Actions>
      </Sheet>
    </>
  );
}
