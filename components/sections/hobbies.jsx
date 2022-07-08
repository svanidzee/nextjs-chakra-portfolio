import React from 'react';
import { Heading } from '@chakra-ui/react';

import { Section } from 'components/sections/section';
import { Paragraph } from 'components/paragraph';

export function Hobbies ({ hobbies = [] }) {
  return (
    <div>
      {hobbies.map((item) => (
        <Section delay={0.3} key={item.id}>
          <Heading as="h3" variant="section-title" align="left">
            {item.title}
          </Heading>
          <Paragraph>
            {item.content}
          </Paragraph>
        </Section>
      ))}
    </div>
  );
}
