import styled from 'styled-components';

const Header = styled.div`
  background-color: var(--background_color, #050409);
  color: rgba(254, 254, 254, 0.98);
  padding: 8px 16px;
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: space-between;
`;

const Status = styled.div`
  position: absolute;
  right: 50px; /* 오른쪽으로 16px 이동 */
  display: flex;
  justify-content: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%;
`;

export default function Back({ title, backClick }) {
  return (
    <Header>
      <div onClick={backClick}>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='main-grid-item-icon'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          >
            <line x1='19' x2='5' y1='12' y2='12' />
            <polyline points='12 19 5 12 12 5' />
          </svg>
        </button>
      </div>
      {title && <span>{title}</span>}
      <SvgContainer>
        <Status>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='18'
            viewBox='0 0 12 18'
            fill='none'
          >
            <circle cx='10' cy='10.5' r='10' fill='#28272B' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='18'
              viewBox='0 0 12 18'
              fill='none'
            >
              <mask
                id='path-1-outside-1_3_101'
                maskUnits='userSpaceOnUse'
                x='-9.17939e-07'
                y='0.499999'
                width='12'
                height='18'
                fill='black'
              >
                <rect
                  fill='white'
                  x='-9.17939e-07'
                  y='0.499999'
                  width='12'
                  height='18'
                />
                <path d='M0.999999 1.5C2.75537 1.5 4.47981 1.96206 6 2.83975C7.52019 3.71743 8.78257 4.97981 9.66025 6.5C10.5379 8.02019 11 9.74463 11 11.5C11 13.2554 10.5379 14.9798 9.66025 16.5L1 11.5L0.999999 1.5Z' />
              </mask>
              <path
                d='M0.999999 1.5C2.75537 1.5 4.47981 1.96206 6 2.83975C7.52019 3.71743 8.78257 4.97981 9.66025 6.5C10.5379 8.02019 11 9.74463 11 11.5C11 13.2554 10.5379 14.9798 9.66025 16.5L1 11.5L0.999999 1.5Z'
                stroke='#04C357'
                strokeWidth='2'
                mask='url(#path-1-outside-1_3_101)'
              />
            </svg>
          </svg>
        </Status>
      </SvgContainer>
    </Header>
  );
}
