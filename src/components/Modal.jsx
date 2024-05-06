import Button from '@/components/Button';
import image from '@/Design2.png';

export default function Modal() {
  return (
    <div className=''>
      <div className='flex flex-col w-full bg-[#28272B] h-fit absolute bottom-0 text-white pt-[32px] rounded-t-[32px] pb-[128px] text-center'>
        <div className='flex flex-col font-bold text-[24px] items-center gap-[4px]'>
          <span>김수한무님</span>
          <span>대결이 취소되었어요!</span>
        </div>
        <div className='mt-[14px] text-[20px] font-medium'>
          <span>다른 친구와 대결은 어떠세요?</span>
        </div>
        <div className='flex justify-center mt-[24px]'>
          <img src={image} alt='' />
        </div>
      </div>
      <Button step={'대결방 다시 만들기'} confirm={true} />
    </div>
  );
}
