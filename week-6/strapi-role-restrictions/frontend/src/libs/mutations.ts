import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      user {
        id
      }
      jwt
    }
  }
`;

export const REGISTER_USER = gql`
mutation RegisterUser($username: String!, $email: String!, $password: String!) {
  register(input: { username: $username, email: $email, password: $password }) {
    user {
      username
      email
    }
  }
}
`;

// export const REGISTER_USER = gql`
// mutation RegisterUser {
//   register(input: {
//     username: "admin1"
//     email: "admin1@admin.be"
//     password: "adminadmin1"
//   }) {
//     user {
//       username
//       email
//     }
//   }
// }
// `;