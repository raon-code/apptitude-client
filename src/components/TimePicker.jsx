import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import styled from 'styled-components';
import { colors, space, typography } from '@/styles/tokens';

import { HOURS, MINUTES, minuteForSlide } from './timePickerModel';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoursSwiper = styled(Swiper)`
  height: 180px;
  padding: 0 ${space(4)};
  margin-right: ${space(2)};
`;

const MinutesSwiper = styled(Swiper)`
  height: 180px;
  padding: 0 ${space(4)};
  margin-left: ${space(2)};
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  cursor: pointer;
  font-size: ${({ $active }) => ($active ? '32px' : typography.subtitle.size)};
  font-weight: ${({ $active }) => ($active ? 500 : typography.subtitle.weight)};
  color: ${({ $active }) => ($active ? colors.accent : colors.textSubtle)};
`;

export default function TimePicker({ setHours, setMinutes }) {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const handleHourChange = (swiper) => {
    setSelectedHour(swiper.realIndex);
    setHours(swiper.realIndex);
  };

  const handleMinuteChange = (swiper) => {
    const minute = minuteForSlide(swiper.realIndex);
    setSelectedMinute(minute);
    setMinutes(minute);
  };

  return (
    <Row>
      <HoursSwiper
        direction='vertical'
        slidesPerView={3}
        slideToClickedSlide
        centeredSlides
        modules={[Mousewheel]}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        onSlideChange={handleHourChange}
      >
        {HOURS.map((hour) => (
          <SwiperSlide key={hour}>
            <Value $active={selectedHour === hour}>
              {(hour + '').padStart(2, '0')}
            </Value>
          </SwiperSlide>
        ))}
      </HoursSwiper>
      <MinutesSwiper
        direction='vertical'
        slidesPerView={3}
        slideToClickedSlide
        centeredSlides
        modules={[Mousewheel]}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        onSlideChange={handleMinuteChange}
      >
        {MINUTES.map((minute) => (
          <SwiperSlide key={minute}>
            <Value $active={selectedMinute === minute}>
              {(minute + '').padStart(2, '0')}
            </Value>
          </SwiperSlide>
        ))}
      </MinutesSwiper>
    </Row>
  );
}
