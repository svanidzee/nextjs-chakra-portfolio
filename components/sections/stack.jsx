import React from 'react';
import { Box, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { Section } from 'components/sections';
import { Paragraph } from 'components/paragraph';

export function Stack({ toolsTitle, toolsContent, stacks }) {
  return (
    <Section delay={0.1}>
      <Box as="section">
        <Box mb="2">
          <Heading as="h3" variant="section-title">
            {toolsTitle}
          </Heading>
          <Paragraph>{toolsContent}</Paragraph>
        </Box>

        <Wrap spacing={['3', '4', '4', '4', '4', '4']}>
          {stacks.map((stack) => (
            <WrapItem key={stack} fontSize="2xl">
              {stack}
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Section>
  );
}
