import { NextPage } from "next";
import path from "path";
import * as fs from "fs";
import PageHead from "components/head";
import SiteLayout from "components/layouts/site";
import Credits from "components/credits";
import {
  Box,
  Text,
  Button,
  chakra,
  Stack,
  useColorModeValue,
  Link,
  Flex,
  Center,
  Heading,
  ControlBox,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import NextLink from "next/link";
import Feature1 from "components/landing/feature1";
import Feature2 from "components/landing/feature2";

import Form from "components/forms/hybridform";
import ChocoForm from "components/forms/chocoform";
import { Vertical } from "components/forms/steps";
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  PinInputControl,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from "formik-chakra-ui";
import servicecard from "components/forms/servicecard";
import Image from "next/image";

const Home: NextPage = (props: any) => {
  return (
    <SiteLayout>
      <PageHead title="Build in Surrey" />
      <ButtonGroup>
        <SubmitButton>Submit</SubmitButton>
        <ResetButton>Reset</ResetButton>
      </ButtonGroup>
      <Center py={6}>
        <Box
          as="button"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{ bg: "#ebedf0" }}
          _active={{
            bg: "#dddfe2",
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              layout={"fill"}
            />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              Rennovation
            </Heading>
          </Stack>
        </Box>
        <ControlBox />
      </Center>
    </SiteLayout>
  );
};

export default Home;
