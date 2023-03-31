import NextLink from "next/link";
import {
  Box,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const items = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
];

export function MobileMenu({ handleMenuClick }) {
  return (
    <Box flex={1} align="left">
      <Box display={{ base: "inline-block", md: "none" }}>
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
            {items.map((item, i) => (
              <NextLink key={i} href={item.href} passHref prefetch={false}>
                <MenuItem as="a">{item.label}</MenuItem>
              </NextLink>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
