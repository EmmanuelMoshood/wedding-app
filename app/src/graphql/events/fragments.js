import { gql } from '@apollo/client';

export const EventFragment = gql`
  fragment EventFragment on Event {
    id
    title
  }
`;