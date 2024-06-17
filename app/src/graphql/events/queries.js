import { gql } from '@apollo/client';
import { EventFragment } from './fragments';

export const GetEvents = gql`
  ${EventFragment}
  query GetEvents($occasion: UUID) {
    events(occasion: $occasion) {
      data {
        ...EventFragment
      }
    }
  }
`;