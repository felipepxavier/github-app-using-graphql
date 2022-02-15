import * as S from './styles';

export type LanguageProps = {
  name: string;
  color: string;
};

type RepositoryProps = {
  description: string;
  name: string;
  visibility: string;
  language: LanguageProps;
};

export type ListProps = {
  listData: RepositoryProps[];
};

function ListRepositories({ listData }: ListProps) {
  return (
    <S.Container>
      {listData.map((repository) => (
        <S.Repository key={repository.name}>
          <>
            <S.Title>{repository.name}</S.Title>

            <S.Language color={repository.language.color}>
              {repository.language.name}
            </S.Language>

            {/* {repository.description}
            {repository.visibility} */}
          </>
        </S.Repository>
      ))}
    </S.Container>
  );
}

export { ListRepositories };
