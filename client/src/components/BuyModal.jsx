import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

function BuyModal({ tractors }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        className="border border-black font-bold py-2 px-4 rounded mt-3 block w-full mx-auto"
        onClick={onOpen}
      >
        Buy now
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1 className="text-xl">Buy now</h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="text-sm text-gray-500 pb-2">
              You can buy this item immediately with the price below
            </p>
            <p className="text-3xl font-bold">
              £{tractors[0].price.toLocaleString()}
            </p>
            <p className="text-gray-500 text-sm pt-2">Transport mode</p>
            <RadioGroup>
            <Stack>
              <Radio value="true" colorScheme="blue">
                Delivery to your yard
              </Radio>
              <Radio value="false" colorScheme="blue">
                Own transportation
              </Radio>
            </Stack>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <button
              className="bg-[#ffb46e] hover:bg-[#ffc38b] font-bold py-2 px-4 rounded mt-3 block w-full mx-auto"
              mr={3}
              onClick={onClose}
            >
              Confirm
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BuyModal;
