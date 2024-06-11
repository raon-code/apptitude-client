import { useState } from 'react';
import CenterModal from './CenterModal';
import Contract from './Contract';
import Button from './Button';

export default function BattleMore({ isOpen, closeMore }) {
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isDeclareSurrender, setIsDeclareSurrender] = useState(false);
  const viewContract = () => {
    setIsContractOpen(true);
    console.log('click');
  };
  const closeContract = () => {
    setIsContractOpen(false);
  };
  const openCenterModal = () => {
    setIsDeclareSurrender(true);
  };
  const closeCenterModal = () => {
    setIsDeclareSurrender(false);
  };
  return (
    <div>
      <div className={isOpen ? 'flex fixed bottom-0' : 'hidden'}>
        <div className='bg-[#000000] opacity-[80%] w-screen h-screen '></div>
        <div
          className={
            isDeclareSurrender || isContractOpen
              ? 'hidden'
              : 'w-screen fixed bottom-0 px-[16px] pb-[32px]'
          }
        >
          <div className='flex flex-col'>
            <div
              onClick={viewContract}
              className='py-[16px] bg-[#28272B] opacity-[100%] text-[#BEBDC4] leading-[28px] w-full flex justify-center items-center rounded-t-[20px] font-bold text-[22px]'
            >
              계약서보기
            </div>
            <div
              onClick={openCenterModal}
              className='mt-[1px] py-[16px] bg-[#28272B] text-[#BEBDC4] leading-[28px] w-full flex justify-center items-center rounded-b-[20px] font-bold text-[22px]'
            >
              항복선언하기
            </div>
            <div
              onClick={closeMore}
              className='mt-[16px] py-[16px] w-full rounded-[36px] bg-[#04C357] text-[#050409] leading-[28px] flex justify-center items-center font-bold text-[22px]'
            >
              나가기
            </div>
          </div>
        </div>
        {isContractOpen && (
          <>
            <div
              className={
                isContractOpen
                  ? 'w-full h-screen absolute px-[16px] flex items-end pb-[120px]'
                  : 'hidden'
              }
            >
              <Contract isContractOpen={isContractOpen} />
            </div>
            <Button step={'닫기'} confirm={true} clickEvent={closeContract} />
          </>
        )}
        <CenterModal
          isDeclareSurrender={isDeclareSurrender}
          closeCenterModal={closeCenterModal}
        />
      </div>
    </div>
  );
}
