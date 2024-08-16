import { useEffect, useRef, useState } from 'react';
import Nav from '@/components/Nav';
import NavButton from '@/components/NavButton';
import VS from '@/components/VS';
import Chart from '@/components/Chart';
import BattleMore from '@/components/BattleMore';
import CenterModal from '@/components/CenterModal';

export default function Battle() {
  const containerRef = useRef(null);
  const [isBattle, setIsBattle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [isContractOpen, setIsContractOpen] = useState(false);
  const closeMore = () => setIsOpen(false);
  // const viewContract = () => {
  //   setIsContractOpen(true);
  // };
  useEffect(() => {
    // 진행중인 배틀이 있는 경우
    setIsBattle(true);
  }, []);

  alert(process.env.NODE_ENV);

  return (
    <div className=''>
      <div className={isOpen ? 'blur-sm' : ''}>
        <div className='h-full w-full overflow-hidden flex flex-col items-center px-[16px]'>
          {!isBattle ? (
            <>
              <div className='w-full h-[519px] bg-[#D9D9D9] mt-[34px]'></div>
              <NavButton toLink={'/makeBattle'} title={'배틀 만들기'} />
            </>
          ) : (
            <div className='w-screen h-screen bg-[#050409] overflow-scroll'>
              {/* 제목 */}
              <div className='flex justify-center items-center relative'>
                <div className='flex items-center gap-2 py-[8px]'>
                  <span className='text-[#FEFEFE] opacity-[0.98] font-medium text-[20px]'>
                    더이상 이렇게 살지 말자
                  </span>
                  <span className='text-[#04C357]'>D-4</span>
                </div>
                <div
                  className='absolute right-[26px]'
                  onClick={() => setIsOpen(true)}
                >
                  <svg
                    width='4'
                    height='21'
                    viewBox='0 0 4 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 10.5C4 11.6046 3.10457 12.5 2 12.5C0.895431 12.5 3.49691e-07 11.6046 3.49691e-07 10.5C3.49691e-07 9.39543 0.895431 8.5 2 8.5C3.10457 8.5 4 9.39543 4 10.5Z'
                      fill='#FAFAFA'
                    />
                    <path
                      d='M4 2.5C4 3.60457 3.10457 4.5 2 4.5C0.895431 4.5 6.99382e-07 3.60457 6.99382e-07 2.5C6.99382e-07 1.39543 0.895431 0.5 2 0.5C3.10457 0.5 4 1.39543 4 2.5Z'
                      fill='#FAFAFA'
                    />
                    <path
                      d='M4 18.5C4 19.6046 3.10457 20.5 2 20.5C0.89543 20.5 0 19.6046 0 18.5C0 17.3954 0.89543 16.5 2 16.5C3.10457 16.5 4 17.3954 4 18.5Z'
                      fill='#FAFAFA'
                    />
                  </svg>
                </div>
              </div>
              <div className='px-[16px] pb-[86px] flex flex-col items-center justify-center'>
                {/* 나 vs 상대방 */}
                <VS />
                {/* 쿡찌르기 */}
                <div className='mt-[16px] h-[55px] w-full bg-[#28272B] rounded-[30px] flex items-center justify-between pl-[24px] pr-[8px]'>
                  <span className='text-[#FFFFFF] text-[16px] font-medium'>
                    상대방을 쿡 찔러보세요!
                  </span>
                  <button className='bg-[#04C357] text-[#0F0E14] text-[16px] font-medium px-[10px] py-[8px] rounded-[30px]'>
                    쿡 찌르기
                  </button>
                </div>
                {/* 현황 */}
                <div className='overflow-hidden mt-[16px] h-[392px] w-full bg-[#28272B] rounded-[30px] py-[32px] relative'>
                  <div className='px-[24px] flex flex-col gap-[8px] pb-[16px]'>
                    <span className='text-[#BEBDC4] text-[16px] font-medium'>
                      누적 디톡스 현황
                    </span>
                    <div className='flex justify-between items-center'>
                      <span className='text-[24px] font-medium text-[#FFFFFF]'>
                        달성률 80%
                      </span>
                      <div className='flex gap-[8px]'>
                        <div className='w-[32px] h-[32px] rounded-full bg-[#04C357] flex justify-center items-center'>
                          <span className='text-[12px] font-medium text-[#050409]'>
                            me
                          </span>
                        </div>
                        <div className='w-[32px] h-[32px] rounded-full bg-[#6E7487] flex justify-center items-center'>
                          <span className='text-[12px] font-medium text-[#0F0E14]'>
                            other
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='flex'>
                      <span className='text-[#D83E3E] text-[16px] font-medium'>
                        40%p
                      </span>
                      <svg
                        width='12'
                        height='13'
                        viewBox='0 0 12 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M2 8.5L4 6.5L6 8.5L9 5.5' stroke='#D83E3E' />
                        <path d='M7 5.5H9V7.5' stroke='#D83E3E' />
                      </svg>
                      <span className='text-[#BEBDC4] text-[16px] font-medium'>
                        (전날대비)
                      </span>
                    </div>
                  </div>
                  <Chart containerRef={containerRef} />
                </div>
              </div>
            </div>
          )}
        </div>
        <Nav />
      </div>
      <BattleMore isOpen={isOpen} closeMore={closeMore} />
      {/* <CenterModal
        isContractOpen={isContractOpen}
        viewContract={viewContract}
      /> */}
    </div>
  );
}
