import {
  Badge,
  Box,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Card({ data }) {
  return (
    <LinkBox
      position="relative"
      display="flex"
      data-group
      gap="2rem"
      border="1px"
      borderColor="gray.500"
      borderRadius="10px"
      padding={10}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="flex-start"
      transition="background 0.1s ease-in-out"
    >
      <Box>
        <Box
          position="relative"
          rounded="lg"
          overflow="hidden"
          width="18.75rem"
          height="10.5rem"
        >
          <Image
            src={useColorModeValue(`${data.bg[1].url}`, `${data.bg[0].url}`)}
            // src={bg[0].url}
            // transition="0.3s"
            // borderRadius="10px 10px 0px 0px"
            alt="project image"
            // alt="dsdfsdf"
            // src={data.bg}
            layout="fill"
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
      </Box>

      <Stack spacing="4" marginTop="2" zIndex="1">
        <Heading as="h6" fontSize="15px">
          <LinkOverlay as={Link} href="" isExternal>
            {data.name}
          </LinkOverlay>
        </Heading>

        <Text fontSize="20px" maxWidth={{ md: "33.5rem" }}>
          {data.description}
        </Text>

        <HStack spacing="2">
          {data.stack.map((s, i) => (
            <Badge key={i} variant="solid" colorScheme="purple">
              {s}
            </Badge>
          ))}
          <LinkOverlay as={Link} href={data.githubUrl} isExternal>
            <FaGithub aria-label="github" size="20" />
          </LinkOverlay>
        </HStack>
      </Stack>
    </LinkBox>
  );
}
