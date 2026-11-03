import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '@/assets/kakao_logo.png';
import { colors, radius, space } from '@/styles/tokens';

const KakaoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${space(2)};
  width: 100%;
  min-height: 60px;
  padding: ${space(4)} ${space(5)};
  border-radius: ${radius.pill};
  background: ${colors.kakao};
  color: ${colors.onAccent};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-decoration: none;
  transition:
    transform 120ms ease,
    opacity 120ms ease;

  &:active {
    transform: scale(0.98);
  }
`;

const KakaoLogo = styled.img`
  width: 22px;
  height: 22px;
`;

export default function LoginButton({ toLink = '/signup/profile', title }) {
  return (
    <KakaoLink to={toLink}>
      <KakaoLogo src={image} alt='' />
      {title}
    </KakaoLink>
  );
}
