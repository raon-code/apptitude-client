import styled from 'styled-components';
import { colors, radius, space } from '@/styles/tokens';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: ${space(3)};
  width: 100%;
`;

const Option = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${space(2)};
  padding: ${space(3)};
  min-height: ${({ $image }) => ($image ? '124px' : '84px')};
  border-radius: ${radius.md};
  border: 2px solid
    ${({ $selected }) => ($selected ? colors.accent : 'transparent')};
  background: ${colors.surface};
  color: ${({ $selected }) => ($selected ? colors.accent : colors.textMuted)};
  font-size: 16px;
  font-weight: 600;
  transition: border-color 120ms ease;

  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }
`;

const Badge = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${colors.bg};
  color: ${({ $selected }) => ($selected ? colors.accent : colors.textSubtle)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;

export default function OptionGrid({ options, value, onChange, columns = 2 }) {
  return (
    <Grid $columns={columns} role='radiogroup'>
      {options.map((option) => {
        const selected = value === option.value;
        return (
          <Option
            key={option.value}
            type='button'
            role='radio'
            aria-checked={selected}
            $selected={selected}
            $image={Boolean(option.image)}
            onClick={() => onChange(selected ? null : option.value)}
          >
            {option.image ? (
              <img
                src={selected ? option.selectedImage : option.image}
                alt=''
              />
            ) : (
              <Badge $selected={selected}>{option.badge}</Badge>
            )}
            <span>{option.label}</span>
          </Option>
        );
      })}
    </Grid>
  );
}
