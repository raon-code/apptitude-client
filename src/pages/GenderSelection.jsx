import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Back from '@/components/Back';
import Button from '@/components/Button';
import SignupProgress from '@/components/SignupProgress';
import { Content, Screen, Spacer } from '@/components/ui/Screen';
import { useSignup } from '@/features/signup/SignupContext';
import { GENDERS } from '@/features/signup/options';
import { colors, radius, space, typography } from '@/styles/tokens';

const Prompt = styled.h1`
  margin-top: ${space(10)};
  text-align: center;
  font-size: ${typography.title.size};
  font-weight: ${typography.title.weight};
  letter-spacing: ${typography.title.letterSpacing};
  color: ${colors.text};
`;

const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${space(3)};
  margin-top: ${space(8)};
`;

const OptionCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space(3)};
  padding: ${space(4)} ${space(2)};
  border: 2px solid
    ${({ $selected }) => ($selected ? colors.accent : 'transparent')};
  border-radius: ${radius.md};
  background: ${colors.surface};
  cursor: pointer;
  transition: border-color 120ms ease;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: ${radius.pill};
  object-fit: cover;
`;

const OptionLabel = styled.span`
  font-size: ${typography.body.size};
  font-weight: ${typography.body.weight};
  letter-spacing: ${typography.body.letterSpacing};
  color: ${({ $selected }) => ($selected ? colors.accent : colors.textMuted)};
`;

export default function GenderSelection() {
  const { draft, updateDraft } = useSignup();
  const navigate = useNavigate();

  const selectedGender = draft.gender;
  const canContinue = Boolean(selectedGender);

  const handleGenderSelect = (value) => {
    updateDraft({ gender: selectedGender === value ? null : value });
  };

  const handleClick = () => {
    if (!canContinue) return;
    navigate('/signup/category');
  };

  return (
    <Screen>
      <Back title='회원가입' backClick={() => navigate('/signup/profile')} />
      <SignupProgress step={1} />

      <Content>
        <Prompt>성별이 어떻게 되세요?</Prompt>

        <Options>
          {GENDERS.map((gender) => {
            const isSelected = selectedGender === gender.value;

            return (
              <OptionCard
                key={gender.value}
                type='button'
                $selected={isSelected}
                onClick={() => handleGenderSelect(gender.value)}
                aria-pressed={isSelected}
              >
                <Avatar
                  src={isSelected ? gender.selectedImage : gender.image}
                  alt={gender.label}
                />
                <OptionLabel $selected={isSelected}>{gender.label}</OptionLabel>
              </OptionCard>
            );
          })}
        </Options>

        <Spacer />

        <Button
          clickEvent={handleClick}
          step='다음'
          confirm={canContinue}
          disabled={!canContinue}
        />
      </Content>
    </Screen>
  );
}
