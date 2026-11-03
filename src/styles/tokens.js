export const colors = {
  bg: '#050409',
  surface: '#28272B',
  surfaceRaised: '#323137',
  accent: '#04C357',
  accentSoft: '#A5E9C2',
  text: '#FEFEFE',
  textSoft: 'rgba(255, 255, 255, 0.87)',
  textMuted: '#BEBDC4',
  textSubtle: '#6E7487',
  danger: '#D83E3E',
  kakao: '#F8E049',
  navSurface: 'rgba(51, 51, 51, 0.45)',
  scrim: 'rgba(5, 4, 9, 0.75)',
  scrimStrong: 'rgba(5, 4, 9, 0.85)',
  onAccent: '#0F0E14'
};

export const fontFamily =
  "'Pretendard', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif";

export const space = (units) => `${units * 4}px`;

export const radius = {
  sm: '10px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  pill: '999px'
};

export const typography = {
  caption: { size: '12px', weight: 500, letterSpacing: '-0.2px' },
  body: { size: '16px', weight: 500, letterSpacing: '-0.4px' },
  subtitle: { size: '18px', weight: 500, letterSpacing: '-0.45px' },
  title: { size: '20px', weight: 600, letterSpacing: '-0.5px' },
  display: { size: '48px', weight: 500, letterSpacing: '-1px' }
};

export const layout = {
  maxWidth: '390px',
  gutter: '20px',
  navHeight: '64px',
  headerHeight: '56px'
};
