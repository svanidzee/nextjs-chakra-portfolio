import { Heading, Box } from "@chakra-ui/react";

import { Section } from ".";

export function Author({ name, position }) {
  return (
    <Section delay={0.1}>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1} textAlign="center">
          <Heading as="h1" variant="section-title">
            {name}
          </Heading>
          <Heading as="h2" variant="sub-text">
            {position}
          </Heading>
        </Box>
      </Box>
    </Section>
  );
}
