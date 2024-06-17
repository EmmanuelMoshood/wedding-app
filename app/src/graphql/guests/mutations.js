import { gql } from '@apollo/client';
import { GuestFragment } from './fragments';

export const CreateGuest = gql`
  ${GuestFragment}
  mutation CreateGuest($input: CreateGuestInput!) {
    createGuest(input: $input) {
      ...GuestFragment
    }
  }
`;
