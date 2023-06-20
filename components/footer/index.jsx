import { Link, Stack, Button, Divider } from "@chakra-ui/react";
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
    <Stack justifyContent="flex-start" alignItems="center" mt="10">
      <Divider orientation="horizontal" size="xl" />
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
              onClick={() => handleClick("introduction_github")}
              variant="link"
              position="static"
              color="footer.dim"
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
