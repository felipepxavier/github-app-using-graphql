import styled, { css, keyframes } from 'styled-components';

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const Loader = styled.div`
  border-radius: 100%;

  ${({ theme }) => css`
    border: 10px solid ${theme.colors.primary};
  `}
  border-bottom-color: transparent;
  width: 75px;
  height: 75px;
  animation: ${rotate} 0.75s linear infinite;
`;
