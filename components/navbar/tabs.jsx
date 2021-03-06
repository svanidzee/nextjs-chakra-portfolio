import React from 'react';
import { Stack } from '@chakra-ui/react';

import { LinkItem } from './link-item';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Works', href: '/works' },

];

export function Tabs ({ path }) {
  const ariaCurrent = items.href === path ? 'page' : undefined;

  return (
    <Stack
      as="nav"
      aria-label="Main navigation"
      direction={{ base: 'column', md: 'row' }}
      display={{ base: 'none', md: 'flex' }}
      width={{ base: 'full', md: 'auto' }}
      align="right"
      mt={{ base: 4, md: 0 }}
      ml="33em"
    >
      {/*  */}
      {items.map((item) => (
        <LinkItem
          key={item.label}
          aria-current={ariaCurrent}
          _focus={{ boxShadow: 'none' }}
          href={item.href}
        >
          {item.label}
        </LinkItem>
      ))}
    </Stack>
  );
}
