import * as S from './styles';

type CardProps = {
  title: string;
};
function Card({ title }: CardProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export { Card };
