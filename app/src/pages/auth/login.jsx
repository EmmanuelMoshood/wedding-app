import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import { ProviderButtonGroup } from '@/components/auth/provider-button-group';
import { PasswordInput } from '@/components/auth/password-input';
import { Login as LoginMutation } from '@/graphql/auth/mutations';
import { useAuth } from '@/hooks/auth';
  
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mutate, { loading, error}] = useMutation(LoginMutation);
  const { login } = useAuth();

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password !== "" && email !== "") {
      await mutate({ 
        variables: {
          input: { email, password }
        },
        onCompleted: (data) => {
          login(data.login);
          navigate("/app/dashboard");
        }
      });
    }
  };
  
  return (
    <Stack spacing="2">
      <Stack>
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading 
            size={{ base: 'xs', md: 'lg' }}
            fontWeight={600}
            color={'brand.900'}
            fontFamily={'Marcellus'}
          >
              Log in to your account
          </Heading>
        </Stack>
      </Stack>

      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg.surface' }}
      >
        <Stack spacing="6">
          <ProviderButtonGroup prefix={'Sign in with'} />
          <HStack>
            <Divider />
            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
              or
            </Text>
            <Divider />
          </HStack>

          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>

          <HStack justify="space-between">
            <Button as={'a'} href="/auth/register" px={0} variant="text" size="sm">
              Forgot Your Password?
            </Button>
            <Button as={'a'} href="/auth/register" px={0} variant="text" size="sm">
              Need an Account?
            </Button>
          </HStack>

          <Stack spacing="6">
            <Button 
              bg={'brand.900'} 
              color={'white'} 
              fontWeight={400} 
              borderRadius={'4px'}
              _hover={{
                bg: 'brand.900'
              }}
              _loading={loading}
              onClick={handleLogin}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}