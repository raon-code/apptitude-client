import styled from 'styled-components';

const Header = styled.div`
  background-color: var(--background_color, #050409);
  color: rgba(254, 254, 254, 0.98);
  padding: 8px 16px;
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: space-between;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.5px;
  border: none !important;
`;

const Status = styled.div`
  background-image: ${(props) =>
    `url(${props.statusImage})`}; // background-image에 props를 이용하여 동적으로 URL 설정
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px;
  background-position: center;
`;

export default function Back({ title, backClick, statusImage }) {
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
      <Status statusImage={statusImage} /> {/* statusImage를 props로 전달 */}
    </Header>
  );
}
