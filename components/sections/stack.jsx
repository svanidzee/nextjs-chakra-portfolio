import React from 'react';
import {
  Box,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export function Stack ({ tools = [] }) {
  return (
    <Box as="section" py="vGutter">
      <Box marginBottom="16">
        <Heading size="2xl" letterSpacing="tight" fontSize="70px" lineHeight="80px" fontWeight={400}>
          Tools &amp; Softwares
        </Heading>
        <Text marginTop="5" fontSize="2xl" maxWidth={{ md: '45rem' }}>
          Over the years, I had the opportunity to work with various software, tools and
          frameworks. Here are some of them:
        </Text>
      </Box>

      <Wrap spacing="6">
        {tools.map((tool) => (
          <WrapItem fontSize="larger" color="sage.base" key={tool}>
            {tool}
          </WrapItem>
        ))}
      </Wrap>
    </Box>

  );
}
