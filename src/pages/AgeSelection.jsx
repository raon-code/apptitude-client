import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Back from '@/components/Back';

const ageCategories = [
  { id: '10미만', label: '10대 미만', circleLabel: '10▼' },
  { id: '10대', label: '10대', circleLabel: '10~' },
  { id: '20대', label: '20대', circleLabel: '20~' },
  { id: '30대', label: '30대', circleLabel: '30~' },
  { id: '40대', label: '40대', circleLabel: '40~' },
  { id: '50이상', label: '50대 이상', circleLabel: '50▲' }
];

const AgeCategoryButton = ({ label, circleLabel, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center cursor-pointer p-4 rounded-lg ${
      isSelected ? 'border-2 border-[#F7573E]' : ''
    } bg-[#28272B] w-36 h-15`}
  >
    <div
      className={`w-12 h-12 flex items-center justify-center bg-black rounded-full ${
        isSelected ? 'text-[#F7573E]' : 'text-[#888888]'
      }`}
    >
      <span>{circleLabel}</span>
    </div>
    <span
      className={`mt-2 ${isSelected ? 'text-[#F7573E]' : 'text-[#888888]'}`}
    >
      {label}
    </span>
  </div>
);

const AgeSelection = () => {
  const [selectedAgeCategory, setSelectedAgeCategory] = useState(null);
  const navigate = useNavigate();

  const handleAgeCategorySelect = (category) => {
    setSelectedAgeCategory(selectedAgeCategory === category ? null : category);
  };

  const handleStartClick = () => {
    if (selectedAgeCategory) {
      navigate('/NextStep');
    }
  };

  return (
    <div className='flex flex-col items-center h-screen bg-black text-white'>
      <div className='flex justify-between items-center px-4 py-2 w-full'>
        <Back backClick={() => navigate('/CategorySelection')} />
        <h2 className='ml-7 mt-2 mb-2 text-xl font-bold'>회원가입</h2>
        <svg width='40' height='40'>
          <circle
            cx='20'
            cy='20'
            r='12'
            stroke='green'
            strokeWidth='2'
            fill='#28272B'
            strokeDasharray='75.36'
            strokeDashoffset='0'
            transform='rotate(-90 20 20)'
          />
          <text x='16.2' y='24' fontSize='13' fill='white'>
            4
          </text>
        </svg>
      </div>
      <h1 className='mt-12 mb-10 text-lg'>연령대가 어떻게 되세요?</h1>
      <div className='grid grid-cols-2 gap-4 mt-2 max-w-screen-md'>
        {ageCategories.map((category) => (
          <AgeCategoryButton
            key={category.id}
            label={category.label}
            circleLabel={category.circleLabel}
            isSelected={selectedAgeCategory === category.id}
            onClick={() => handleAgeCategorySelect(category.id)}
          />
        ))}
      </div>
      <div className='flex justify-center fixed bottom-8 w-full px-4'>
        <Button
          clickEvent={handleStartClick}
          step='시작하기'
          confirm={!!selectedAgeCategory}
        />
      </div>
    </div>
  );
};

export default AgeSelection;
