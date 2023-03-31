import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";

export function LinkItem({ href, path, target, children, ...props }) {
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
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
}
