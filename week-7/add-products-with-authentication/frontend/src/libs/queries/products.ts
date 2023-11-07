import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      image {
        id
        userId
      }
      name
    }
  }
`;
// change permissions in strapi users (find, findOne)
export const GET_PRODUCTS_FOR_USER = gql`
  query GetProducts($userId: ID!) {
    products(filters: { users_permissions_user: { id: { eq: $userId } } }) {
      data {
        attributes {
          name
          available
          users_permissions_user {
            data {
              id
            }
          }
          image {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      image {
        id
        userId
      }
      name
    }
  }
`;
