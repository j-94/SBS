import Image from "next/image";
import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";

const ServiceCard = ({
  address = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  name = "build",
}) => {
  return (
    <Box pt={5}>
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
        <Box mt={-6} mx={-6} mb={6}>
          <Image src={address} width={700} height={475} />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {name}
          </Heading>
        </Stack>
      </Box>
    </Box>
  );
};

export default ServiceCard;
