import React, { useState } from "react";
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

function BuyModal({ tractors, shipping, users }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("false");

  const totalCost = value === "true"
  ? tractors[0].price + (shipping[0].shipping)
  : tractors[0].price;

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
            <p className="text-3xl font-bold pb-2">
              £{tractors[0].price.toLocaleString()}
            </p>
            <div className="bg-gray-100 pb-3">
            <p className="text-gray-500 text-sm pt-3 pb-3">Transport mode</p>
            <RadioGroup onChange={setValue} value={value}>
            <Stack>
              <Radio value="true" colorScheme="blue">
                <p className="text-sm">Delivery to your yard: £{shipping[0].shipping}</p>
              </Radio>
              <Radio value="false" colorScheme="blue">
                <p className="text-sm">Own transportation: £0</p>
              </Radio>
            </Stack>
            </RadioGroup>
            </div>
            <div>
                <span>Total</span>
                <span>£{totalCost.toLocaleString()}</span>
            </div>
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
