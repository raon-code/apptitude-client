import Nav from '@/components/Nav';
import Title from '@/components/Title';
import VS from '@/components/VS';
import { cls } from '@/libs/utils';
import { useEffect, useState } from 'react';

export default function WaitBattle() {
  const [isWorning, setIsWorning] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  let time = 14;
  useEffect(() => {
    if (time < 15) {
      setIsWorning(true);
    } else {
      setIsWorning(false);
    }

    setProgressWidth(Math.floor((time / 30) * 100));
    console.log(Math.floor((time / 30) * 100));
    console.log((time / 30) * 100);
  }, [time]);

  return (
    <div>
      <div className='px-[16px]'>
        <Title title={'친구 기다리는 중'} />
        <VS />
        {/* 프로그레스바 */}
        <div className='flex flex-col  mt-[24px] mx-[40px]'>
          <div className='flex justify-between'>
            <span className='text-[#BEBDC4]'>대결방 유효 시간</span>
            <div>
              <span className={isWorning ? 'text-[#F2AE30]' : 'text-[#04C357]'}>
                {time}분 남음
              </span>
              <span className='text-[#6E7487]'>/30분</span>
            </div>
          </div>
          <div className='w-full bg-[#28272B] rounded-[16px] h-[8px] mt-[8px]'>
            <div
              className={cls(
                `h-[8px] rounded-[16px] w-[53%]`,
                isWorning ? 'bg-[#F2AE30]' : 'bg-[#04C357]'
              )}
            ></div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}
