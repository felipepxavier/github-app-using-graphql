import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    margin: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.secondary};

    @media (min-width: 768px) {
      max-width: 64rem;
      margin: 8rem auto;
    }
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.h2``;
