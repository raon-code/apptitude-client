import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { colors, layout } from '@/styles/tokens';

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${layout.maxWidth};
  height: calc(${layout.navHeight} + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  display: flex;
  justify-content: space-between;
  background: ${colors.navSurface};
  backdrop-filter: blur(12px);
  border-radius: 20px 20px 0 0;
  z-index: 20;
`;

const Item = styled(NavLink)`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${colors.text};
  opacity: 0.6;

  &.active {
    color: ${colors.accent};
    opacity: 1;

    svg {
      fill: ${colors.accent};
    }
  }

  svg {
    fill: ${colors.text};
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 12px;
    font-weight: 500;
  }
`;

const Indicator = styled(motion.span)`
  position: absolute;
  bottom: 0;
  width: 42px;
  height: 26px;
  border: 2px solid ${colors.accent};
  border-bottom: 0;
  border-radius: 10px 10px 4px 4px;
`;

const indicatorTransition = { type: 'spring', stiffness: 420, damping: 34 };

const tabs = [
  {
    to: '/',
    label: '내 기록',
    end: true,
    icon: (
      <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M11.47 3.84a.75.75 0 0 1 1.06 0l9.19 9.19a.75.75 0 1 1-1.06 1.06l-9.19-9.19-9.19 9.19a.75.75 0 0 1-1.06-1.06l9.19-9.19Z' />
        <path d='M12 5.43 20.25 13.68V19.5A1.5 1.5 0 0 1 18.75 21H15a.75.75 0 0 1-.75-.75V16.5h-4.5v3.75A.75.75 0 0 1 9 21H5.25a1.5 1.5 0 0 1-1.5-1.5v-5.82L12 5.43Z' />
      </svg>
    )
  },
  {
    to: '/battle',
    label: '대결',
    icon: (
      <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M5.53 15.56a.9.9 0 1 1 1.25-1.29 3.6 3.6 0 0 0 1.07 3.02A3.6 3.6 0 0 0 4.8 21a3.6 3.6 0 0 0 2.03-3.25 2.7 2.7 0 0 1 .94-2.02.9.9 0 0 1-.94-1.94 1.9 1.9 0 0 0-1.3 1.77Z' />
        <path d='M7.2 7.5a5.7 5.7 0 0 0 2.7 4.78v-.01a5.7 5.7 0 1 0 6.7-9.07 5.7 5.7 0 0 0-2.7 4.78A5.7 5.7 0 0 0 7.2 7.5Zm8.4 3.3a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Z' />
      </svg>
    )
  },
  {
    to: '/info',
    label: '내 정보',
    icon: (
      <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 2.25c-5.38 0-9.75 4.37-9.75 9.75s4.37 9.75 9.75 9.75 9.75-4.37 9.75-9.75S17.38 2.25 12 2.25Zm0 18.75a9 9 0 0 1-6.43-2.69 6.75 6.75 0 0 1 12.86 0A8.98 8.98 0 0 1 12 21Zm0-9.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z' />
      </svg>
    )
  }
];

export default function Nav() {
  return (
    <NavBar aria-label='주요 메뉴'>
      {tabs.map(({ to, label, icon, end }) => (
        <Item key={to} to={to} end={end}>
          {({ isActive }) => (
            <>
              {icon}
              <span>{label}</span>
              {isActive && (
                <Indicator
                  layoutId='nav-indicator'
                  transition={indicatorTransition}
                />
              )}
            </>
          )}
        </Item>
      ))}
    </NavBar>
  );
}
