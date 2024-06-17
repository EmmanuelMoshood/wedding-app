import { gql } from '@apollo/client';
import { OccasionFragment } from './fragments';

export const GetOccasions = gql`
  ${OccasionFragment}
  query GetOccasions {
    occasions {
      data {
        ...OccasionFragment
      }
    }
  }
`;