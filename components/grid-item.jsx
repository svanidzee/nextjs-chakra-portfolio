import React from 'react';
import Image from 'next/image';
import {
  Box,
  Text,
  Wrap,
  WrapItem,
  Badge,
  Flex,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/react';
import { Global } from '@emotion/react';
import {
  IoLogoGithub,
  // IoOpenOutline
} from 'react-icons/io5';

export function WorkGridItem ({
  thumbnail,
  title,
  red,
  children,
}) {
  return (
    <Box w="100%" textAlign="left" cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
        width={720}
        height={340}
      />
      <Flex spacing={1} direction="row" alignItems="center" mb={2}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>

        {/* {title !== 'Portfolio' ? (
          <ChakraLink href={red} display="flex" ml={1} isExternal>
            <Icon color="MenuText" fontSize="xl" mt={2}>
              <IoLogoGithub />
            </Icon>
            <Icon color="MenuText" fontSize="xl" mt={2}>
              <IoOpenOutline />
            </Icon>
          </ChakraLink>
        ) : (
          <ChakraLink
            href={red}
            display="flex"
            ml={1}
            isExternal
          >
            <Icon color="MenuText" fontSize="xl" mt={2}>
              <IoLogoGithub />
            </Icon>
          </ChakraLink>
        )} */}

        <ChakraLink
          href={red}
          display="flex"
          ml={1}
          isExternal
        >
          <Icon color="MenuText" fontSize="xl" mt={2}>
            <IoLogoGithub />
          </Icon>
        </ChakraLink>

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
}

export function GridItemStyle () {
  return (
    <Global
      styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    />
  );
}
