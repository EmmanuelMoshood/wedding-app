import { gql } from '@apollo/client';
import { GuestFragment } from './fragments';

export const GetGuests = gql`
  ${GuestFragment}
  query GetGuests {
    guests {
      data {
        ...GuestFragment
      }
    }
  }
`;