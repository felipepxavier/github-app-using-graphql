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
  flex-direction: column;
`;

type ButtonProps = {
  isExpanded: boolean;
};

export const ButtonMoreInfo = styled.button.attrs(() => ({
  type: 'button',
}))<ButtonProps>`
  border: none;
  background: transparent;

  ${({ theme, isExpanded }) => css`
  > svg {
    font-size: 3.4rem;
    color: ${theme.colors.gray};
    transition: transform 250ms;
    transform: ${isExpanded ? `rotate(180deg)` : ''};
    cursor: pointer;

    &:hover {
      transform: scale(1.4) ${isExpanded ? `rotate(180deg)` : ''};
      color: ${theme.colors.primary};

      
    }

    @media (min-width: 768px) {
      font-size: 4.8rem;
    }
    
  `}
`;

export const ContentMoreInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoText = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Status = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray};
    width: max-content;
  `}
`;
