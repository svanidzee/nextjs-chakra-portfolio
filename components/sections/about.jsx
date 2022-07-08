import React from 'react';
import { Heading } from '@chakra-ui/react';

import { Section } from 'components/sections/section';
import { Paragraph } from 'components/paragraph';

export function About ({ aboutMe = [] }) {
  return (
    <div>
      {aboutMe.map((item) => (
        <Section delay={0.1} key={item.id}>
          <Heading as="h3" variant="section-title" textAlign="left" mr="15px">
            {item.title}
          </Heading>
          <Paragraph>
            {item.content.text}
          </Paragraph>
        </Section>
      ))}
    </div>
  );
}
