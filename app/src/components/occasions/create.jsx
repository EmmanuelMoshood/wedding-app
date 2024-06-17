import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Modal,
  InputGroup,
  InputLeftAddon,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { CreateOccasion as CreateOccasionMutation } from "@/graphql/occasions/mutations";

export const CreateOccasion = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const [mutate, { loading, error }] = useMutation(CreateOccasionMutation);

  const handleCreateOccasion = async (e) => {
    e.preventDefault();

    if (title !== "" && slug !== "") {
      await mutate({
        variables: {
          input: { title, slug },
        },
        onCompleted: (data) => {
          navigate("/app/dashboard");
          onClose();
        },
      });
    }
  };

  return (
    <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Occasion</ModalHeader>
        <ModalBody py={4}>
          <FormControl pb={8}>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Weevite Url</FormLabel>
            <InputGroup>
                <InputLeftAddon>weevite.de/event/</InputLeftAddon>
                <Input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                />
            </InputGroup>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              _loading={loading}
              onClick={handleCreateOccasion}
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
