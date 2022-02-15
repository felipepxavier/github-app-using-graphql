import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import * as S from './styles';

export type LanguageProps = {
  name: string;
  color: string;
};

export type RepositoryProps = {
  description: string;
  name: string;
  visibility: string;
  language: LanguageProps;
  url: string;
};

export type ListProps = {
  listData: RepositoryProps[];
};

type ExpandedProps = {
  [key: string]: boolean;
};

function ListRepositories({ listData }: ListProps) {
  const [expandedButton, setExpandedButton] = useState(() =>
    listData.reduce(
      (acc, repos) => (acc = { ...acc, [repos.name]: false }),
      {} as ExpandedProps
    )
  );
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
                aria-expanded={expandedButton[repository.name]}
                isExpanded={expandedButton[repository.name]}
                onClick={() =>
                  setExpandedButton((oldState) => ({
                    ...oldState,
                    [repository.name]: !expandedButton[repository.name],
                  }))
                }
              >
                <MdKeyboardArrowDown />
              </S.ButtonMoreInfo>

              {expandedButton[repository.name] && (
                <S.ContentMoreInfo>
                  <S.InfoText>{repository.description}</S.InfoText>

                  <S.LinkRepository href={repository.url} target="_blank">
                    Visualizar no Github
                  </S.LinkRepository>
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
