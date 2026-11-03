import { MINUTES, minuteForSlide } from './timePickerModel';

describe('time picker model', () => {
  it('maps slide index to minute value', () => {
    expect(minuteForSlide(0)).toBe(0);
    expect(minuteForSlide(3)).toBe(30);
    expect(minuteForSlide(5)).toBe(50);
  });

  it('exposes six ten-minute steps', () => {
    expect(MINUTES).toEqual([0, 10, 20, 30, 40, 50]);
  });
});
