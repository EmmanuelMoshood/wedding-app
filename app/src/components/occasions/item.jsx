import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUsers, FiCalendar } from "react-icons/fi";
import OccasionArtImgUrl from '@/assets/img/occasion-art.jpg';

export const OccasionItem = (props) => {
  const occasion = props.occasion;

  return (
    <Card maxW="sm" borderRadius={4}>
      <CardHeader p={0}>
        <Image
          objectFit="cover"
          src={OccasionArtImgUrl}
          alt="Chakra UI"
          borderTopLeftRadius={4}
          borderTopRightRadius={4}
          width={'350px'}
          height={'235px'}
        />
      </CardHeader>
      <CardBody>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">{occasion.title}</Heading>
              <Stack direction={'row'}>
                <Text>{occasion.slug}</Text>
              </Stack>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button
          as={"a"}
          href={`/app/${occasion.id}/guests`}
          flex="1"
          variant="ghost"
          leftIcon={<FiUsers />}
          px={0}
        >
          Guests
        </Button>
        <Button 
          as={"a"}
          href={`/app/${occasion.id}/events`} 
          flex="1"
          variant="ghost" 
          leftIcon={<FiCalendar />}
        >
          Events
        </Button>
      </CardFooter>
    </Card>
  );
};
