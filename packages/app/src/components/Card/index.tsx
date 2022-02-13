import * as S from './styles';

export type CardProps = {
  title: string;
  children: JSX.Element;
  iconTitle?: JSX.Element;
};
function Card({ title, children, iconTitle }: CardProps) {
  return (
    <S.Container>
      <S.Header>
        {iconTitle && iconTitle}
        <S.Title>{title}</S.Title>
      </S.Header>
      {children}
    </S.Container>
  );
}

export { Card };
