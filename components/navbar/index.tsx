import React, { useContext } from "react";
import { ThemeContext } from "theme/context";
import {
  chakra,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
  Icon,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  BoxProps,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import {
  FaMoon,
  FaSun,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import SponsorButton from "./sponsor-button";
import DocSearch from "../doc-search";
import { MobileNavButton, MobileNavContent } from "./mobile-nav";
import Logo from "components/navbar/logo";
import NextLink from "next/link";

const HeaderContent = () => {
  const { brand, setBrand, presets } = useContext(ThemeContext);
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const mobileNavBtnRef = React.useRef(null);

  useUpdateEffect(() => {
    mobileNavBtnRef?.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <React.Fragment>
      <Flex w="full" h="full" px="6" align="center" justify="space-between">
        <Flex align="center" w="full">
          <NextLink href="/" passHref>
            <Box cursor="pointer">
              <Logo />
              {/* <chakra.span
                fontSize="1.3rem"
                fontFamily="heading"
                fontWeight="bold"
                style={{ float: "right" }}
                display={["none", "block", "none", "block"]}
              >
                <chakra.span
                  color={useColorModeValue("brand.500", "brand.400")}
                  letterSpacing="widest"
                >
                  Surrey
                </chakra.span>{" "}
                Build
              </chakra.span> */}
            </Box>
          </NextLink>
        </Flex>

        <DocSearch w="full" display={{ base: "none", md: "flex" }} />

        <Flex
          justify="flex-end"
          w="full"
          maxW="824px"
          align="center"
          color="gray.400"
        >
          <HStack display="flex">
            <IconButton
              as="a"
              href={process.env.twitterChoc}
              target="_blank"
              rel="noreferrer"
              size="md"
              fontSize="lg"
              aria-label="Surrey Build on twitter"
              variant="ghost"
              color="current"
              icon={<FaTwitter />}
            />
            <IconButton
              as="a"
              href={process.env.discordUrl}
              target="_blank"
              rel="noreferrer"
              size="md"
              fontSize="lg"
              aria-label="Surrey Build on Facebook"
              variant="ghost"
              color="current"
              icon={<FaFacebook />}
            />
            <IconButton
              as="a"
              href={process.env.githubChoc}
              target="_blank"
              rel="noreferrer"
              size="md"
              fontSize="lg"
              aria-label="Surrey Build's Instagram"
              variant="ghost"
              color="current"
              icon={<FaInstagram />}
            />
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <Menu closeOnSelect={false}>
              <MenuButton
                as={IconButton}
                size="md"
                fontSize="lg"
                aria-label="Switch Brand Color"
                variant="ghost"
                color="current"
                icon={<IoColorPalette />}
              ></MenuButton>
              <MenuList minWidth="240px">
                <MenuOptionGroup
                  value={brand}
                  onChange={(b: string) => setBrand(b)}
                >
                  {Object.keys(presets()).map((col, cid) => (
                    <MenuItemOption
                      key={cid}
                      value={col}
                      textTransform="capitalize"
                    >
                      <Flex>
                        <Box
                          rounded="md"
                          shadow="lg"
                          my="auto"
                          bg={presets(col)[500]}
                          boxSize={5}
                          mr={5}
                        />
                        {col}
                      </Flex>
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </HStack>
          <SponsorButton ml="5" />
          <MobileNavButton
            ref={mobileNavBtnRef}
            aria-label="Open Menu"
            onClick={mobileNav.onOpen}
          />
        </Flex>
      </Flex>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </React.Fragment>
  );
};

const Header = (props: BoxProps) => {
  const bg = useColorModeValue("white", "choc.bg");
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref?.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "md" : undefined}
      transition="all 0.5s ease-in-out"
      pos="fixed"
      top="0"
      zIndex="modal"
      bg={y > height ? bg : "transparent"}
      left="0"
      right="0"
      borderTop="0px solid"
      borderTopColor="brand.400"
      w="full"
      {...props}
    >
      <chakra.div h="4.5rem" mx="auto">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
};

export default Header;
