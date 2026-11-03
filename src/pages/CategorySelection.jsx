import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Back from '@/components/Back';
import Button from '@/components/Button';
import SignupProgress from '@/components/SignupProgress';
import { Content, Screen, Spacer } from '@/components/ui/Screen';
import { useSignup } from '@/features/signup/SignupContext';
import { CATEGORIES } from '@/features/signup/options';
import { colors, radius, space, typography } from '@/styles/tokens';

const Prompt = styled.h1`
  margin-top: ${space(8)};
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
  margin-top: ${space(6)};
`;

const OptionCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${space(2)};
  padding: ${space(4)} ${space(2)};
  border: 2px solid
    ${({ $selected }) => ($selected ? colors.accent : 'transparent')};
  border-radius: ${radius.md};
  background: ${colors.surface};
  cursor: pointer;
  transition: border-color 120ms ease;
  ${({ $wide }) => ($wide ? 'grid-column: 1 / -1;' : '')}
`;

const OptionImage = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
`;

const OptionLabel = styled.span`
  font-size: ${typography.body.size};
  font-weight: ${typography.body.weight};
  letter-spacing: ${typography.body.letterSpacing};
  color: ${({ $selected }) => ($selected ? colors.accent : colors.textMuted)};
`;

export default function CategorySelection() {
  const { draft, updateDraft } = useSignup();
  const navigate = useNavigate();

  const selectedCategory = draft.category;
  const canContinue = Boolean(selectedCategory);

  const handleCategorySelect = (value) => {
    updateDraft({ category: selectedCategory === value ? null : value });
  };

  const handleNextClick = () => {
    if (!canContinue) return;
    navigate('/signup/age');
  };

  return (
    <Screen>
      <Back title='회원가입' backClick={() => navigate('/signup/gender')} />
      <SignupProgress step={2} />

      <Content>
        <Prompt>소속을 알려주세요</Prompt>

        <Options>
          {CATEGORIES.map((category, index) => {
            const isSelected = selectedCategory === category.value;

            return (
              <OptionCard
                key={category.value}
                type='button'
                $selected={isSelected}
                $wide={index === CATEGORIES.length - 1}
                onClick={() => handleCategorySelect(category.value)}
                aria-pressed={isSelected}
              >
                <OptionImage
                  src={isSelected ? category.selectedImage : category.image}
                  alt={category.label}
                />
                <OptionLabel $selected={isSelected}>
                  {category.label}
                </OptionLabel>
              </OptionCard>
            );
          })}
        </Options>

        <Spacer />

        <Button
          clickEvent={handleNextClick}
          step='다음'
          confirm={canContinue}
          disabled={!canContinue}
        />
      </Content>
    </Screen>
  );
}
