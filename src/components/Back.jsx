import styled from 'styled-components';
import { colors, layout, space } from '@/styles/tokens';

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${layout.headerHeight};
  color: ${colors.text};
`;

const BackButton = styled.button`
  position: absolute;
  left: -${space(2)};
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export default function Back({ title, backClick }) {
  const handleBack = backClick ?? (() => window.history.back());

  return (
    <Header>
      <BackButton type='button' onClick={handleBack} aria-label='뒤로 가기'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          aria-hidden='true'
        >
          <line x1='19' x2='5' y1='12' y2='12' />
          <polyline points='12 19 5 12 12 5' />
        </svg>
      </BackButton>
      {title ? <Title>{title}</Title> : null}
    </Header>
  );
}
