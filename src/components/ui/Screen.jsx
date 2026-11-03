import styled from 'styled-components';
import { space } from '@/styles/tokens';

export const Screen = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: ${space(4)} ${space(5)} 0;
  padding-bottom: ${({ $nav }) => ($nav ? space(18) : space(8))};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

export const Spacer = styled.div`
  flex: 1;
`;
