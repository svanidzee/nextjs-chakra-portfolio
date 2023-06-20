import React, { useCallback } from "react";
import { Container, Box, Flex } from "@chakra-ui/react";

import useSound from "use-sound";
import menuOpenSound from "public/sounds/menu-open.mp3";

import { ThemeToggleButton } from "components/toggle";
import { MobileMenu, Tabs } from ".";

export function Navbar(props) {
  const [play] = useSound(menuOpenSound);

  const handleMenuClick = useCallback(() => {
    play();
  }, [play]);

  return (
    <Box
      as="header"
      aria-label="Main navigation"
      position="fixed"
      w="100%"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        justifyContent="flex-end"
        maxWidth="100ch"
        py={2}
      >
        <Flex>
          <MobileMenu handleMenuClick={handleMenuClick} />
        </Flex>
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Tabs />
          <ThemeToggleButton />
        </Flex>
      </Container>
    </Box>
  );
}
