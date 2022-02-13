import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
  `}

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 6rem;

  @media (min-width: 768px) {
    max-width: 18rem;
  }
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const Username = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`;

export const ContainerNames = styled.div``;

export const ListInfo = styled.ul``;

export const ItemInfo = styled.li`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const FieldDefault = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
