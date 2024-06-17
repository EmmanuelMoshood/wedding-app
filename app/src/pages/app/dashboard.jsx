import {
  Box,
  Avatar,
  Button,
  Container,
  Heading,
  keyframes,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { CreateOccasion } from "@/components/occasions/create";
import { OccasionItem } from "@/components/occasions/item";
import { useQuery } from "@apollo/client";
import { GetOccasions as GetOccasionsQuery } from "@/graphql/occasions/queries";
import OccasionArtImgUrl from '@/assets/img/occasion-art.jpg';

const pulseRing = keyframes`
  0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const Dashboard = () => {
  const {
    isOpen: isCreateOccasionOpen,
    onOpen: onCreateOccasionOpen,
    onClose: onCreateOccasionClose,
  } = useDisclosure();

  const { loading, error, data } = useQuery(GetOccasionsQuery);
  const occasions = data?.occasions?.data ?? [];

  return (
    <>
      <Box px={4}>
        <Container maxW={"8xl"}>
          {occasions.length > 0 && (
            <Stack
              spacing={4}
              direction={"row"}
              align="center"
              justify={"space-between"}
              py={4}
              pb={12}
            >
              <Heading
                as="h3"
                fontWeight={600}
                color={"brand.900"}
                fontFamily={"Noto Serif Display"}
                size="lg"
                mt={6}
                mb={2}
              >
                Upcoming Occasions
              </Heading>
              <Stack
                spacing={4}
                direction={"row"}
                align="center"
                justify={"end"}
              >
                <Button
                  borderRadius={"4px"}
                  fontWeight={400}
                  px={6}
                  disabled={true}
                >
                  Find Occasion
                </Button>

                <Button
                  color={"brand.50"}
                  bg={"brand.900"}
                  leftIcon={<FiPlus />}
                  borderRadius={"4px"}
                  fontWeight={400}
                  px={6}
                  _hover={{
                    bg: "brand.900",
                  }}
                  onClick={onCreateOccasionOpen}
                >
                  Create Occasion
                </Button>
              </Stack>
            </Stack>
          )}

          <Stack spacing="4" direction={"row"}>
            {occasions.map((o) => (
              <OccasionItem occasion={o} />
            ))}
          </Stack>

          {occasions.length === 0 && (
            <Box
              as={Stack}
              spacing={4}
              align="center"
              justify={"center"}
              py={24}
              px={6}
            >
              <Box
                as="div"
                position="relative"
                w={50}
                h={50}
                _before={{
                  content: "''",
                  position: "relative",
                  display: "block",
                  width: "300%",
                  height: "300%",
                  boxSizing: "border-box",
                  marginLeft: "-100%",
                  marginTop: "-100%",
                  borderRadius: "50%",
                  bgColor: "brand.900",
                  animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                }}
              >
                <Avatar
                  src={OccasionArtImgUrl}
                  size="full"
                  position="absolute"
                  top={0}
                />
              </Box>

              <Heading
                as="h2"
                fontWeight={600}
                color={"brand.900"}
                fontFamily={"Noto Serif Display"}
                size="xl"
                mt={6}
                mb={2}
              >
                Create your special occasion
              </Heading>

              <Text color={"gray.500"} textAlign={"center"}>
                Get your special occasion plans started, add your events <br />
                and curate your guest lists.
              </Text>

              <Button
                color={"brand.50"}
                bg={"brand.900"}
                leftIcon={<FiPlus />}
                borderRadius={"4px"}
                fontWeight={400}
                px={6}
                _hover={{
                  bg: "brand.900",
                }}
                onClick={onCreateOccasionOpen}
              >
                Create Occasion
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      <CreateOccasion
        isOpen={isCreateOccasionOpen}
        onClose={onCreateOccasionClose}
      />
    </>
  );
};
