import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export function LinkItem({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref scroll={false} prefetch={false}>
      <Link
        fontSize="xl"
        fontWeight="medium"
        _hover={{
          textDecoration: "none",
        }}
        as="a"
        p={2}
        color={useColorModeValue("gray200", "whiteAlpha.900")}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
}
