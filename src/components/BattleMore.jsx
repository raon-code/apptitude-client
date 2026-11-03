import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import CenterModal from './CenterModal';
import Contract from './Contract';
import { colors, layout, space } from '@/styles/tokens';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(5, 4, 9, 0.72);
`;

const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 41;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${layout.maxWidth};
  padding: 0 ${space(4)} ${space(8)};
`;

const Item = styled.button`
  padding: ${space(4)} 0;
  background: ${colors.surface};
  color: ${colors.textMuted};
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  border-radius: ${({ $first }) => ($first ? '20px 20px 0 0' : '0 0 20px 20px')};

  & + & {
    margin-top: 1px;
  }
`;

const Exit = styled.button`
  margin-top: ${space(4)};
  padding: ${space(4)} 0;
  border-radius: 36px;
  background: ${colors.accent};
  color: ${colors.bg};
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
`;

const ContractPanel = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 41;
  display: flex;
  flex-direction: column;
  gap: ${space(4)};
  width: 100%;
  max-width: ${layout.maxWidth};
  padding: 0 ${space(4)} ${space(8)};
`;

export default function BattleMore({ isOpen, closeMore }) {
  const navigate = useNavigate();
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isDeclareSurrender, setIsDeclareSurrender] = useState(false);

  const viewContract = () => setIsContractOpen(true);
  const closeContract = () => setIsContractOpen(false);
  const openCenterModal = () => setIsDeclareSurrender(true);
  const closeCenterModal = () => setIsDeclareSurrender(false);
  const closeAll = () => {
    setIsContractOpen(false);
    closeMore();
  };
  const surrender = () => {
    setIsDeclareSurrender(false);
    closeAll();
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <>
      <Backdrop onClick={isContractOpen ? closeContract : closeAll} />
      {isContractOpen ? (
        <ContractPanel>
          <Contract />
          <Button step='닫기' clickEvent={closeContract} />
        </ContractPanel>
      ) : (
        !isDeclareSurrender && (
          <Sheet role='dialog' aria-modal='true' aria-label='대결 메뉴'>
            <Item type='button' $first onClick={viewContract}>
              계약서보기
            </Item>
            <Item type='button' onClick={openCenterModal}>
              항복선언하기
            </Item>
            <Exit type='button' onClick={closeAll}>
              나가기
            </Exit>
          </Sheet>
        )
      )}
      <CenterModal
        isDeclareSurrender={isDeclareSurrender}
        closeCenterModal={closeCenterModal}
        onSurrender={surrender}
      />
    </>
  );
}
