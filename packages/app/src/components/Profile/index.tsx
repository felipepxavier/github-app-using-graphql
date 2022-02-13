import * as S from './styles';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { FaUserCheck } from 'react-icons/fa';
import { RiGitRepositoryFill } from 'react-icons/ri';

type User = {
  avatar_url: string;
  email: string;
  location: string;
  name: string;
  username: string;
  public_repos: number;
  bio: string;
  followers: number;
  following: number;
};

export type ProfileProps = {
  userData: User;
};
function Profile({ userData }: ProfileProps) {
  return (
    <S.Container>
      {userData && (
        <>
          <S.Header>
            <S.Avatar
              src={userData.avatar_url}
              alt={`imagem de perfil do usuário ${userData.name}`}
            />
            <S.ContainerNames>
              <S.Name>{userData.name}</S.Name>
              <S.Username>{userData.username}</S.Username>
            </S.ContainerNames>
          </S.Header>

          <S.ListInfo>
            <S.ItemInfo aria-label={`E-mail: ${userData.email}`}>
              <MdEmail size={20} color="#4562ba" />
              <S.FieldDefault>{userData.email}</S.FieldDefault>
            </S.ItemInfo>

            <S.ItemInfo aria-label={`localização: ${userData.location}`}>
              <MdLocationPin size={20} color="#4562ba" />
              <S.FieldDefault>{userData.location}</S.FieldDefault>
            </S.ItemInfo>

            <S.ItemInfo
              aria-label={`Repositórios públicos: ${userData.public_repos}`}
            >
              <RiGitRepositoryFill size={20} color="#4562ba" />
              <S.FieldDefault>
                {userData.public_repos} repos. públicos
              </S.FieldDefault>
            </S.ItemInfo>

            <S.ItemInfo aria-label={`Seguidores: ${userData.followers}`}>
              <FaUserCheck size={20} color="#4562ba" />
              <S.FieldDefault>{userData.followers} seguidores</S.FieldDefault>
            </S.ItemInfo>

            <S.ItemInfo aria-label={`Seguindo: ${userData.following}`}>
              <FaUserCheck size={20} color="#4562ba" />
              <S.FieldDefault>{userData.following} seguindo</S.FieldDefault>
            </S.ItemInfo>
          </S.ListInfo>
        </>
      )}
    </S.Container>
  );
}

export { Profile };
