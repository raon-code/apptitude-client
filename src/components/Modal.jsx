import image from '@/Design2.png';

export default function Modal({ openModal, closeModal }) {
  return (
    <div className={openModal ? 'flex fixed bottom-0' : 'hidden'}>
      <div className=' h-screen w-screen bg-[#050409] opacity-[0.8]'></div>
      <div className='flex flex-col w-full bg-[#28272B] h-fit absolute bottom-0 text-white pt-[32px] rounded-t-[32px] text-center pb-[40px]'>
        <div className='flex flex-col font-bold text-[24px] leading-[30px] items-center gap-[4px]'>
          <span>김수한무님</span>
          <span>대결이 취소되었어요!</span>
        </div>
        <div className='mt-[14px] text-[20px] font-medium text-[#BEBDC4] leading-[26px]'>
          <span>다른 친구와 대결은 어떠세요?</span>
        </div>
        <div className='flex justify-center mt-[24px] p-[15px]'>
          <img src={image} alt='' className='w-[90px] h-[90px]' />
        </div>
        <div className='flex flex-col px-[24px] mt-[32px]'>
          <button className='text-[#050409] bg-[#04C357] text-[22px] font-bold leading-[28px] py-[16px] rounded-[36px]'>
            대결방 다시 만들기
          </button>
          <button
            onClick={closeModal}
            className='text-[#6E7487] text-[22px] font-medium leading-[28px] mt-[20px]'
          >
            나중에 하기
          </button>
        </div>
      </div>
    </div>
  );
}
