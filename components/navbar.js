import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import ThemeToggleButton from "./theme-toggle-button";

import { HamburgerIcon } from "@chakra-ui/icons";
import useSound from "use-sound";
import menuOpenSound from "../public/sounds/menu-open.mp3";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false} prefetch={false}>
      <Link
        p={2}
        color={useColorModeValue("gray200", "whiteAlpha.900")}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;
  const [play] = useSound(menuOpenSound);

  const handleMenuClick = () => {
    play();
  };

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#212121")}
      css={{ backdropFilter: "blur(10px)" }}
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
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          align="right"
          mt={{ base: 4, md: 0 }}
          ml="33em"
        >
          <LinkItem _focus={{ boxShadow: "none" }} href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem _focus={{ boxShadow: "none" }} href="/works" path={path}>
            Works
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
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
                backgroundColor={useColorModeValue("ghostwhite", "#212121")}
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
      </Container>
    </Box>
  );
};

export default Navbar;
