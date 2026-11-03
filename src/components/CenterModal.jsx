import styled from 'styled-components';
import { colors, layout, radius, space } from '@/styles/tokens';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${space(4)};
  background: ${colors.scrim};
`;

const Dialog = styled.div`
  width: 100%;
  max-width: ${layout.maxWidth};
  padding: ${space(8)} ${space(4)};
  background: ${colors.surface};
  border-radius: ${radius.lg};
`;

const Message = styled.p`
  color: ${colors.text};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${space(4)};
  margin-top: ${space(10)};
  padding: 0 ${space(6)};
`;

const Ghost = styled.button`
  padding: ${space(2)} ${space(2.5)};
  border-radius: ${radius.pill};
  background: ${colors.bg};
  color: ${colors.textMuted};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

const Primary = styled.button`
  padding: ${space(2)} ${space(2.5)};
  border-radius: ${radius.pill};
  background: ${colors.accent};
  color: ${colors.onAccent};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export default function CenterModal({
  isDeclareSurrender,
  closeCenterModal,
  onSurrender
}) {
  if (!isDeclareSurrender) return null;

  return (
    <Overlay onClick={closeCenterModal}>
      <Dialog
        role='alertdialog'
        aria-modal='true'
        aria-label='항복 선언'
        onClick={(event) => event.stopPropagation()}
      >
        <Message>
          정말 대결을 <br />
          포기하시겠어요?
        </Message>
        <Actions>
          <Ghost type='button' onClick={onSurrender}>
            네, 포기할래요
          </Ghost>
          <Primary type='button' onClick={closeCenterModal}>
            아뇨, 계속할래요
          </Primary>
        </Actions>
      </Dialog>
    </Overlay>
  );
}
