import NextLink from "next/link";
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
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail, onOpen }) => (
  <Box w="100%" textAlign="left" cursor="pointer" onClick={onOpen}>
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
    />
    <Flex
      spacing={1}
      marginBottom="auto"
      direction="row"
      alignItems="center"
      mb={2}
    >
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <NextLink href="/" scroll={false}>
        <LinkBox
          ml={2}
          mt={3}
          cursor="pointer"
          variant="ghost"
          colorScheme="teal"
          size="sm"
          href="/"
          title="See the project on GitHub"
          isExternal
          aria-label="See project on GitHub"
        >
          <IoLogoGithub />
        </LinkBox>
      </NextLink>
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
