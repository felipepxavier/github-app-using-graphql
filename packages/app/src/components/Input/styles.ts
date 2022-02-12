import styled, { css } from 'styled-components';
type WrapperProps = {
  isFocused: boolean;
};
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    border: 2px solid ${theme.colors.gray};
    height: 3.8rem;
    position: relative;
  `}

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-color: ${theme.colors.primary};
    `}

  @media (min-width: 768px) {
    max-width: 38rem;
  }
`;

export const Input = styled.input`
  height: 100%;
  border: none;
`;

export const ButtonSearch = styled.button.attrs(() => ({
  type: 'button',
}))`
  ${({ theme }) => css`
    position: absolute;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    right: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: none;
    top: 0.2rem;
    height: 3rem;
  `}
`;
