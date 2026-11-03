export const HOURS = Array.from(Array(24).keys());
export const MINUTE_STEP = 10;

export function minuteForSlide(slideIndex) {
  return slideIndex * MINUTE_STEP;
}

export const MINUTES = Array.from(Array(60 / MINUTE_STEP).keys()).map(
  minuteForSlide
);
