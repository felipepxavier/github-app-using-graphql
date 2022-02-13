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
  width: calc(100% - 9.4rem);
  border: none;
`;

export const ButtonSearch = styled.button.attrs(() => ({
  type: 'button',
}))`
  ${({ theme }) => css`
    position: absolute;
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.small};
    right: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.primary};
    transition: filter 300ms;
    border: none;
    top: 0.2rem;
    line-height: 3rem;

    &:hover {
      filter: brightness(1.2);
    }
  `}
`;
