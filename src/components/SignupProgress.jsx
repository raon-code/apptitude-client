import styled from 'styled-components';
import { colors, radius, space } from '@/styles/tokens';

const Track = styled.div`
  display: flex;
  gap: ${space(1)};
  width: 100%;
  margin-top: ${space(2)};
`;

const stateColor = {
  done: colors.accentSoft,
  current: colors.accent,
  todo: colors.surface
};

const Segment = styled.span`
  flex: 1;
  height: 4px;
  border-radius: ${radius.pill};
  background: ${({ $state }) => stateColor[$state]};
`;

export default function SignupProgress({ step, total = 4 }) {
  return (
    <Track
      role='progressbar'
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={step + 1}
      aria-label='회원가입 진행 상황'
    >
      {Array.from({ length: total }, (_, index) => (
        <Segment
          key={index}
          $state={index < step ? 'done' : index === step ? 'current' : 'todo'}
        />
      ))}
    </Track>
  );
}
