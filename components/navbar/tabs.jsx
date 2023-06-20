import { Stack } from "@chakra-ui/react";

import { LinkItem } from "../base/link.item";

const items = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
];

export function Tabs() {
  return (
    <Stack
      as="nav"
      aria-label="Main navigation"
      direction={{ base: "column", md: "row" }}
      display={{ base: "none", md: "flex" }}
      width={{ base: "full", md: "auto" }}
    >
      {items.map((item) => (
        <LinkItem
          key={item.label}
          href={item.href}
          _focus={{ boxShadow: "none" }}
        >
          {item.label}
        </LinkItem>
      ))}
    </Stack>
  );
}
