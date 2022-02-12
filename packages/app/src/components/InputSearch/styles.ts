import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    border: 2px solid ${theme.colors.secondary};
    height: 3.8rem;

    &:focus {
      border-color: ${theme.colors.primary};
    }
  `}
`;
