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
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import NextLink from "next/link";
import Feature1 from "components/landing/feature1";
import Feature2 from "components/landing/feature2";
import OpenSource from "components/landing/open-source";
import Sponsors from "components/landing/sponsors";

const Home: NextPage = (props: any) => {
  return (
    <SiteLayout>
      <PageHead title="Build in Surrey" />
      {/* <Feature1 /> */}
      <Feature2 />
    </SiteLayout>
  );
};

export default Home;
