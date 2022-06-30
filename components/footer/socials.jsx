import React from "react";
import { chakra, Tooltip, VisuallyHidden } from "@chakra-ui/react";

const SocialIcons = ({ children, href, label }) => {
  return (
    <Tooltip label={label}>
      <chakra.button
        rounded="full"
        w="48px"
        h="48px"
        cursor="pointer"
        as="a"
        rel="noopener"
        href={href}
        target={"_blank"}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        transition="background 0.3s ease"
        _hover={{
          bg: "transparent",
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </Tooltip>
  );
};

export default SocialIcons;
