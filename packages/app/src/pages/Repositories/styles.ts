import styled, { css } from 'styled-components';

export const ErrorMessage = styled.p`
  display: flex;
  height: 55rem;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const WrapperLink = styled.div`
  ${({ theme }) => css`
    svg {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.gray};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const Resume = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.small};
  `}
`;
