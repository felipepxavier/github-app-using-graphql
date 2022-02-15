import { useQuery } from '@apollo/client';
import { FaGithub } from 'react-icons/fa';
import { Card } from 'components/Card';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { GET_REPOSITORIES } from 'schemas/get-repositories';
import { Input } from 'components/Input';
import { Loading } from 'components/Loading';
import { ListRepositories, RepositoryProps } from 'components/ListRepositories';
import * as S from './styles';

function Repositories() {
  const [valueFiltered, setValueFiltered] = useState([]);
  const { username } = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { input: { username: username } },
  });

  let time: ReturnType<typeof setTimeout>;
  const handleFilterRepository = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const content = data?.userRepositories?.repositories;
    let newList = [];
    const term = event.target.value.toLowerCase();
    clearTimeout(time);
    time = setTimeout(() => {
      if (term !== '') {
        newList = content.filter((item: RepositoryProps) => {
          const itemCurrent = Object.values(item).toString().toLowerCase();
          const isExisting = itemCurrent.includes(term);
          return isExisting;
        });
      } else {
        newList = [];
      }
      setValueFiltered(newList);
    }, 800);
  };

  const changeContent =
    valueFiltered.length > 0
      ? valueFiltered
      : data?.userRepositories?.repositories;

  return (
    <>
      <Card
        title={`Repositórios de ${username}`}
        iconTitle={<FaGithub size={22} />}
        linkTitle={
          <S.WrapperLink>
            <Link to={'/'} data-testid="link">
              <MdKeyboardArrowLeft size={34} />
            </Link>
          </S.WrapperLink>
        }
      >
        <>
          <Input placeholder="Pesquisar..." onChange={handleFilterRepository} />

          {data?.userRepositories.repositories && (
            <ListRepositories listData={changeContent} />
          )}
          {error && <S.ErrorMessage>Nada encontrado :/</S.ErrorMessage>}
        </>
      </Card>

      {loading && <Loading />}
    </>
  );
}

export default Repositories;
