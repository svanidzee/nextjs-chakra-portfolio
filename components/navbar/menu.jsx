import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Link,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { ThemeToggleButton } from '../theme-toggle-button';

export function MobileMenu ({ handleMenuClick }) {
  return (
    <Box flex={1} align="right">
      <ThemeToggleButton />

      <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
        <Menu isLazy id="navbar-menu">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
            onClick={handleMenuClick}
          />
          <MenuList
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            backgroundColor={useColorModeValue('ghostwhite', '#212121')}
          >
            <NextLink href="/" passHref prefetch={false}>
              <MenuItem as={Link}>Home</MenuItem>
            </NextLink>
            <NextLink href="/works" passHref prefetch={false}>
              <MenuItem as={Link}>Works</MenuItem>
            </NextLink>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
