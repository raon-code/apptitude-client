import Contract from '@/components/Contract';
import Modal from '@/components/Modal';
import Nav from '@/components/Nav';
import Title from '@/components/Title';
import VS from '@/components/VS';
import { cls } from '@/libs/utils';
import { useEffect, useState } from 'react';

export default function WaitBattle() {
  const [isWorning, setIsWorning] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [time, setTime] = useState(30);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setTime(29);
  }, []);
  useEffect(() => {
    if (time < 16) {
      setIsWorning(true);
    } else {
      setIsWorning(false);
    }

    setProgressWidth(Math.floor((time / 30) * 100));
  }, [time]);
  const cancleBattle = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <div
        className={cls(
          'px-[16px] h-screen w-screen overflow-scroll pb-[86px]',
          openModal ? 'blur-sm' : ''
        )}
      >
        <Title title={'친구 기다리는 중'} />
        <VS />
        {/* 프로그레스바 */}
        <div className='flex flex-col  mt-[24px] mx-[24px]'>
          <div className='flex justify-between'>
            <span className='text-[#BEBDC4] text-[16px] font-medium'>
              대결방 유효 시간
            </span>
            <div>
              <span
                className={cls(
                  'font-medium text-[16px]',
                  isWorning ? 'text-[#F2AE30]' : 'text-[#04C357]'
                )}
              >
                {time}분 남음
              </span>
              <span className='text-[#6E7487] text-[14px] font-medium'>
                /30분
              </span>
            </div>
          </div>
          <div className='w-full bg-[#28272B] rounded-[16px] h-[8px] mt-[8px]'>
            <div
              className={cls(
                `h-[8px] rounded-[16px]`,
                isWorning ? 'bg-[#F2AE30]' : 'bg-[#04C357]'
              )}
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>
        {/* 대결계약서 */}
        <Contract type={'waitBattle'} />
        <div className='mt-[24px] flex justify-between text-[22px] leading-[28px] font-bold'>
          <button
            onClick={cancleBattle}
            className='text-[#FEFEFE] bg-[#333333] px-[20px] py-[16px] rounded-[36px]'
          >
            대결취소
          </button>
          <button className='text-[#050409] bg-[#04C357] px-[18.5px] py-[16px] rounded-[36px]'>
            카톡으로 초대하기
          </button>
        </div>
      </div>
      <Nav />
      <Modal openModal={openModal} closeModal={closeModal} />
    </div>
  );
}
