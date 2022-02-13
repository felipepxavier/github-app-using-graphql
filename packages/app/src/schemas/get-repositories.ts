import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetReposioties($input: UserInput) {
    userRepositories(input: $input) {
      repositories {
        name
        description
        language {
          name
          color
        }
        visibility
      }
      total
    }
  }
`;
