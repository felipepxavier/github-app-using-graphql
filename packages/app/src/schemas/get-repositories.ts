import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetReposioties($input: RepositoriesInput) {
    userRepositories(input: $input) {
      repositories {
        name
        description
        language {
          name
          color
        }
        visibility
        url
      }
      total
    }
  }
`;
