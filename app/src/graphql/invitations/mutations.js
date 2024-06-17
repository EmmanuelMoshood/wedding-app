import { gql } from '@apollo/client';
import { GuestFragment } from '../guests/fragments';
import { InvitationFragment } from './fragments';

export const CreateInvitation = gql`
  ${InvitationFragment}
  mutation CreateInvitation($input: CreateInvitationInput!) {
    createInvitation(input: $input) {
      ...InvitationFragment
    }
  }
`;

export const CreateInvitationWithGuest = gql`
  ${GuestFragment}
  mutation CreateInvitationWithGuest($input: CreateInvitationWithGuestInput!) {
    createInvitationWithGuest(input: $input) {
      ...GuestFragment
    }
  }
`;
