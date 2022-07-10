import React from 'react';
import {
  Heading, Box, Text,
} from '@chakra-ui/react';

export function Author ({ author = [] }) {
  return (
    <Box display={{ md: 'flex' }}>
      {author.map((item) => (
        <Box flexGrow={1} textAlign="center" key={item.id}>
          <Heading as="h2" variant="page-title" size="lg" fontWeight={500}>
            {item.name}
          </Heading>
          <Text>{item.position}</Text>
        </Box>
      ))}
    </Box>
  );
}
