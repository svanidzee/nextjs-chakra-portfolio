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
  Button,
  Flex,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
