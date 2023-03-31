import { Link, Stack, Button } from "@chakra-ui/react";
import ReactGA from "react-ga";

import { data } from "./footer.data";

export function Footer() {
  const handleClick = (event) => {
    ReactGA.event({
      category: "click",
      action: event,
    });
  };

  return (
    <Stack justifyContent="flex-start" alignItems="center">
      <Stack isInline gap="5" mt="10">
        {data.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            isExternal
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              position="static"
              color="footer.dim"
              onClick={() => handleClick("introduction_github")}
              variant="link"
              fontSize={["md", "md", "lg", "lg"]}
              textTransform="uppercase"
              fontWeight="semibold"
              letterSpacing="wide"
            >
              {item.title}
            </Button>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
