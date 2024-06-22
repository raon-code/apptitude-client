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
      <div className='fixed top-6 w-full flex justify-center'>
        <div>
          {currentSlide === 0 && <img src={logo} alt='Logo' />}
          {(currentSlide === 1 || currentSlide === 2) && (
            <img src={icon} alt='icon' className='mt-6' style={{ zIndex: 1 }} />
          )}
        </div>
      </div>
      <div
        className='w-full bg-[#28272B] rounded-[16px] flex items-center justify-center overflow-hidden mt-20'
        style={{ zIndex: 0 }}
      >
        <OnboardingSlides
          settings={settings}
          setCurrentSlide={setCurrentSlide}
        />
      </div>
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
      <div className='bottom-6 w-full fixed justify-center'>
        <LoginButton title={'kakao로 로그인'} />
      </div>
    </div>
  );
}
