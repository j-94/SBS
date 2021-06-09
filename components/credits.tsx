import { Text, Icon, Link, VStack, HStack } from "@chakra-ui/react";

import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Credits() {
  return (
    <VStack>
      <Text
        maxW="560px"
        mx="auto"
        textAlign="center"
        opacity={0.7}
        fontSize="sm"
        mt="16"
        mb={3}
      >
        Proudly developed in Surrey by{" "}
        <Link
          isExternal
          rel="noreferrer"
          href={process.env.twitterUrl}
          aria-label="Anuoluwapo Abraham"
        >
          Surrey.Build
        </Link>
      </Text>
      <HStack spacing={4}>
        <Link
          isExternal
          rel="noreferrer"
          href={process.env.twitterUrl}
          aria-label="Twitter Profile"
        >
          <Icon as={FaTwitter} boxSize={4} />
        </Link>
        <Link
          isExternal
          rel="noreferrer"
          href={process.env.linkedinUrl}
          aria-label="Linkedin Profile"
        >
          <Icon as={FaLinkedin} boxSize={4} />
        </Link>
        <Link
          isExternal
          rel="noreferrer"
          href={`mailto:${process.env.emailAddress}`}
          aria-label="Email Address"
        >
          <Icon as={FaEnvelope} boxSize={4} />
        </Link>
      </HStack>
    </VStack>
  );
}
