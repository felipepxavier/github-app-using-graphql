import * as S from './styles';

export type CardProps = {
  title: string;
  children: JSX.Element;
  iconTitle?: JSX.Element;
  linkTitle?: JSX.Element;
};
function Card({ title, children, iconTitle, linkTitle: Link }: CardProps) {
  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          {iconTitle && iconTitle}
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>

        {Link && Link}
      </S.Header>
      {children}
    </S.Container>
  );
}

export { Card };
