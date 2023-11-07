import { gql } from '@apollo/client';

export const BOOKS_QUERY = gql`
query {
  books {
    id
    name
    description
  }
}
`;