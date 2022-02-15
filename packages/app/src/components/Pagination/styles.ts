import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerNavigate = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    gap: ${theme.spacings.small};
  `}
`;
export const ButtonNavigation = styled.button.attrs(() => ({ type: 'button' }))`
  background: none;
  border: none;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.gray};
    transition: transform 250ms;
    width: 4rem;
    height: 4rem;

    &:hover {
      color: ${theme.colors.primary};
      transform: scale(1.4);
    }
  `}
`;

export const Resume = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`;
