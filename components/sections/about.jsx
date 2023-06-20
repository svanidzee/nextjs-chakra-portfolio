import { Heading } from "@chakra-ui/react";

import { Paragraph } from "../base/paragraph";
import { Section } from "./section";

export function About({ title, content }) {
  return (
    <div>
      <Section delay={0.1}>
        <Heading as="h1" variant="section-title">
          {title}
        </Heading>
        <Paragraph>{content}</Paragraph>
      </Section>
    </div>
  );
}
