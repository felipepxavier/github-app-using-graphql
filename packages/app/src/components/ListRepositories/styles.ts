import styled, { css } from 'styled-components';
import { LanguageProps } from '.';

export const Container = styled.ul`
  list-style: none;
`;
export const Repository = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    padding: 1rem ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    background-color: rgba(69, 98, 186, 0.1);
    margin: ${theme.spacings.small};

    border: solid 2px ${theme.colors.blueLight};
    transition: all 250ms;

    &:hover {
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
  `}
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Language = styled.span<Pick<LanguageProps, 'color'>>`
  ${({ color, theme }) => css`
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    background-color: ${color};
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
  `}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
  > svg {
    font-size: ${theme.font.sizes.xxlarge};
    transition: transform 250ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.6);
    }
  `}
`;
