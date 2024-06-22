import React, { useState } from 'react';
import LoginButton from '@/components/LoginButton';
import OnboardingSlides from '@/components/OnboardingSlides';
import logo from '@/LOGO.png';
import icon from '@/icon.png';
import '@/css/slick-custom.css';

export default function Login() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='h-full w-full flex flex-col items-center px-6 py-6'>
      <div>
        {currentSlide === 0 && (
          <img src={logo} alt='Logo' className='mt-3 mb-3' />
        )}
        {(currentSlide === 1 || currentSlide === 2) && (
          <img src={icon} alt='icon' className='mt-2.5 mb-2.5' />
        )}
      </div>
      <div className='w-full bg-[#28272B] rounded-[18px] flex items-center justify-center overflow-hidden'>
        <OnboardingSlides
          settings={settings}
          setCurrentSlide={setCurrentSlide}
        />
      </div>
      <div>
        <ul className='slick-custom'>
          {[0, 1, 2].map((index) => (
            <li
              key={index}
              className={index === currentSlide ? 'slick-active' : ''}
            >
              <button onClick={() => setCurrentSlide(index)}>
                <span></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='bottom-6 w-full fixed justify-center'>
        <LoginButton title={'kakao로 로그인'} />
      </div>
    </div>
  );
}
