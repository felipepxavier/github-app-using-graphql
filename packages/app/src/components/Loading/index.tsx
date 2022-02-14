import * as S from './styles';

function Loading() {
  return (
    <S.LoaderContainer data-testid="loading">
      <S.Loader />
    </S.LoaderContainer>
  );
}

export { Loading };
