import { MdKeyboardArrowDown } from 'react-icons/md';
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
            <S.Content>
              <S.Title>{repository.name}</S.Title>

              <S.Language color={repository.language.color}>
                {repository.language.name}
              </S.Language>
            </S.Content>

            {/* {repository.description}
            {repository.visibility} */}

            <S.Footer>
              <S.ButtonMoreInfo
                aria-label="abrir mais informações do repositório"
                aria-expanded="false"
              >
                <MdKeyboardArrowDown />
              </S.ButtonMoreInfo>
            </S.Footer>
          </>
        </S.Repository>
      ))}
    </S.Container>
  );
}

export { ListRepositories };
