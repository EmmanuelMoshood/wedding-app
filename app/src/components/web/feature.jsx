import { Image, Text, Stack, Flex } from '@chakra-ui/react';

export const Feature = ({ title, text, image }) => {
    return (
      <Stack>
        <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={image}
        />
        <Text
            color={'brand.900'}
            fontWeight={400}
            fontSize={'4xl'}
            fontFamily={'Marcellus'}
        >
            {title}
        </Text>
        <Text fontWeight={400} fontSize={'md'} fontFamily={'Marcellus'} color={'brand.900'}>
            {text}
        </Text>
      </Stack>
    );
};