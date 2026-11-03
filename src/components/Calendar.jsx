import { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { colors, radius, space, typography } from '@/styles/tokens';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: ${space(4)};
  border-radius: ${radius.sm};
  background-color: ${colors.surface};
  color: ${colors.textMuted};
  font-size: ${typography.subtitle.size};
  font-weight: ${typography.subtitle.weight};
  letter-spacing: ${typography.subtitle.letterSpacing};
  text-align: left;
`;

const CalendarWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

  .react-calendar {
    background-color: ${colors.surface};
    border: none;
    border-radius: ${radius.sm};
    color: ${colors.text};
  }

  .react-calendar__tile {
    color: ${colors.text};
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${colors.textSubtle};
  }

  .react-calendar__tile--now {
    background: ${colors.accentSoft};
    color: ${colors.onAccent};
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${colors.accentSoft};
    color: ${colors.onAccent};
  }

  .react-calendar__tile--active {
    background: ${colors.accent};
    color: ${colors.onAccent};
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${colors.accent};
  }
`;

const formatRange = (range) => {
  if (!range || !range[0]) return null;
  const start = moment(range[0]).format('YYYY.MM.DD');
  if (!range[1]) return start;
  return `${start} ~ ${moment(range[1]).format('YYYY.MM.DD')}`;
};

export default function BattleCalendar({ onChange, value }) {
  const [range, setRange] = useState(value ?? null);
  const [isOpen, setIsOpen] = useState(false);

  const changeDate = (selectedRange) => {
    const [start, end] = selectedRange ?? [];
    if (!start || !end) {
      setRange(selectedRange ?? null);
      return;
    }
    setRange([start, end]);
    if (onChange) onChange([start, end]);
  };

  return (
    <Container>
      <DropdownButton type='button' onClick={() => setIsOpen((prev) => !prev)}>
        {formatRange(range) ?? '언제부터 언제까지 대결하나요?'}
      </DropdownButton>
      <CalendarWrapper $isOpen={isOpen}>
        <Calendar
          onChange={changeDate}
          selectRange
          value={range?.[1] ? range : undefined}
          formatDay={(locale, date) => moment(date).format('DD')}
        />
      </CalendarWrapper>
    </Container>
  );
}
