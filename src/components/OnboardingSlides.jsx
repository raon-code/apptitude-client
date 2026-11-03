import { forwardRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import image1 from '@/assets/slide1.png';
import image2 from '@/assets/slide2.png';
import image3 from '@/assets/slide3.png';
import { colors, space, typography } from '@/styles/tokens';
import 'slick-carousel/slick/slick.css';

const SLIDES = [
  {
    image: image1,
    alt: '슬라이드 1',
    lines: ['디지털 디톡스,', '혼자하기 어려우시죠?']
  },
  {
    image: image2,
    alt: '슬라이드 2',
    lines: ['친구와 1:1로 경쟁하며', '디톡스를 해보세요!']
  },
  {
    image: image3,
    alt: '슬라이드 3',
    lines: ['가벼운 내기 상품도 건다면,', '더 재미있겠죠?']
  }
];

const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${space(16)} ${space(5)};
`;

const SlideImage = styled.img`
  width: 50%;
  height: auto;
`;

const SlideTitle = styled.h2`
  margin-top: ${space(4)};
  text-align: center;
  font-size: ${typography.title.size};
  font-weight: ${typography.title.weight};
  letter-spacing: ${typography.title.letterSpacing};
  line-height: 1.45;
  color: ${colors.text};
`;

const OnboardingSlides = forwardRef(function OnboardingSlides(
  { settings, onSlideChange },
  ref
) {
  return (
    <Slider ref={ref} {...settings} afterChange={onSlideChange}>
      {SLIDES.map((slide) => (
        <SlideItem key={slide.alt}>
          <SlideImage src={slide.image} alt={slide.alt} />
          <SlideTitle>
            {slide.lines.map((line, lineIndex) => (
              <span key={line}>
                {line}
                {lineIndex < slide.lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </SlideTitle>
        </SlideItem>
      ))}
    </Slider>
  );
});

export default OnboardingSlides;
