import styled from 'styled-components';
import { colors, radius, space } from '@/styles/tokens';
import crown from '@/assets/crown.png';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 2px;
  width: 100%;
  margin-top: ${space(6)};
`;

const Half = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${space(2)};
  width: 100%;
  height: 176px;
  background: ${colors.surface};
  border-radius: ${({ $side }) =>
    $side === 'me' ? '50px 0 0 50px' : '0 50px 50px 0'};
`;

const Avatar = styled.div`
  position: relative;
  width: 52px;
  height: 52px;
`;

const Badge = styled.span`
  position: absolute;
  top: 0;
  left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: ${radius.pill};
  background: ${colors.bg};
  color: ${colors.text};
  font-size: 12px;
  font-weight: 500;
`;

const Crown = styled.img`
  position: absolute;
  top: -18px;
  left: 14px;
  width: 24px;
  height: 24px;
`;

const VsBadge = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: ${radius.pill};
  background: ${colors.bg};
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
`;

const Caption = styled.span`
  margin-top: ${space(2)};
  color: ${colors.textMuted};
  font-size: 14px;
  font-weight: 500;
`;

const Value = styled.span`
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
`;

export default function VS({ gameEnd }) {
  return (
    <Wrapper>
      {/* 나 */}
      <Half $side='me'>
        <Avatar>
          <div>
            <svg
              width='56'
              height='57'
              viewBox='0 0 56 57'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M28.0039 56.5C43.4679 56.5 56.0039 43.964 56.0039 28.5C56.0039 13.036 43.4679 0.5 28.0039 0.5C12.5399 0.5 0.00390625 13.036 0.00390625 28.5C0.00390625 43.964 12.5399 56.5 28.0039 56.5Z'
                fill={colors.bg}
              />
              <mask
                id='mask0_799_3928'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='57'
                height='57'
              >
                <path
                  d='M28.0039 56.5C43.4679 56.5 56.0039 43.964 56.0039 28.5C56.0039 13.036 43.4679 0.5 28.0039 0.5C12.5399 0.5 0.00390625 13.036 0.00390625 28.5C0.00390625 43.964 12.5399 56.5 28.0039 56.5Z'
                  fill='white'
                />
              </mask>
              <g mask='url(#mask0_799_3928)'>
                <path
                  d='M7.91797 50.5027C7.91797 50.5027 9.07139 14.2441 37.2611 14.2441C65.4507 14.2441 60.4372 58.269 60.4372 58.269L28.4438 62.8366L7.91797 50.4975'
                  fill={colors.textSubtle}
                />
              </g>
              <path
                d='M29.4905 32.2877C30.3116 32.2877 30.9772 31.6221 30.9772 30.8011C30.9772 29.98 30.3116 29.3145 29.4905 29.3145C28.6695 29.3145 28.0039 29.98 28.0039 30.8011C28.0039 31.6221 28.6695 32.2877 29.4905 32.2877Z'
                fill={colors.onAccent}
              />
              <path
                d='M36.0628 32.2877C36.8838 32.2877 37.5494 31.6221 37.5494 30.8011C37.5494 29.98 36.8838 29.3145 36.0628 29.3145C35.2418 29.3145 34.5762 29.98 34.5762 30.8011C34.5762 31.6221 35.2418 32.2877 36.0628 32.2877Z'
                fill={colors.onAccent}
              />
              <path
                d='M32.8072 36.8405C32.8072 36.3741 32.7047 35.8563 32.31 35.4769C31.8384 35.0156 31.7615 34.79 30.7721 35.2104C30.3876 35.3744 30.2389 35.8871 30.1826 36.3023C30.1467 36.5637 30.1518 36.7226 30.2389 36.9892C30.3158 37.2302 30.121 37.5429 29.5366 37.4865C27.6707 37.2968 28.3781 35.8922 28.3781 35.8922C28.3781 35.8922 27.117 36.6099 28.7882 38.4041C29.3675 39.0244 30.2441 39.4498 31.0848 39.3781C32.6124 39.2499 32.8175 37.7069 32.8124 36.8457L32.8072 36.8405Z'
                fill={colors.onAccent}
              />
              <path
                d='M32.1302 36.8405C32.1302 36.3741 32.2327 35.8563 32.6275 35.4769C33.0991 35.0156 33.176 34.79 34.1654 35.2104C34.5498 35.3744 34.6985 35.8871 34.7549 36.3023C34.7908 36.5637 34.7857 36.7226 34.6985 36.9892C34.6216 37.2302 34.8164 37.5429 35.4008 37.4865C37.2668 37.2968 36.5594 35.8922 36.5594 35.8922C36.5594 35.8922 37.8204 36.6099 36.1493 38.4041C35.57 39.0244 34.6934 39.4498 33.8527 39.3781C32.325 39.2499 32.12 37.7069 32.1251 36.8457L32.1302 36.8405Z'
                fill={colors.onAccent}
              />
            </svg>
          </div>
          <Badge>나</Badge>
          {/* 왕관 */}
          {gameEnd && <Crown src={crown} alt='' />}
        </Avatar>
        <Caption>디톡스 수행시간</Caption>
        <Value>05시간00분</Value>
      </Half>
      {/* VS */}
      <VsBadge>VS</VsBadge>
      {/* 상대방 */}
      <Half $side='other'>
        <Avatar>
          <svg
            width='56'
            height='57'
            viewBox='0 0 56 57'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_799_3763)'>
              <path
                d='M28.0656 56.6233C43.5636 56.6233 56.1272 44.0597 56.1272 28.5617C56.1272 13.0636 43.5636 0.5 28.0656 0.5C12.5675 0.5 0.00390625 13.0636 0.00390625 28.5617C0.00390625 44.0597 12.5675 56.6233 28.0656 56.6233Z'
                fill={colors.bg}
              />
              <mask
                id='mask0_799_3763'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='57'
                height='57'
              >
                <path
                  d='M28.0656 56.6233C43.5636 56.6233 56.1272 44.0597 56.1272 28.5617C56.1272 13.0636 43.5636 0.5 28.0656 0.5C12.5675 0.5 0.00390625 13.0636 0.00390625 28.5617C0.00390625 44.0597 12.5675 56.6233 28.0656 56.6233Z'
                  fill='white'
                />
              </mask>
              <g mask='url(#mask0_799_3763)'>
                <path
                  d='M7.93555 50.6118C7.93555 50.6118 9.09151 14.2734 37.3433 14.2734C65.595 14.2734 60.5704 58.3953 60.5704 58.3953L28.5066 62.9729L7.93555 50.6066'
                  fill={colors.textSubtle}
                />
                <mask
                  id='mask1_799_3763'
                  maskUnits='userSpaceOnUse'
                  x='7'
                  y='14'
                  width='54'
                  height='49'
                >
                  <path
                    d='M7.93555 50.6118C7.93555 50.6118 9.09151 14.2734 37.3433 14.2734C65.595 14.2734 60.5704 58.3953 60.5704 58.3953L28.5066 62.9729L7.93555 50.6066'
                    fill='white'
                  />
                </mask>
                <g mask='url(#mask1_799_3763)'>
                  <path
                    d='M23.2051 18.203L29.9456 19.6107L32.3192 17.7612L32.3963 19.436L36.4807 19.6107L37.1332 17.9821L37.6315 19.6724L42.6098 19.3949L42.7177 17.5403L45.0297 19.3795L50.9482 19.1586L42.4968 11.668L32.2678 11.7759L25.4348 16.9237'
                    fill={colors.surfaceRaised}
                  />
                </g>
              </g>
              <path
                d='M29.5563 32.3587C30.3792 32.3587 31.0462 31.6917 31.0462 30.8688C31.0462 30.046 30.3792 29.3789 29.5563 29.3789C28.7335 29.3789 28.0664 30.046 28.0664 30.8688C28.0664 31.6917 28.7335 32.3587 29.5563 32.3587Z'
                fill={colors.onAccent}
              />
              <path
                d='M36.1422 32.3587C36.9651 32.3587 37.6322 31.6917 37.6322 30.8688C37.6322 30.046 36.9651 29.3789 36.1422 29.3789C35.3194 29.3789 34.6523 30.046 34.6523 30.8688C34.6523 31.6917 35.3194 32.3587 36.1422 32.3587Z'
                fill={colors.onAccent}
              />
              <path
                d='M29.5547 35.6621C30.0993 36.4071 30.8391 37.2394 31.4351 37.0852C32.2417 36.8746 32.2673 35.3076 32.74 35.3076C33.2538 35.3076 33.4182 37.2085 34.1118 37.3113C34.5793 37.3781 35.1393 36.4379 35.6736 35.1895'
                stroke={colors.onAccent}
                strokeMiterlimit='10'
                strokeLinecap='round'
              />
              <path
                d='M20.0448 38.9295C22.0339 38.9295 23.6463 37.3171 23.6463 35.328C23.6463 33.339 22.0339 31.7266 20.0448 31.7266C18.0558 31.7266 16.4434 33.339 16.4434 35.328C16.4434 37.3171 18.0558 38.9295 20.0448 38.9295Z'
                fill={colors.surfaceRaised}
              />
              <path
                d='M45.1835 38.6424C47.1725 38.6424 48.785 37.03 48.785 35.0409C48.785 33.0519 47.1725 31.4395 45.1835 31.4395C43.1945 31.4395 41.582 33.0519 41.582 35.0409C41.582 37.03 43.1945 38.6424 45.1835 38.6424Z'
                fill={colors.surfaceRaised}
              />
              <path
                d='M36.9429 14.017C39.2327 14.017 41.089 12.3885 41.089 10.3796C41.089 8.37072 39.2327 6.74219 36.9429 6.74219C34.6531 6.74219 32.7969 8.37072 32.7969 10.3796C32.7969 12.3885 34.6531 14.017 36.9429 14.017Z'
                fill={colors.surfaceRaised}
              />
              <path
                d='M38.768 13.5332H35.1152C34.8768 13.5332 34.6836 13.7264 34.6836 13.9648V14.0727C34.6836 14.311 34.8768 14.5042 35.1152 14.5042H38.768C39.0063 14.5042 39.1996 14.311 39.1996 14.0727V13.9648C39.1996 13.7264 39.0063 13.5332 38.768 13.5332Z'
                fill={colors.bg}
              />
            </g>
            <defs>
              <clipPath id='clip0_799_3763'>
                <rect
                  width='56'
                  height='56'
                  fill='white'
                  transform='translate(0.00390625 0.5)'
                />
              </clipPath>
            </defs>
          </svg>
        </Avatar>
        <Caption>디톡스 수행시간</Caption>
        <Value>05시간00분</Value>
      </Half>
    </Wrapper>
  );
}
