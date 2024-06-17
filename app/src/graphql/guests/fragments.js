import { gql } from '@apollo/client';

export const GuestFragment = gql`
  fragment GuestFragment on Guest {
    id
    fistName
    lastName
    email
    phone
  }
`;