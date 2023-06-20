import { Heading, Wrap, WrapItem } from "@chakra-ui/react";

import { Section } from "./section";

export function Stack({ toolsTitle, stacks }) {
  return (
    <Section delay={0.1}>
      <Heading as="h1" variant="section-title">
        {toolsTitle}
      </Heading>

      <Wrap mt="10px">
        {stacks.map((stack) => (
          <WrapItem key={stack} fontSize="23px" fontWeight="500">
            {stack}
          </WrapItem>
        ))}
      </Wrap>
    </Section>
  );
}
