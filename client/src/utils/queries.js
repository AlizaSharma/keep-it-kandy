// These queries will be used for fetching data from the GraphQL server.

import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      username
    }
  }
`;

export const GET_CANDIES = gql`
  query GetCandies {
    candies {
      _id
      name
      description
      image
      price
      quantity
    }
  }
`;
