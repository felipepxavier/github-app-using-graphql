import { useLazyQuery } from '@apollo/client';
import { GET_USER } from 'schemas/get-user';
import { Card } from 'components/Card';
import { Input } from 'components/Input';
import { FaGithub } from 'react-icons/fa';
import { Profile } from 'components/Profile';
import * as S from './styles';

function Main() {
  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);

  const callbackOnClickButton = (value: string) => {
    getUser({ variables: { input: { username: value } } });
  };

  return (
    <>
      <Card title="Digite o username" iconTitle={<FaGithub size={22} />}>
        <>
          <Input
            placeholder="Digite aqui"
            callbackOnClickButton={callbackOnClickButton}
          />

          {data?.user && <Profile userData={data.user} />}
          {error && <S.ErrorMessage>Nada encontrado :/</S.ErrorMessage>}
        </>
      </Card>
      {loading && (
        <S.LoaderContainer>
          <S.Loader />
        </S.LoaderContainer>
      )}
    </>
  );
}

export default Main;
