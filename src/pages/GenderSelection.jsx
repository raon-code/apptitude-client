import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Back from '@/components/Back';
import maleImage from '../assets/male.png';
import femaleImage from '../assets/female.png';
import cfemaleImage from '../assets/cfemale.png';
import cmaleImage from '../assets/cmale.png';

const genderImages = {
  남자: { normal: maleImage, confirmed: cmaleImage },
  여자: { normal: femaleImage, confirmed: cfemaleImage }
};

const GenderOption = ({ gender, selectedGender, onClick }) => (
  <div
    className={`flex flex-col items-center cursor-pointer p-2 w-40 h-32 rounded-lg 
      ${
        selectedGender === gender
          ? 'border-2 border-green-500 bg-[#28272B]'
          : 'bg-[#28272B]'
      }
    `}
    onClick={() => onClick(gender)}
  >
    <div
      className={`w-16 h-16 rounded-full overflow-hidden flex items-center justify-center mb-2 
        ${selectedGender === gender ? 'bg-[#28272B]' : ''}
      `}
    >
      <img
        src={
          selectedGender === gender
            ? genderImages[gender].confirmed
            : genderImages[gender].normal
        }
        alt={gender}
        className='w-15 h-15 object-cover'
      />
    </div>
    <span
      className={
        selectedGender === gender
          ? 'text-green-500 text-sm'
          : 'text-[#888888] text-sm'
      }
    >
      {gender}
    </span>
  </div>
);

export default function GenderSelection() {
  const [selectedGender, setSelectedGender] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  const handleGenderSelect = (gender) => {
    if (selectedGender === gender) {
      setSelectedGender(null);
      setConfirm(false);
    } else {
      setSelectedGender(gender);
      setConfirm(true);
    }
  };

  const handleClick = () => {
    if (confirm) {
      navigate('/CategorySelection');
    }
  };

  return (
    <div className='flex flex-col items-center h-screen bg-black text-white'>
      <div className='flex justify-between items-center px-4 py-2 w-full'>
        <Back backClick={() => navigate('/Profile')} />
        <h2 className='ml-7 mt-2 mb-2 text-xl font-bold'>회원가입</h2>
        <svg width='40' height='40'>
          <circle
            cx='20'
            cy='20'
            r='12'
            stroke='green'
            strokeWidth='2'
            fill='#28272B'
            strokeDasharray='37.68'
            strokeDashoffset='0'
            transform='rotate(-90 20 20)'
          />
          <text x='16.2' y='24' fontSize='13' fill='white'>
            2
          </text>
        </svg>
      </div>

      <h1 className='mt-20 mb-10 text-xl'>성별이 어떻게 되세요?</h1>
      <div className='flex mt-10 space-x-4'>
        <GenderOption
          gender='남자'
          selectedGender={selectedGender}
          onClick={handleGenderSelect}
        />
        <GenderOption
          gender='여자'
          selectedGender={selectedGender}
          onClick={handleGenderSelect}
        />
      </div>
      <div className='flex justify-center absolute bottom-8 w-full px-4'>
        <Button clickEvent={handleClick} step='다음' confirm={confirm} />
      </div>
    </div>
  );
}
