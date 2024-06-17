import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Avatar,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  keyframes,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  RadioGroup,
  Radio,
  Select,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@apollo/client";
import { CreateInvitationWithGuest as CreateInvitationWithGuestMutation } from "@/graphql/invitations/mutations";
import { GetEvents as GetEventsQuery } from "@/graphql/events/queries";

export const CreateGuest = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rsvpStatus, setRSVPStatus] = useState("yes");

  const { data } = useQuery(GetEventsQuery);
  const occasionEvents = data?.events?.data ?? [];

  const [mutate, { loading, error }] = useMutation(
    CreateInvitationWithGuestMutation
  );

  const handleCreateInviteWithGuest = async (e) => {
    e.preventDefault();

    if (name !== "") {
      await mutate({
        variables: {
          input: { firstName, lastName, title, email, phone, events, rsvpStatus },
        },
        onCompleted: (data) => {
          navigate("/app/dashboard");
        },
      });
    }
  };

  return (
    <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Guest</ModalHeader>
        <ModalBody py={4}>
          <Stack direction={"row"} pb={8}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Select
                placeholder="Select..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </Stack>

          <Accordion defaultIndex={[0]}>
            <AccordionItem>
              <AccordionButton py={6}>
                <Box as="span" flex="1" textAlign="left">
                  Email & Phone
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Stack direction={"row"}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormControl>
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton py={6}>
                <Box as="span" flex="1" textAlign="left">
                  Invite Guest to Events
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Stack direction={"row"} pb={8}>
                  <FormControl>
                    <FormLabel>Event</FormLabel>
                    <Select placeholder="Select...">
                      {occasionEvents.map((e) => (
                        <option value={e.id}>{e.title}</option>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
                <FormControl pb={8}>
                  <FormLabel>RSVP</FormLabel>
                  <RadioGroup onChange={setRSVPStatus} value={rsvpStatus}>
                    <Stack direction="row">
                      <Radio size="lg" value="yes" colorScheme="brand.900">
                        Yes
                      </Radio>
                      <Radio size="lg" value="no" colorScheme="brand.900">
                        No
                      </Radio>
                      <Radio size="lg" value="maybe" colorScheme="brand.900">
                        Maybe
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ModalBody>

        <ModalFooter>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              _loading={loading}
              onClick={handleCreateInviteWithGuest}
              color={"brand.50"}
              bg={"brand.900"}
            >
              Save & Close
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
