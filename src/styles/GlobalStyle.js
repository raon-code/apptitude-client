import { createGlobalStyle } from 'styled-components';
import { colors, fontFamily, layout } from './tokens';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: ${colors.bg};
    --color-surface: ${colors.surface};
    --color-surface-raised: ${colors.surfaceRaised};
    --color-accent: ${colors.accent};
    --color-accent-soft: ${colors.accentSoft};
    --color-text: ${colors.text};
    --color-text-muted: ${colors.textMuted};
    --color-text-subtle: ${colors.textSubtle};
    --color-danger: ${colors.danger};
    --color-on-accent: ${colors.onAccent};
    --layout-gutter: ${layout.gutter};
    --layout-nav-height: ${layout.navHeight};
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/woff2/PretendardVariable.woff2')
      format('woff2-variations');
    font-weight: 45 920;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    background: ${colors.onAccent};
  }

  body {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background: var(--color-on-accent);
    color: var(--color-text);
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #root {
    width: 100%;
    max-width: ${layout.maxWidth};
    min-height: 100vh;
    background: var(--color-bg);
    overflow-x: hidden;
    position: relative;
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }

  ::selection {
    background: var(--color-accent);
    color: var(--color-on-accent);
  }

  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  menu,
  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    color: inherit;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  input,
  textarea {
    font-family: inherit;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  *[hidden] {
    display: none;
  }
`;
