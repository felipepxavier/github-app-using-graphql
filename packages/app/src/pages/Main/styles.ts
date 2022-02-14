import styled, { css } from 'styled-components';

export const ErrorMessage = styled.p`
  display: flex;
  height: 55rem;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;
