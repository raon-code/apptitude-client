export default function CenterModal({ modalType }) {
  console.log(modalType);
  return (
    <div
      className={
        modalType === 'declareSurrender'
          ? 'w-screen h-screen fixed flex flex-col items-center'
          : 'hidden'
      }
    >
      <div className='w-full h-full flex items-center justify-center px-[16px]'>
        <div className='bg-[#28272B] py-[32px] w-full flex flex-col rounded-[30px]'>
          <div className='flex items-center justify-center text-center leading-[24px] text-[18px] text-white'>
            정말 대결을 <br />
            포기하시겠어요?
          </div>
          <div className='flex mt-[40px] justify-between px-[34.5px] items-center'>
            <div className='font-medium text-[16px] text-[#BEBDC4] leading-[22px] bg-[#050409] px-[10px] py-[8px] rounded-[30px]'>
              네, 포기할래요
            </div>
            <div className='text-[#0F0E14] font-medium text-[16px] leading-[22px] bg-[#04C357] px-[10px] py-[8px] rounded-[30px]'>
              아뇨, 계속할래요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
