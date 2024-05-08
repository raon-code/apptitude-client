import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import clsx from 'clsx';

const TIME_HOURS = Array.from(Array(24).keys());
const TIME_MINUTES = Array.from(Array(6).keys()).map((index) => index * 10);

export default function TimePicker({ setHours, setMinutes }) {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const handleHourChange = (swiper) => {
    setSelectedHour(swiper.realIndex);
    setHours(swiper.realIndex);
  };

  const handleMinuteChange = (swiper) => {
    setSelectedMinute(swiper.realIndex);
    setMinutes(swiper.realIndex * 10);
    console.log('Selected minute:', swiper.realIndex * 10); // 콘솔에 선택된 분을 출력합니다.
  };

  return (
    <div className='flex justify-center items-center'>
      {/* 왼쪽 Swiper */}
      <Swiper
        className='time-picker-swiper h-[16.8rem] px-[1.1rem] mr-2 h-[180px]'
        direction={'vertical'}
        slidesPerView={3}
        mousewheel
        loopAdditionalSlides={5}
        slideToClickedSlide
        centeredSlides
        onSlideChange={handleHourChange}
      >
        {TIME_HOURS.map((hour) => (
          <SwiperSlide key={hour}>
            <div
              className={clsx(
                'flex h-[60px] cursor-pointer items-center',
                selectedHour === hour
                  ? 'text-[2rem] font-medium text-primary-500'
                  : 'text-primary-700 text-lg'
              )}
            >
              {(hour + '').padStart(2, '0')}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 오른쪽 Swiper */}
      <Swiper
        className='time-picker-swiper h-[16.8rem] px-[1.1rem] ml-2 h-[180px]'
        direction={'vertical'}
        slidesPerView={3}
        mousewheel
        loopAdditionalSlides={5}
        slideToClickedSlide
        centeredSlides
        onSlideChange={handleMinuteChange}
      >
        {TIME_MINUTES.map((minute) => (
          <SwiperSlide key={minute}>
            <div
              className={clsx(
                'flex h-[60px] cursor-pointer items-center',
                selectedMinute === minute
                  ? 'text-[2rem] font-medium text-primary-500'
                  : 'text-primary-700 text-lg'
              )}
            >
              {(minute + '').padStart(2, '0')}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
