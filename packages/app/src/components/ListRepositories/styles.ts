import styled, { css } from 'styled-components';
import { LanguageProps } from '.';

export const Container = styled.ul`
  list-style: none;
`;
export const Repository = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    background-color: rgba(69, 98, 186, 0.1);
    margin: ${theme.spacings.small};
    display: flex;
    justify-content: space-between;
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
