import { useLazyQuery } from '@apollo/client';
import { FaGithub } from 'react-icons/fa';
import { Card } from 'components/Card';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { GET_REPOSITORIES } from 'schemas/get-repositories';
import { Input } from 'components/Input';
import { Loading } from 'components/Loading';
import { ListRepositories, RepositoryProps } from 'components/ListRepositories';
import { Pagination } from 'components/Pagination';
import * as S from './styles';

function Repositories() {
  const [valueFiltered, setValueFiltered] = useState([]);
  const navigate = useNavigate();
  const { dataUser } = useParams();
  const username = dataUser?.split('&')[0];
  const quantityRepository = Number(dataUser?.split('&')[1]);

  useEffect(() => {
    if (!username || !quantityRepository) {
      navigate('/');
    }
  }, []);

  const [getRepositories, { loading, error, data }] =
    useLazyQuery(GET_REPOSITORIES);

  const callbackPageCurrent = (currentPage: number) => {
    getRepositories({
      variables: { input: { username, page: String(currentPage) } },
    });
  };

  useEffect(() => {
    callbackPageCurrent(1);
  }, []);

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
            <>
              <S.Resume>({changeContent.length}) encontrados</S.Resume>
              <ListRepositories listData={changeContent} />
            </>
          )}
          {error && <S.ErrorMessage>Nada encontrado :/</S.ErrorMessage>}
          <Pagination
            perPage={10}
            totalReposities={quantityRepository}
            callbackPageCurrent={callbackPageCurrent}
          />
        </>
      </Card>

      {loading && <Loading />}
    </>
  );
}

export default Repositories;
