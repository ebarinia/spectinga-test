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

  const totalCost =
    value === "true"
      ? tractors[0].price + shipping[0].shipping
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
            <p className="text-sm text-gray-500 pb-3">
              You can buy this item immediately with the price below
            </p>
            <p className="text-3xl font-bold pb-3">
              £{tractors[0].price.toLocaleString()}
            </p>
            <div className="bg-gray-100 pb-3 mx-[-1.35rem]">
              <p className="text-gray-500 text-sm px-5 py-2">Transport mode</p>
              <RadioGroup
                className="px-5 pb-2"
                onChange={setValue}
                value={value}
              >
                <Stack>
                  <Radio value="true" colorScheme="blue">
                    <div className="text-sm flex justify-between">
                      <p>
                        Delivery to your yard:{" "}
                        <span className="font-semibold">
                          £{shipping[0].shipping}
                        </span>
                      </p>
                    </div>
                  </Radio>
                  <Radio value="false" colorScheme="blue">
                    <p className="text-sm">
                      Own transportation:{" "}
                      <span className="font-semibold">Free</span>
                    </p>
                  </Radio>
                </Stack>
              </RadioGroup>
            </div>
            <div className="flex justify-between font-bold pt-2">
              <span className="text-sm">Total: </span>
              <span className="text-bold text-2xl">
                £{totalCost.toLocaleString()}
              </span>
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
