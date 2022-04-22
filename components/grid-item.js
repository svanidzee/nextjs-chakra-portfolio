import Image from "next/image";

import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Wrap,
  WrapItem,
  Badge,
  Flex,
  Tooltip,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

import { IoLogoGithub } from "react-icons/io5";

export const WorkGridItem = ({ children, title, thumbnail, onOpen, red }) => (
  <Box w="100%" textAlign="left" cursor="pointer" onClick={onOpen}>
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      loading="lazy"
    />
    <Flex spacing={1} direction="row" alignItems="center" mb={2}>
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <Tooltip label="Chakra-UI">
        <ChakraLink href={red} display="flex" ml={1} isExternal>
          <Icon color="MenuText" fontSize="2xl">
            <IoLogoGithub />
          </Icon>
        </ChakraLink>
      </Tooltip>
    </Flex>
    <Wrap spacing={1} marginBottom="auto">
      <WrapItem>
        <Badge variant="subtle" colorScheme="green" mb={2}>
          FRONTEND
        </Badge>
      </WrapItem>
    </Wrap>
    <Text fontSize={14}>{children}</Text>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
