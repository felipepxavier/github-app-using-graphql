import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($input: UserInput) {
    user(input: $input) {
      name
      email
      avatar_url
      location
    }
  }
`;
