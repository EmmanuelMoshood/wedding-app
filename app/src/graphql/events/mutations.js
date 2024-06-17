import { gql } from '@apollo/client';
import { EventFragment } from './fragments';

export const CreateEvent = gql`
  ${EventFragment}
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      ...EventFragment
    }
  }
`;
