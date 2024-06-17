import {
  Flex,
  Container,
  // Image,
  Link,
  Stack,
} from '@chakra-ui/react';
import {
  Outlet,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Logo } from '@/components/common/logo';
// import AuthAbsractImgUrl from '@/assets/svg/auth-abstract.svg';
import { useAuth } from '@/hooks/auth';
  
export const Auth = () => {
  let { token } = useAuth();
  let location = useLocation();

  if (token) {
    // Redirect them to the dashboard page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/app/dashboard" state={{ from: location }} replace />;
  }

  return (
    <Stack 
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex p={8} flex={1} direction={'column'} align={'start'} justify={'start'}>
        <Link href="/" textAlign={'left'}>
          <Logo height={35} />
        </Link>
        
        <Container maxW="lg" py={{ base: '8', sm: '10' }} px={{ base: '0', sm: '8' }}>
          <Outlet />
        </Container>
      </Flex>

      <Flex flex={1/2} bg={'brand.50'}>
        {/* <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={AuthAbsractImgUrl}
        /> */}
      </Flex>
    </Stack>
  )
}