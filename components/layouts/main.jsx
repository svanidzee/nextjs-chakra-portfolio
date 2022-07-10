import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import { Navbar } from 'components/navbar/navbar';
import { Footer } from 'components/footer/footer';

export function Layout ({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage</title>
        <meta
          name="description"
          content="Irakli Svanidze's - personal portfolio homepage"
        />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
}
