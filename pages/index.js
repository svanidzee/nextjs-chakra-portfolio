import { Container, Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="3xs4">
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1} textAlign="center">
          <Heading as="h2" variant="page-title">
            Irakli Svanidze
          </Heading>
          <p>Junior Front-End Devoloper</p>
        </Box>
      </Box>
    </Container>
  );
}
