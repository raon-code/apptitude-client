import { formatTime } from './Timer';

describe('formatTime', () => {
  it('zero-pads every unit', () => {
    expect(formatTime(0)).toBe('00:00:00');
    expect(formatTime(9)).toBe('00:00:09');
    expect(formatTime(59)).toBe('00:00:59');
  });

  it('rolls minutes and hours over at the boundary', () => {
    expect(formatTime(60)).toBe('00:01:00');
    expect(formatTime(3599)).toBe('00:59:59');
    expect(formatTime(3600)).toBe('01:00:00');
    expect(formatTime(86399)).toBe('23:59:59');
  });
});
