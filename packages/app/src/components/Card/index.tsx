import * as S from './styles';

export type CardProps = {
  title: string;
  children: JSX.Element;
};
function Card({ title, children }: CardProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
}

export { Card };
