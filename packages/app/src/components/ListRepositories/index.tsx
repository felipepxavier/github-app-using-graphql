import { useState } from 'react';
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
  const [expandedButton, setExpandedButton] = useState(false);
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

            <S.Footer>
              <S.ButtonMoreInfo
                aria-label="abrir mais informações do repositório"
                aria-expanded={expandedButton}
                onClick={() => setExpandedButton(!expandedButton)}
              >
                <MdKeyboardArrowDown />
              </S.ButtonMoreInfo>

              {expandedButton && (
                <S.ContentMoreInfo>
                  <S.InfoText>{repository.description}</S.InfoText>
                  <S.Status> {repository.visibility} </S.Status>
                </S.ContentMoreInfo>
              )}
            </S.Footer>
          </>
        </S.Repository>
      ))}
    </S.Container>
  );
}

export { ListRepositories };
