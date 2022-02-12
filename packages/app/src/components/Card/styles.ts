import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    margin: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.primary};
  `}
`;

export const Title = styled.h2``;
