import { Link, Stack, Button } from "@chakra-ui/react";
import ReactGA from "react-ga";

const footerItems = [
  {
    id: 1,
    link: "https://github.com/svanidzee",
    title: "Github",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/svanidzeee",
    title: "Linkedin",
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1rtwfasSqth4m-BWNKhjRqh_cNeBX3coK/view?usp=share_link",
    title: "Resume",
  },
];

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
        {footerItems?.map((item) => (
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
