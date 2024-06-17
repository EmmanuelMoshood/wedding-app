import { gql } from '@apollo/client';
import { OccasionFragment } from './fragments';

export const CreateOccasion = gql`
  ${OccasionFragment}
  mutation CreateOccasion($input: CreateOccasionInput!) {
    createOccasion(input: $input) {
      ...OccasionFragment
    }
  }
`;
