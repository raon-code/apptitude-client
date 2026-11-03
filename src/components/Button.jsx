import styled from 'styled-components';
import { colors, radius, space, typography } from '@/styles/tokens';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space(1)};
  width: 100%;
`;

const StyledButton = styled.button`
  width: 100%;
  min-height: 56px;
  padding: ${space(4)} ${space(5)};
  border-radius: ${radius.pill};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  background: ${({ $variant }) =>
    $variant === 'ghost' ? colors.surface : colors.accent};
  color: ${({ $variant }) =>
    $variant === 'ghost' ? colors.textMuted : colors.onAccent};
  transition:
    transform 120ms ease,
    opacity 120ms ease;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`;

export default function Button({
  clickEvent,
  step,
  children,
  confirm = true,
  variant = 'primary',
  disabled = false,
  type = 'button'
}) {
  return (
    <Wrap>
      <StyledButton
        type={type}
        onClick={clickEvent}
        disabled={disabled}
        $variant={confirm ? variant : 'ghost'}
      >
        {step ?? children}
      </StyledButton>
    </Wrap>
  );
}

export const buttonTextStyle = typography.title;
