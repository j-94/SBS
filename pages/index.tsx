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
  Flex,
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

// import graphpaper from './pages/graph-paper.svg';

const Home: NextPage = (props: any) => {
  return (
    <SiteLayout>
      <PageHead title="Build in Surrey" />
      <Box
        height="100vh"
        style={{
          backgroundImage: `url(${"https://res.cloudinary.com/j94/image/upload/o_57/v1623271799/Graph-paper_tw6hkq.svg"})`,
        }}
      >
        <Box
          as="section"
          pt={{ base: "6rem", md: "6rem" }}
          pb={{ base: "0", md: "0rem" }}
          px={{ base: "2rem", sm: "2rem" }}
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
                Let's{" "}
                <Box
                  as="span"
                  bgGradient="linear(to-r, brand.400, brand.600)"
                  bgClip="text"
                >
                  Build
                </Box>
                .Surrey
              </chakra.h1>

              <Text
                maxW="560px"
                mx="auto"
                fontSize={{ base: "lg", lg: "xl" }}
                mt="6"
              >
                Surrey.build is a accessible and reusable building society that
                are commonly used for building projects in Surrey.
              </Text>

              <Text
                maxW="560px"
                mx="auto"
                fontSize={{ base: "lg", lg: "xl" }}
                mt="6"
              >
                <Box
                  as="span"
                  bgGradient="linear(to-r, brand.400, brand.600)"
                  bgClip="text"
                >
                  {" "}
                  How can we help you today?:
                </Box>
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
      </Box>
    </SiteLayout>
  );
};

export default Home;
