import React from 'react';
import { Stack } from '@chakra-ui/react';

import { LinkItem } from './linkItem';

export function Tabs ({ path }) {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      display={{ base: 'none', md: 'flex' }}
      width={{ base: 'full', md: 'auto' }}
      align="right"
      mt={{ base: 4, md: 0 }}
      ml="33em"
    >
      <LinkItem _focus={{ boxShadow: 'none' }} href="/" path={path}>
        Home
      </LinkItem>
      <LinkItem _focus={{ boxShadow: 'none' }} href="/works" path={path}>
        Works
      </LinkItem>
    </Stack>
  );
}
