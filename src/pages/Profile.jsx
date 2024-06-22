import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Cropper from 'react-easy-crop';
import Button from '@/components/Button';
import Back from '@/components/Back';
import profileIcon from '../assets/Profile.png';
import cameraIcon from '../assets/cameraIcon.png';

export default function Profile() {
  const [nickname, setNickname] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [profileImage, setProfileImage] = useState(profileIcon);
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const navigate = useNavigate();

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    setConfirm(e.target.value.length > 0);
  };

  const handleNextClick = () => {
    if (confirm) {
      navigate('/GenderSelection');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = url;
    });

  const getCroppedImg = async (imageSrc, crop) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(URL.createObjectURL(blob));
      }, 'image/jpeg');
    });
  };

  const handleCropSave = async () => {
    const croppedImageUrl = await getCroppedImg(src, croppedArea);
    setProfileImage(croppedImageUrl);
    setSrc(null);
  };

  return (
    <div className='flex flex-col items-center h-screen bg-black text-white'>
      <div className='flex justify-between items-center px-4 py-2 w-full'>
        <Back backClick={() => navigate('/')} />
        <h2 className='ml-7 mt-2 mb-2 text-xl font-bold'>회원가입</h2>
        <div className='relative w-6 h-6'>
          <div className='absolute inset-0 flex items-center justify-center border-r-2 border-green-500 rounded-full'>
            <span className='text-sm text-white'>1</span>
          </div>
        </div>
      </div>

      <div className='mt-8 mb-8 text-white text-xl font-weight:500'>
        프로필을 작성해주세요!
      </div>
      <div className='mt-8 mb-8 relative'>
        <div className='w-32 h-32 rounded-full flex items-center justify-center'>
          <img
            src={profileImage}
            alt='Profile Icon'
            className='w-32 h-32 rounded-full'
          />
        </div>
        <div className='absolute bottom-0 right-0'>
          <label htmlFor='imageUpload' className='cursor-pointer'>
            <img src={cameraIcon} alt='Camera Icon' />
          </label>
          <input
            id='imageUpload'
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className='hidden'
          />
        </div>
      </div>

      {src && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative w-11/12 h-5/6 bg-white rounded-lg'>
            <Cropper
              image={src}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <div className='absolute bottom-4 left-4 right-4 flex justify-between'>
              <button
                onClick={() => setSrc(null)}
                className='px-4 py-2 bg-gray-500 text-white rounded'
              >
                취소
              </button>
              <button
                onClick={handleCropSave}
                className='px-4 py-2 bg-blue-500 text-white rounded'
              >
                선택
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='mt-[14px] w-[328px]'>
        <div className='text-[#BEBDC4] ml-1 mb-4'>닉네임</div>
        <input
          type='text'
          placeholder='이름을 입력해 주세요!'
          value={nickname}
          onChange={handleNicknameChange}
          className='w-full py-3 px-4 rounded-2xl text-lg bg-[#28272B] text-[#6E7487] outline-none'
        />
      </div>
      <Button clickEvent={handleNextClick} step='다음' confirm={confirm} />
    </div>
  );
}
