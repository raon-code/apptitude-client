import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { colors, radius, space } from '@/styles/tokens';

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(5, 4, 9, 0.72);
  z-index: 40;
`;

const Sheet = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 390px;
  padding: ${space(8)} ${space(5)} ${space(8)};
  background: ${colors.surface};
  border-radius: 32px 32px 0 0;
  z-index: 41;
  display: flex;
  flex-direction: column;
  gap: ${space(4)};
  text-align: center;
`;

const Title = styled.p`
  color: ${colors.text};
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
`;

const Description = styled.p`
  color: ${colors.textMuted};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space(3)};
  margin-top: ${space(2)};
`;

const Primary = styled.button`
  min-height: 56px;
  border-radius: ${radius.pill};
  background: ${colors.accent};
  color: ${colors.onAccent};
  font-size: 20px;
  font-weight: 700;
`;

const Secondary = styled.button`
  min-height: 44px;
  color: ${colors.textSubtle};
  font-size: 18px;
  font-weight: 600;
`;

export default function MainModal({
  open,
  title,
  description,
  confirmText = '시작할래요',
  cancelText = '나중에 할래요',
  onConfirm,
  onClose
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <Sheet
            role='dialog'
            aria-modal='true'
            aria-label={title}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          >
            <Title>{title}</Title>
            {description ? <Description>{description}</Description> : null}
            <Actions>
              <Primary type='button' onClick={onConfirm}>
                {confirmText}
              </Primary>
              <Secondary type='button' onClick={onClose}>
                {cancelText}
              </Secondary>
            </Actions>
          </Sheet>
        </>
      )}
    </AnimatePresence>
  );
}
