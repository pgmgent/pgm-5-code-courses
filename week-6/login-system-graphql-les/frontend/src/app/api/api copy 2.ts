 "use client" 
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


import { useQuery } from '@apollo/client';

const GET_RENTAL_PRODUCTS = gql`
  query {
    rentalProducts {
      data {
        id
        attributes {
          title
          numberInStock
          image { 
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const fetchRentalProducts = async () => {
  const { data, error } = useQuery(GET_RENTAL_PRODUCTS);

  if (error) {
    console.log(error);
    return null;
  }

  return data.rentalProducts.data;
};

import { useMutation } from '@apollo/client';

const CREATE_RENTAL_PRODUCT = gql`
  mutation CreateRentalProduct($title: String!, $numberInStock: Int!) {
    createRentalProduct(data: { title: $title, numberInStock: $numberInStock }) {
      data {
        id
        attributes {
          title
          numberInStock
        }
      }
    }
  }
`;

const DELETE_RENTAL_PRODUCT = gql`
  mutation DeleteRentalProduct($id: ID!) {
    deleteRentalProduct(id: $id) {
      data {
        id
      }
    }
  }
`;

const UPDATE_RENTAL_PRODUCT = gql`
  mutation UpdateRentalProduct($id: ID!, $title: String!, $numberInStock: Int!) {
    updateRentalProduct(id: $id, data: { title: $title, numberInStock: $numberInStock }) {
      data {
        id
        attributes {
          title
          numberInStock
        }
      }
    }
  }
`;

export const createRentalProduct = (product: RentalProduct) => {
  const [createProduct] = useMutation(CREATE_RENTAL_PRODUCT);

  const { data, error } = createProduct({
    variables: { title: product.attributes.title, numberInStock: product.attributes.numberInStock },
  });

  if (error) {
    console.log(error);
    return null;
  }

  return data.createRentalProduct.data;
};

export const deleteRentalProduct = (id: number) => {
  const [deleteProduct] = useMutation(DELETE_RENTAL_PRODUCT);

  const { data, error } = deleteProduct({ variables: { id } });

  if (error) {
    console.log(error);
    return null;
  }

  return data.deleteRentalProduct.data;
};

export const updateRentalProduct = (product: RentalProduct) => {
  const [updateProduct] = useMutation(UPDATE_RENTAL_PRODUCT);

  const { data, error } = updateProduct({
    variables: { id: product.id, title: product.attributes.title, numberInStock: product.attributes.numberInStock },
  });

  if (error) {
    console.log(error);
    return null;
  }

  return data.updateRentalProduct.data;
};
