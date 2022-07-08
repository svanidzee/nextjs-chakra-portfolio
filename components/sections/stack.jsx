import React from 'react';
import { Heading, WrapItem, SimpleGrid } from '@chakra-ui/react';

import { Section } from 'components/sections/section';

export function Stack ({ tools = [] }) {
  return (
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title" align="left">
        Technologies I Use
      </Heading>
      <SimpleGrid as="ul" columns={5} spacingX="90px" spacingY="2px">
        {tools.map((tool) => (
          <WrapItem as="li" fontFamily="heading" color="sage.base" key={tool} minW={222}>
            {tool}
          </WrapItem>
        ))}
      </SimpleGrid>
    </Section>
  );
}
