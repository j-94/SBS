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
import ServiceCard from "components/landing/servicecard";

const Home: NextPage = (props: any) => {
  return (
    <SiteLayout>
      <PageHead title="Build in Surrey" />
      <SimpleGrid
        display={{ base: "initial", md: "grid" }}
        columns={{ md: 2 }}
        spacing={{ md: 6 }}
      >
        <Box pt={5}>
          <GridItem colSpan={{ md: 1 }}>
            <SimpleGrid columns={6} spacing={5}>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard />
              </Box>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard />
              </Box>
            </SimpleGrid>
          </GridItem>
        </Box>{" "}
        <Box pt={5}>
          <GridItem colSpan={{ md: 1 }}>
            <SimpleGrid columns={6} spacing={5}>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard />
              </Box>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard />
              </Box>
            </SimpleGrid>
          </GridItem>
        </Box>
      </SimpleGrid>
    </SiteLayout>
  );
};

export default Home;
