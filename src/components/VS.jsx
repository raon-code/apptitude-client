export default function VS() {
  return (
    <div className='flex mt-[24px] w-full gap-[2px] relative'>
      {/* 나 */}
      <div className='h-[176px] w-full bg-[#28272B] rounded-l-[50px] flex flex-col items-center justify-center gap-[8px]'>
        <div className='w-[52px] h-[52px] bg-[#D9D9D9] rounded-full relative'>
          <div className='w-[24px] h-[24px] rounded-full bg-[#050409] absolute left-[-8px] top-[0px] flex items-center justify-center'>
            <span className='text-[#FFFFFF] text-[12px] font-medium'>나</span>
          </div>
        </div>
        <span className='text-[#BEBDC4] text-[14px] font-medium'>지금까지</span>
        <span className='text-[#FFFFFF] text-[16px] font-medium'>
          05시간00분
        </span>
      </div>
      {/* VS */}
      <div className='absolute bg-[#050409] w-[52px] h-[52px] rounded-full flex items-center justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <span className='text-[#FFFFFF] text-[16px] font-medium'>VS</span>
      </div>
      {/* 상대방 */}
      <div className='h-[176px] w-full bg-[#28272B] rounded-r-[50px] flex flex-col items-center justify-center gap-[8px]'>
        <div className='w-[52px] h-[52px] bg-[#D9D9D9] rounded-full'></div>
        <span className='text-[#BEBDC4] text-[14px] font-medium'>지금까지</span>
        <span className='text-[#FFFFFF] text-[16px] font-medium'>
          05시간00분
        </span>
      </div>
    </div>
  );
}
