import { chakra, Box, Text, IconButton, Flex, HStack } from "@chakra-ui/react";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <Flex direction="column">
      <Box align="center" fontSize="sm">
        <Text textAlign="center" fontSize="sm">
          Built with
          <chakra.span fontWeight="semibold" color="#64ffda">
            Next.js
          </chakra.span>{" "}
          &{" "}
          <chakra.span fontWeight="semibold" color="#64ffda">
            Chakra UI
          </chakra.span>
        </Text>
      </Box>
      <HStack justifyContent="center" mt={3}>
        <IconButton
          aria-label="Toggle theme"
          size="md"
          icon={<IoLogoGithub />}
        ></IconButton>
        <IconButton
          aria-label="Toggle theme"
          size="md"
          icon={<IoLogoLinkedin />}
          mr={5}
          _focus={{
            border: "none",
          }}
        ></IconButton>
        <IconButton
          aria-label="Toggle theme"
          size="md"
          icon={<IoLogoTwitter />}
          mr={5}
          _focus={{
            border: "none",
          }}
        ></IconButton>
      </HStack>
    </Flex>
  );
};

export default Footer;
