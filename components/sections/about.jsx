import React from 'react';
import { Heading } from '@chakra-ui/react';

import { Section } from 'components/sections';
import { Paragraph } from 'components/paragraph';

export function About({ title, content }) {
  return (
    <div>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          {title}
        </Heading>
        <Paragraph>{content}</Paragraph>
      </Section>
    </div>
  );
}
