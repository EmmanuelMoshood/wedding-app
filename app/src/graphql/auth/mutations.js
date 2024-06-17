import { gql } from '@apollo/client';

export const Register = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      token
    }
  }
`;

export const Login = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      token
    }
  }
`;