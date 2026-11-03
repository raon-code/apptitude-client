import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Back from '@/components/Back';
import Button from '@/components/Button';
import SignupProgress from '@/components/SignupProgress';
import { Content, Screen, Spacer } from '@/components/ui/Screen';
import { useSignup } from '@/features/signup/SignupContext';
import { AGES } from '@/features/signup/options';
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
  gap: ${space(2)};
  padding: ${space(4)} ${space(2)};
  border: 2px solid
    ${({ $selected }) => ($selected ? colors.accent : 'transparent')};
  border-radius: ${radius.md};
  background: ${colors.surface};
  cursor: pointer;
  transition: border-color 120ms ease;
`;

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${radius.pill};
  background: ${colors.bg};
  font-size: ${typography.caption.size};
  font-weight: 700;
  letter-spacing: ${typography.caption.letterSpacing};
  color: ${({ $selected }) => ($selected ? colors.accent : colors.textSubtle)};
`;

const OptionLabel = styled.span`
  font-size: ${typography.body.size};
  font-weight: ${typography.body.weight};
  letter-spacing: ${typography.body.letterSpacing};
  color: ${({ $selected }) => ($selected ? colors.accent : colors.textMuted)};
`;

export default function AgeSelection() {
  const { draft, updateDraft } = useSignup();
  const navigate = useNavigate();

  const selectedAge = draft.age;
  const canContinue = Boolean(selectedAge);

  const handleAgeSelect = (value) => {
    updateDraft({ age: selectedAge === value ? null : value });
  };

  const handleStartClick = () => {
    if (!canContinue) return;
    navigate('/survey');
  };

  return (
    <Screen>
      <Back title='회원가입' backClick={() => navigate('/signup/category')} />
      <SignupProgress step={3} />

      <Content>
        <Prompt>연령대가 어떻게 되세요?</Prompt>

        <Options>
          {AGES.map((age) => {
            const isSelected = selectedAge === age.value;

            return (
              <OptionCard
                key={age.value}
                type='button'
                $selected={isSelected}
                onClick={() => handleAgeSelect(age.value)}
                aria-pressed={isSelected}
              >
                <Badge $selected={isSelected}>{age.badge}</Badge>
                <OptionLabel $selected={isSelected}>{age.label}</OptionLabel>
              </OptionCard>
            );
          })}
        </Options>

        <Spacer />

        <Button
          clickEvent={handleStartClick}
          step='시작하기'
          confirm={canContinue}
          disabled={!canContinue}
        />
      </Content>
    </Screen>
  );
}
