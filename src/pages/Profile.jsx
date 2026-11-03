import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cropper from 'react-easy-crop';
import styled from 'styled-components';
import Back from '@/components/Back';
import Button from '@/components/Button';
import SignupProgress from '@/components/SignupProgress';
import { Content, Screen, Spacer } from '@/components/ui/Screen';
import { useSignup } from '@/features/signup/SignupContext';
import profileIcon from '@/assets/Profile.png';
import cameraIcon from '@/assets/cameraIcon.png';
import { colors, radius, space, typography } from '@/styles/tokens';

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', () =>
      reject(new Error('이미지 로드 실패'))
    );
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

const getCroppedImg = async (imageSrc, crop) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('크롭된 이미지를 만들 수 없습니다.'));
        return;
      }
      resolve(URL.createObjectURL(blob));
    }, 'image/jpeg');
  });
};

const releaseBlobUrl = (url) => {
  if (typeof url === 'string' && url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
};

const Prompt = styled.h1`
  margin-top: ${space(6)};
  text-align: center;
  font-size: ${typography.title.size};
  font-weight: ${typography.title.weight};
  letter-spacing: ${typography.title.letterSpacing};
  color: ${colors.text};
`;

const AvatarBlock = styled.div`
  position: relative;
  align-self: center;
  margin: ${space(8)} 0;
  width: 128px;
  height: 128px;
`;

const AvatarImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: ${radius.pill};
  object-fit: cover;
  background: ${colors.surface};
`;

const CameraLabel = styled.label`
  position: absolute;
  right: -${space(1)};
  bottom: -${space(1)};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radius.pill};
  background: ${colors.surface};
  cursor: pointer;
`;

const CameraIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const FileInput = styled.input`
  display: none;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space(3)};
`;

const FieldLabel = styled.span`
  padding-left: ${space(1)};
  font-size: ${typography.body.size};
  font-weight: ${typography.body.weight};
  letter-spacing: ${typography.body.letterSpacing};
  color: ${colors.textMuted};
`;

const NicknameInput = styled.input`
  width: 100%;
  padding: ${space(3)} ${space(4)};
  border: none;
  border-radius: ${radius.md};
  background: ${colors.surface};
  color: ${colors.text};
  font-size: ${typography.subtitle.size};
  font-weight: ${typography.subtitle.weight};
  letter-spacing: ${typography.subtitle.letterSpacing};
  outline: none;

  &::placeholder {
    color: ${colors.textSubtle};
  }
`;

const CropOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5, 4, 9, 0.85);
`;

const CropPanel = styled.div`
  position: relative;
  width: 92%;
  height: 80%;
  border-radius: ${radius.md};
  background: ${colors.surface};
  overflow: hidden;
`;

const CropStage = styled.div`
  position: absolute;
  inset: 0 0 72px;
`;

const CropActions = styled.div`
  position: absolute;
  right: ${space(4)};
  bottom: ${space(4)};
  left: ${space(4)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${space(3)};
`;

const CropError = styled.span`
  font-size: ${typography.caption.size};
  color: ${colors.danger};
`;

const CropButton = styled.button`
  padding: ${space(3)} ${space(5)};
  border: none;
  border-radius: ${radius.pill};
  background: ${({ $primary }) =>
    $primary ? colors.accent : colors.surfaceRaised};
  color: ${({ $primary }) => ($primary ? colors.onAccent : colors.text)};
  font-size: ${typography.body.size};
  font-weight: 700;
  cursor: pointer;
`;

export default function Profile() {
  const { draft, updateDraft } = useSignup();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(draft.nickname);
  const [avatar, setAvatar] = useState(draft.avatar);
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedArea] = useState(null);
  const [cropError, setCropError] = useState(null);

  const canContinue = nickname.trim().length > 0;

  const handleNicknameChange = (event) => {
    const { value } = event.target;
    setNickname(value);
    updateDraft({ nickname: value });
  };

  const handleNextClick = () => {
    if (!canContinue) return;
    updateDraft({ nickname: nickname.trim() });
    navigate('/signup/gender');
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setCropError(null);
      setCroppedArea(null);
      setCrop({ x: 0, y: 0 });
      setSrc(reader.result);
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  };

  const onCropComplete = useCallback((_area, areaPixels) => {
    setCroppedArea(areaPixels);
  }, []);

  const handleCropSave = async () => {
    if (!src || !croppedArea) return;

    try {
      const croppedImageUrl = await getCroppedImg(src, croppedArea);
      releaseBlobUrl(avatar);
      setAvatar(croppedImageUrl);
      updateDraft({ avatar: croppedImageUrl });
      setSrc(null);
    } catch {
      setCropError('이미지를 자를 수 없어요. 다른 사진을 선택해 주세요.');
    }
  };

  return (
    <Screen>
      <Back title='회원가입' backClick={() => navigate('/')} />
      <SignupProgress step={0} />

      <Content>
        <Prompt>프로필을 작성해주세요!</Prompt>

        <AvatarBlock>
          <AvatarImage src={avatar ?? profileIcon} alt='프로필 이미지' />
          <CameraLabel htmlFor='signup-avatar'>
            <CameraIcon src={cameraIcon} alt='사진 추가' />
          </CameraLabel>
          <FileInput
            id='signup-avatar'
            type='file'
            accept='image/*'
            onChange={handleImageChange}
          />
        </AvatarBlock>

        <Field>
          <FieldLabel>닉네임</FieldLabel>
          <NicknameInput
            type='text'
            placeholder='이름을 입력해 주세요!'
            value={nickname}
            onChange={handleNicknameChange}
            maxLength={20}
          />
        </Field>

        <Spacer />

        <Button
          clickEvent={handleNextClick}
          step='다음'
          confirm={canContinue}
          disabled={!canContinue}
        />
      </Content>

      {src ? (
        <CropOverlay>
          <CropPanel>
            <CropStage>
              <Cropper
                image={src}
                crop={crop}
                aspect={1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
              />
            </CropStage>
            <CropActions>
              {cropError ? <CropError>{cropError}</CropError> : <span />}
              <CropButton type='button' onClick={() => setSrc(null)}>
                취소
              </CropButton>
              <CropButton type='button' $primary onClick={handleCropSave}>
                선택
              </CropButton>
            </CropActions>
          </CropPanel>
        </CropOverlay>
      ) : null}
    </Screen>
  );
}
