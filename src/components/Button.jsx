import { styled } from 'styled-components';
import { cls } from '@/libs/utils';

export default function Button({ clickEvent, step, confirm }) {
  return (
    <div className='flex w-full absolute bottom-[32px] px-[16px]'>
      <button
        onClick={clickEvent}
        className={cls(
          'py-[18px] w-full font-bold text-[22px] rounded-[36px]',
          confirm
            ? 'bg-[#04C357] text-[#050409]'
            : 'bg-[#050409] text-[#04C357]'
        )}
      >
        {step}
      </button>
    </div>
  );
}
