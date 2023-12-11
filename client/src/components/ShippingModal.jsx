import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import Request from "../Helpers/request";

function ShippingModal({ users, shipping, delivery, onSetDelivery }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const request = new Request();

  console.log(delivery)

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/users/${users[0].id}`;
    const payload = { delivery: delivery === "true" };

    request.patch(url, payload)
      .then(() => {})
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <>
      <a
        className="text-xs text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer"
        onClick={onOpen}
      >
        Change
      </a>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select transport mode</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="text-sm pb-6">Our team will get in touch to arrange after the purchase is completed.</p>
            <p className="text-sm pb-6">Price includes transport, export documentation, customs, and cleaning.</p>
            <RadioGroup
              className=" pb-2"
              onChange={onSetDelivery}
              value={delivery}
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
          </ModalBody>

          <ModalFooter>
          <button
              className="bg-[#ffb46e] hover:bg-[#ffc38b] font-bold py-2 px-4 rounded mt-3 block w-full mx-auto"
              mr={3}
              onClick={handleSubmit}
            >
              Update
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ShippingModal;
