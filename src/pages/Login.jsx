import { useRef, useState } from 'react';
import styled from 'styled-components';
import LoginButton from '@/components/LoginButton';
import OnboardingSlides from '@/components/OnboardingSlides';
import { Screen } from '@/components/ui/Screen';
import logo from '@/assets/LOGO.png';
import icon from '@/assets/icon.png';
import { colors, radius, space } from '@/styles/tokens';

const SLIDE_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SLIDE_COUNT = 3;

const HeaderSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  margin-top: ${space(2)};
`;

const HeaderImage = styled.img`
  max-height: 100%;
  width: auto;
`;

const SlideCard = styled.div`
  width: 100%;
  margin-top: ${space(10)};
  border-radius: ${radius.md};
  background: ${colors.surface};
  overflow: hidden;
`;

const Dots = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${space(2)};
  margin-top: ${space(8)};
  list-style: none;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? '20px' : '8px')};
  height: 8px;
  padding: 0;
  border: none;
  border-radius: ${radius.pill};
  background: ${({ $active }) => ($active ? colors.accent : colors.surface)};
  cursor: pointer;
  transition:
    width 200ms ease,
    background 200ms ease;
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: ${space(8)};
  width: 100%;
`;

export default function Login() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => sliderRef.current?.slickGoTo(index);

  return (
    <Screen>
      <HeaderSlot>
        {currentSlide === 0 ? (
          <HeaderImage src={logo} alt='로고' />
        ) : (
          <HeaderImage src={icon} alt='아이콘' />
        )}
      </HeaderSlot>

      <SlideCard>
        <OnboardingSlides
          ref={sliderRef}
          settings={SLIDE_SETTINGS}
          onSlideChange={setCurrentSlide}
        />
      </SlideCard>

      <Dots>
        {Array.from({ length: SLIDE_COUNT }, (_, index) => (
          <li key={index}>
            <Dot
              type='button'
              $active={index === currentSlide}
              onClick={() => goToSlide(index)}
              aria-label={`${index + 1}번째 소개 화면`}
              aria-current={index === currentSlide}
            />
          </li>
        ))}
      </Dots>

      <Footer>
        <LoginButton title='kakao로 로그인' />
      </Footer>
    </Screen>
  );
}
