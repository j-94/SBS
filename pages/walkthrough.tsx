import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { NextPage } from "next";
import PageHead from "components/head";
import SiteLayout from "components/layouts/site";

import splitbee from "@splitbee/web";
import ToTop from "components/to-top";
import IframeResizer from "iframe-resizer-react";
splitbee.init();

const Plan: NextPage = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SiteLayout>
      <PageHead title="Plan in Surrey" />
      <Box pt="50">
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay size="full" />
          <IframeResizer
            src="https://test-3o42g415s-jasedgw.vercel.app/?m=Uc8nCBcqLWs"
            style={{ width: "1px", minWidth: "100%" }}
          />
        </Modal>
      </Box>
    </SiteLayout>
  );
};

export default Plan;
