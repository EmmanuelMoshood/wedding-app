import {
  Box,
  Divider,
  Flex,
  Heading,
  Container,
  Text,
  Button,
  Image,
  Icon,
  Stack,
  SimpleGrid,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Header } from '@/components/web/header';
import { Footer } from '@/components/web/footer';
import { Feature } from '@/components/web/feature';
import HeroImgUrl from '@/assets/img/hero.svg';

export default function Home() {
    return (
        <>
      <Header />

      <Box
        bg={'brand.50'}
        color={'brand.900'}
        fontFamily={'Marcellus'}
      >
        <Container maxW={'6xl'}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 2fr', md: '1fr 2fr' }}
            spacing={8}
            w={'full'}
          >
            <Stack
              as={Box}
              textAlign={{ base: 'center', sm: 'left' }}
              spacing={{ base: 4, md: 8 }}
              py={{ base: 24, md: 36 }}>
              <Heading
                fontWeight={400}
                fontFamily={'Noto Serif Display'}
                fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
                color={'brand.900'}
              >
                Plan your <br />
                big day in a <br />
                sweet way
              </Heading>

              <Text color={'brand.900'} opacity={60} fontFamily={'Marcellus'}>
                Experience event planning the way it should be — intuitive, thoughtful, and personal.
              </Text>

              <Stack
                direction={'row'}
                spacing={3}
                align={{ base: 'center', sm: 'flex-start' }}
                alignSelf={{ base: 'center', sm: 'flex-start' }}
              >
                <Button
                  as={'a'}
                  href={'/auth/register'}
                  color={'brand.50'}
                  bg={'brand.900'}
                  borderRadius={'4px'}
                  fontWeight={400}
                  px={6}
                  _hover={{
                    bg: 'brand.900',
                  }}>
                  Get Started
                </Button>

                <Button
                  as={'a'}
                  display={{ base: 'inline-flex', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={400}
                  color={'brand.900'}
                  bg={'brand.100'}
                  borderRadius={'4px'}
                  border={'1px solid'}
                  borderColor={'brand.900'}
                  href={'#'}
                  _hover={{
                    bg: 'brand.100',
                  }}>
                    Find an event
                </Button>
              </Stack>
            </Stack>
            
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              w={'100%'}
              py={14}
              display={{ base: 'none', sm: 'inline-flex' }}
            >
              <Box
                width={'full'}
                overflow={'hidden'}>
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  src={HeroImgUrl}
                />
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      <Box>
        <Container as={Stack} maxW={'6xl'} pt={16} pb={10}>
          <Flex alignItems="center" gap={6}>
            <Divider border="1px" borderColor={'brand.900'} opacity={1} />
            <Stack
              as={Box}
              textAlign={'right'}
              spacing={{ base: 8, md: 6 }}
              py={{ base: 3 }}
              sx={{ whiteSpace: "nowrap" }}
            >
              <Heading
                fontWeight={400}
                fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
                lineHeight={'110%'}
                color={'brand.900'}
                fontFamily={'Noto Serif Display'}
              >
                All you need is on us
              </Heading>

              <Text color={'brand.900'} fontSize={{ base: 'xs' }} fontWeight={400} opacity={60} fontFamily={'Marcellus'}>
                  Experience event planning the way it should be — intuitive, thoughtful, and personal.
                </Text>
            </Stack>
          </Flex>
        </Container>
      </Box>

      <Box p={4} id='features'>
        <Container maxW={'6xl'} pt={6} pb={16}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              image={HeroImgUrl}
              title={'Invitations'}
              text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
              }
            />
            <Feature
              image={HeroImgUrl}
              title={'Guest List'}
              text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
              }
            />
            <Feature
              image={HeroImgUrl}
              title={'Event Website'}
              text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
              }
            />
          </SimpleGrid>
        </Container>
      </Box>

      <Box
        bg={'brand.900'}
        color={'brand.100'}
        fontFamily={'Marcellus'}
      >
        <Container as={Stack} maxW={'6xl'} pt={16} pb={10}>
          <Stack
            as={Box}
            bg={'brand.900'}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={400}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              color={'brandSecondary.900'}
              fontFamily={'Noto Serif Display'}
            >
              Are you ready to plan <br />
              <Text as={'span'}>
                a special day
              </Text>
            </Heading>

            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Button
                as={'a'}
                href={'/auth/register'}
                color={'brand.900'}
                bg={'brandSecondary.900'}
                borderRadius='4px'
                fontWeight={400}
                px={6}
                _hover={{
                  bg: 'brandSecondary.900',
                }}>
                Get Started
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
    )
}

const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
        fill="currentColor"
      />
    ),
  });
