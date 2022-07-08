import React from 'react';
import {
  Heading, Box,
} from '@chakra-ui/react';

export function Author ({ author = [] }) {
  return (
    <Box display={{ md: 'flex' }}>
      {author.map((item) => (
        <Box flexGrow={1} textAlign="center" key={item.id}>
          <Heading as="h2" variant="page-title">
            {item.name}
          </Heading>
          <p>{item.position}</p>
        </Box>
      ))}
    </Box>
  );
}
