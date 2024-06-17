import { gql } from '@apollo/client';

export const InvitationFragment = gql`
  fragment InvitationFragment on Invitation {
    id
  }
`;