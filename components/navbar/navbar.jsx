import React, { useCallback } from 'react';
import {
  Container,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

import useSound from 'use-sound';
import menuOpenSound from 'public/sounds/menu-open.mp3';

import { Tabs } from 'components/navbar/tabs';
import { MobileMenu } from 'components/navbar/menu';

export function Navbar (props) {
  const { path } = props;
  const [play] = useSound(menuOpenSound);

  const handleMenuClick = useCallback(
    () => {
      play();
    },
    [play],
  );

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#212121')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justifyContent="flex-start"
      >

        <Tabs path={path} />
        <MobileMenu handleMenuClick={handleMenuClick} />
      </Container>
    </Box>
  );
}
