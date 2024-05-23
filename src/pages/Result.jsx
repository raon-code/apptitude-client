import Back from '@/components/Back';
import BattleResult from '@/components/BattleResult';
import Button from '@/components/Button';
import Nav from '@/components/Nav';
import NavButton from '@/components/NavButton';
import Push from '@/components/Push';
import VS from '@/components/VS';
import { useLocation } from 'react-router-dom';

export default function Result() {
  const type = useLocation().state.type;
  console.log(type);
  function backClick() {
    window.history.back();
  }
  return (
    <>
      <Back title={'대결결과'} backClick={backClick} />
      <div className='px-[16px]'>
        <VS gameEnd={true} />
        <BattleResult type={type} />
        {type === 'victory' ? (
          <>
            <div className='text-[#BEBDC4] flex items-center justify-center mt-[16px]'>
              친구에게 보상 완료를 요청하세요!
            </div>
            <div className='mt-[24px] flex justify-around text-[22px] leading-[28px] font-bold gap-[8px]'>
              <button className='text-[#FEFEFE] bg-[#333333] py-[16px] px-[20px] rounded-[36px]'>
                보상완료
              </button>
              <button className='text-[#050409] bg-[#04C357] py-[16px] px-[20px] rounded-[36px]'>
                상대방 콕 찌르기
              </button>
            </div>
          </>
        ) : type === 'defeat' ? (
          <>
            <div className='text-[#BEBDC4] flex items-center justify-center mt-[16px]'>
              친구에게 대결 보상을 요청하세요!
            </div>
            <div className='flex items-center justify-center mt-[16px]'>
              <button className='bg-[#04C357] py-[16px] rounded-[36px] w-full text-[#050409] text-[22px] font-bold leading-[28px]'>
                상대방 콕 찌르기
              </button>
            </div>
          </>
        ) : null}
      </div>
      <Nav />
      <Push />
    </>
  );
}
