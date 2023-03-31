import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import { Navbar } from "components/navbar";
import { Footer } from "components/footer";

export function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Irakli Svanidze's - personal portfolio homepage"
        />
        <meta property="og:site_name" content="Irakli Svanidze" />
        <meta name="author" content="Irakli Svanidze" />
        <meta name="og:title" content="Takuya Matsuyama" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Personal website" />
        <title>Irakli Svanidze - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt="14">
        {children}
        <Footer />
      </Container>
    </Box>
  );
}
