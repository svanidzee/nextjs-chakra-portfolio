import { Heading } from "@chakra-ui/react";

import { Paragraph } from "../base/paragraph";
import { Section } from "./section";

export function Hobbies({ hobbiesTitle, hobbies }) {
  return (
    <Section delay={0.3}>
      <Heading as="h1" variant="section-title">
        {hobbiesTitle}
      </Heading>
      <Paragraph>{hobbies}</Paragraph>
    </Section>
  );
}
