import React from 'react';
import { Heading } from '@chakra-ui/react';

import { Section } from 'components/sections';
import { Paragraph } from 'components/paragraph';

export function Hobbies({ hobbiesTitle, hobbies }) {
  return (
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        {hobbiesTitle}
      </Heading>
      <Paragraph>{hobbies}</Paragraph>
    </Section>
  );
}
