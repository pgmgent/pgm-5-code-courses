import { gql } from "@apollo/client";

export const QUERY_GET_ALL_ITEMS = gql`
query items {
    items {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`; 