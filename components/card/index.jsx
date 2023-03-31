import {
  Text,
  Stack,
  Divider,
  Link,
  Wrap,
  WrapItem,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactGA from "react-ga";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { Image } from "components/image";

export function Card(props) {
  console.log(props);
  const { githubUrl, name, stack, bg } = props;

  const handleClick = (event) => {
    ReactGA.event({
      category: "click",
      action: event,
    });
  };

  return (
    <Stack
      as={motion.div}
      bg="secondary"
      borderRadius="10px"
      border="1px"
      borderColor={{ base: "#333", md: "borderColor" }}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ ease: "ease-in-out", duration: 1.5 }}
    >
      <Link
        href={githubUrl}
        isExternal
        _hover={{
          textDecoration: "none",
        }}
      >
        <Image
          width={1250}
          height={500}
          src={useColorModeValue(`${bg[0].url}`, `${bg[1].url}`)}
          transition="0.3s"
          borderRadius="10px 10px 0px 0px"
          alt="project image"
        />
        <Stack px={4} py={2}>
          <Stack isInline justifyContent="space-between" alignItems="center">
            <Text
              fontSize={[15, 15, 23, 23, 23, 23]}
              fontWeight={600}
              color="displayColor"
            >
              {name}
            </Text>
            <Link
              href="/"
              color="white"
              onClick={() => handleClick("githublink")}
              isExternal
            >
              <FaGithub aria-label="github" size="20" />
            </Link>
          </Stack>
          <Divider />
          <Wrap spacing={1} marginBottom="auto">
            <WrapItem gap={2}>
              <Badge
                colorScheme={useColorModeValue("blackAlpha", "green")}
                textTransform="none"
                fontSize={12}
              >
                {stack[0]}
              </Badge>
            </WrapItem>
          </Wrap>
        </Stack>
      </Link>
    </Stack>
  );
}
