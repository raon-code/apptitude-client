import Slider from 'react-slick';
import image1 from '@/slide1.png';
import image2 from '@/slide2.png';
import image3 from '@/slide3.png';

export default function OnboardingSlides({ settings, setCurrentSlide }) {
  const updatedSettings = {
    ...settings,
    afterChange: (current) => setCurrentSlide(current)
  };

  return (
    <div className='h-full w-full'>
      <Slider {...updatedSettings}>
        <div className='w-full my-[80px] flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <img src={image1} alt='Slide 1' className='w-1/2 h-auto' />
            <h2 className='text-[#FEFEFE] text-[22px] mt-4 text-center'>
              디지털 디톡스, <br /> 혼자하기 어려우시죠?
            </h2>
          </div>
        </div>
        <div className='w-full my-[80px] flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <img src={image2} alt='Slide 2' className='w-1/2 h-auto' />
            <h2 className='text-[#FEFEFE] text-[22px] mt-4 text-center'>
              친구와 1:1로 경쟁하며 <br /> 디톡스를 해보세요!
            </h2>
          </div>
        </div>
        <div className='w-full my-[80px] flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <img src={image3} alt='Slide 3' className='w-1/2 h-auto' />
            <h2 className='text-[#FEFEFE] text-[22px] mt-4 text-center'>
              가벼운 내기 상품도 건다면, <br /> 더 재미있겠죠?
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}
