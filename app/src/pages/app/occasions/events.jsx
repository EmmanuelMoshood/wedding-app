import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  HStack,
  Heading,
  RadioGroup,
  Radio,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { FiTrash, FiMail, FiFilter, FiPlus } from "react-icons/fi";
import { CreateGuest } from "@/components/guests/create";

export const Events = () => {
  const [value, setValue] = useState("");
  const {
    isOpen: isCreateGuestOpen,
    onOpen: openCreatGuest,
    onClose: onCreateGuestClose,
  } = useDisclosure();

  return (
    <>
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
          Manage Events
        </Heading>
        <Stack spacing={4} direction={"row"} align="end" justify={"end"} py={4}>
          <Button
            borderRadius={"4px"}
            fontWeight={400}
            px={6}
            disabled={true}
            leftIcon={<FiFilter />}
          >
            Filter
          </Button>

          <Button
            color={"brand.50"}
            bg={"brand.900"}
            borderRadius={"4px"}
            fontWeight={400}
            px={6}
            leftIcon={<FiPlus />}
            _hover={{
              bg: "brand.900",
            }}
            onClick={openCreatGuest}
          >
            Add Event
          </Button>

          <CreateGuest
            isOpen={isCreateGuestOpen}
            onClose={onCreateGuestClose}
          />
        </Stack>
      </Stack>

      <TableContainer border={"1px solid"} borderRadius={4}>
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Title</Th>
              <Th>Location</Th>
              <Th>Invite Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox defaultChecked />
              </Td>
              <Td>
                <HStack>
                  <Box as="div" position="relative" w={35} h={35}>
                    <Avatar
                      size="full"
                      position="absolute"
                      name="Segun Adebayo"
                      bg={"brand.100"}
                      color={"brand.900"}
                      top={0}
                    />
                  </Box>
                  <Text>Afolabi Abass</Text>
                </HStack>
              </Td>
              <Td>
                afolabi@weevite.de
                <br />
                +4522384282
              </Td>
              <Td>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="row">
                    <Radio size="lg" value="1" colorScheme="brand.900">
                      Yes
                    </Radio>
                    <Radio size="lg" value="2" colorScheme="brand.900">
                      No
                    </Radio>
                    <Radio size="lg" value="3" colorScheme="brand.900">
                      Maybe
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Td>
              <Td>
                <Stack direction="row">
                  <FiMail />
                  <FiTrash />
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
