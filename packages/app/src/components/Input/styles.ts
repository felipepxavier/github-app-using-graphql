import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    border: 2px solid ${theme.colors.gray};
    height: 3.8rem;

    &:focus {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const ButtonSearch = styled.button.attrs(() => ({
  type: 'button',
}))`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
  `}
`;
