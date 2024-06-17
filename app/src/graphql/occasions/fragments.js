import { gql } from '@apollo/client';

export const OccasionFragment = gql`
  fragment OccasionFragment on Occasion {
    id
    title
    slug
  }
`;