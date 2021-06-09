import { NextPage } from "next";
import Image from "next/image";
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
  SimpleGrid,
  GridItem,
  useColorModeValue,
  ControlBox,
  Heading,
  Center,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import NextLink from "next/link";
import Feature1 from "components/landing/feature1";
import Feature2 from "components/landing/feature2";
import OpenSource from "components/landing/open-source";
import Sponsors from "components/landing/sponsors";
import CardGrid from "components/landing/cardgrid";

const Home: NextPage = (props: any) => {
  return (
    <SiteLayout>
      <PageHead title="Build in Surrey" />

      <Box
        as="section"
        pt={{ base: "6rem", md: "10rem" }}
        pb={{ base: "0", md: "0rem" }}
        px={{ base: "2rem", sm: "5rem" }}
      >
        <Box>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h1
              maxW="680px"
              mx="auto"
              fontSize={{
                base: "2rem",
                sm: "3rem",
                lg: "4rem",
              }}
              fontFamily="heading"
              letterSpacing="tight"
              fontWeight="bold"
              mb="16px"
              lineHeight="1.2"
            >
              Lets Build
              <Box
                as="span"
                bgGradient="linear(to-r, brand.400, brand.600)"
                bgClip="text"
              >
                {" "}
                Homes{" "}
              </Box>
              in Surrey
            </chakra.h1>

            <Text
              maxW="560px"
              mx="auto"
              opacity={0.7}
              fontSize={{ base: "lg", lg: "xl" }}
              mt="6"
            >
              Surrey.build is a accessible and reusable building society that
              are commonly used for building projects in Surrey.
            </Text>

            <Text
              maxW="560px"
              mx="auto"
              opacity={0.7}
              fontSize={{ base: "md", lg: "xl" }}
              mt="6"
            >
              How can we help you today?:
            </Text>
          </Box>
        </Box>
      </Box>
      <CardGrid />
      {/* <Feature1 />
        <Feature2 />
        <OpenSource contributors={props.contributors} />
        <Sponsors sponsors={props.sponsors} />  */}
      <Credits />
    </SiteLayout>
  );
};

export default Home;
