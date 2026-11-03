import styled from 'styled-components';
import { colors } from '@/styles/tokens';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0 0;
  color: ${colors.text};
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export default function Title({ title, children }) {
  return <Wrap>{title ?? children}</Wrap>;
}
