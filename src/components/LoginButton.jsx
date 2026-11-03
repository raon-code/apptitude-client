import { Link } from 'react-router-dom';
import image from '@/kakao_logo.png';

export default function LoginButton({ toLink, title }) {
  return (
    <div className='flex w-full px-[16px] absolute bottom-[6px]'>
      <Link
        to={toLink}
        className='w-full bg-[#F8E049] text-[#050409] text-center text-[22px] py-[18px] rounded-[36px] font-bold flex items-center justify-center'
      >
        <img src={image} alt='Kakao Logo' className='mx-2' />
        {title}
      </Link>
    </div>
  );
}
