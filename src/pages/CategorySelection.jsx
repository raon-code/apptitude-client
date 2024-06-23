import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Back from '@/components/Back';
import studentImage from '../assets/student.png';
import govImage from '../assets/gov.png';
import jobSeekerImage from '../assets/job_seeker.png';
import workerImage from '../assets/worker.png';
import othersImage from '../assets/others.png';
import selectedStudentImage from '../assets/sstudent.png';
import selectedGovImage from '../assets/sgov.png';
import selectedJobSeekerImage from '../assets/sjob_seeker.png';
import selectedWorkerImage from '../assets/sworker.png';
import selectedOthersImage from '../assets/sothers.png';

const categories = [
  {
    id: '학생',
    label: '학생',
    image: studentImage,
    selectedImage: selectedStudentImage
  },
  {
    id: '공시생',
    label: '공시생',
    image: govImage,
    selectedImage: selectedGovImage
  },
  {
    id: '취준생',
    label: '취준생',
    image: jobSeekerImage,
    selectedImage: selectedJobSeekerImage
  },
  {
    id: '직장인',
    label: '직장인',
    image: workerImage,
    selectedImage: selectedWorkerImage
  }
];

const othersCategory = {
  id: '그외',
  label: '그외',
  image: othersImage,
  selectedImage: selectedOthersImage
};

const CategoryButton = ({
  label,
  image,
  selectedImage,
  isSelected,
  onClick
}) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center cursor-pointer p-4 rounded-lg ${
      isSelected ? 'border-2 border-[#FECC54]' : ''
    } bg-[#28272B] w-[156px] h-[124px]`}
  >
    <div className='w-20 h-20 flex items-center justify-center mb-4'>
      <img
        src={isSelected ? selectedImage : image}
        alt={label}
        className='w-16 h-16 object-cover'
      />
    </div>
    <span className={`${isSelected ? 'text-[#FECC54]' : ''}`}>{label}</span>
  </div>
);

export default function CategorySelection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleNextClick = () => {
    if (selectedCategory) {
      navigate('/AgeSelection');
    }
  };

  return (
    <div className='flex flex-col items-center h-screen bg-black text-white'>
      <div className='flex justify-between items-center px-4 py-2 w-full'>
        <Back backClick={() => navigate('/GenderSelection')} />
        <h2 className='ml-7 mt-2 mb-2 text-xl font-bold'>회원가입</h2>
        <svg width='40' height='40'>
          <circle
            cx='20'
            cy='20'
            r='12'
            stroke='green'
            strokeWidth='2'
            fill='#28272B'
            strokeDasharray='56.52'
            strokeDashoffset='0'
            transform='rotate(-90 20 20)'
          />
          <text x='16.2' y='24' fontSize='13' fill='white'>
            3
          </text>
        </svg>
      </div>

      <h1 className='mt-6 mb-4 text-lg'>소속을 알려주세요</h1>
      <div className='grid grid-cols-2 gap-3 mt-4 max-w-screen-md'>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            label={category.label}
            image={category.image}
            selectedImage={category.selectedImage}
            isSelected={selectedCategory === category.id}
            onClick={() => handleCategorySelect(category.id)}
          />
        ))}
      </div>
      <div className='mt-4'>
        <CategoryButton
          key={othersCategory.id}
          label={othersCategory.label}
          image={othersCategory.image}
          selectedImage={othersCategory.selectedImage}
          isSelected={selectedCategory === othersCategory.id}
          onClick={() => handleCategorySelect(othersCategory.id)}
        />
      </div>
      <div className='flex justify-center fixed bottom-8 w-full px-4'>
        <Button
          clickEvent={handleNextClick}
          step='다음'
          confirm={!!selectedCategory}
        />
      </div>
    </div>
  );
}
