import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const BattleCalendar = ({ onChange, value }) => {
  const CalendarContainer = styled.div`
    position: relative;
    width: 100%;
  `;

  const DropdownButton = styled.button`
    width: 100%;
    padding: 16px;
    border-radius: 10px;
    background-color: var(--inputBox_color, #28272b);
    color: #888;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.45px;
  `;

  const CalendarWrapper = styled.div`
    z-index: 11;
    position: absolute;
    top: 100%;
    left: 0;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    .react-calendar__tile--now {
      background: #ef5350;
      color: #fafafa;
    }

    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
      background: #ef5350;
      color: #fafafa;
    }
    .react-calendar__tile--active {
      background: #7fb77e;
      color: white;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background: #7fb77e;
    }
  `;

  const [startDate, setStartDate] = useState('언제부터 언제까지 대결하나요?');
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  // const handleDateChange = (selectedDate) => {
  //   onChange(selectedDate);
  //   setIsOpen(false);
  //   setNowDate(moment(selectedDate).format('YYYY년 MM월 DD일'));
  // };

  const changeDate = (e) => {
    const startDateFormat = moment(e[0]).format('YYYY.MM.DD');
    const endDateFormat = moment(e[1]).format('YYYY.MM.DD');
    // 여행 시작일자와 마치는일자의 값이 변할 때마다 값을 다시 세팅해줌
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };

  return (
    <CalendarContainer>
      <DropdownButton onClick={handleToggleCalendar}>
        {startDate} {endDate}
      </DropdownButton>
      <CalendarWrapper isOpen={isOpen}>
        <Calendar
          onChange={changeDate} // 적용된 부분
          selectRange={true}
          formatDay={(locale, date) => moment(date).format('DD')}
        ></Calendar>
      </CalendarWrapper>
    </CalendarContainer>
  );
};

export default BattleCalendar;
