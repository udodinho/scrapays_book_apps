import { gql } from "@apollo/client";

//Follow the mutation shape on your graphql api
export const CREATE_BOOK_MUTATION = gql`
  mutation createBook($name: String!, $description: String!) {
    createBook(createBookDTO: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;

export const UPDATE_BOOK_MUTATION = gql`
  mutation updateBook($id: Float!, $name: String, $description: String) {
    updateBook(updateBookDTO: { id: $id, name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;

export const DELETE_BOOK_MUTATION = gql`
  mutation deleteBook($id: Float!) {
    deleteBook(bookId: { id: $id }) {
      name
      description
    }
  }
`;
