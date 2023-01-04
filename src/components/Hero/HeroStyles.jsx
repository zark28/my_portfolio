import styled from 'styled-components';
import { breakpoints } from '../../styles/BreakPoints';
export const LeftSection = styled.div`
  width: 100%;
  @media ${breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
