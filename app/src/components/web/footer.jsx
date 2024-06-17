import { ReactNode } from 'react';

import {
  chakra,
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useToken,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Logo } from '@/components/common/logo';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const [brand100] = useToken(
    'colors',
    ['brand.100'],
  )

  return (
    <Box
      p={4} 
      bg={'brand.900'}
      color={'brand.100'}
      fontFamily={'Marcellus'}
    >
      <Container as={Stack} maxW={'6xl'} pt={16} pb={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={brand100} height={'35'} />
            </Box>
          </Stack>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={16} align={'flex-start'} justify={{ base: 'flex-end', md: 'space-between' }}>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={4}>
                RESOURCES
              </Text>
              <Link href={'#features'}>features</Link>
              <Link href={'#'}>find an event</Link>
              <Link href={'#'}>faqs</Link>
              <Link href={'#'}>pricing</Link>
              <Link href={'#'}>help & support</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={4}>
                ABOUT
              </Text>
              <Link href={'#'}>our story</Link>
              <Link href={'#'}>careers</Link>
              <Link href={'#'}>contact us</Link>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Container
          as={Stack}
          maxW={'6xl'}
          pt={12}
          pb={5}
          px={0}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2023 All rights reserved. Weevite</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
}
