import React from 'react';
import { Heading, Box, Button, useBreakpointValue } from '@chakra-ui/react';

import { Section } from 'components/sections';

export function Author({ name, position }) {
  // const value = useBreakpointValue({ base: '111px', md: '11px' })

  return (
    <Section delay={0.1}>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1} textAlign="center" >
        <Heading as="h3" variant="section-title">
          {name}
        </Heading>
        <Heading 
          as="h6" 
          variant="sub-text"
          // fontSize={value}
          // fontSize={['111px', '17px', 'lg', 'lg']}
          // fontSize={{ base: 'full', md: 'auto' }}
          // width={{ base: 'full', md: 'auto' }}
          // mt={['-20px', '-60px', '-120px']}
          >
          {position}
        </Heading>
      </Box>
    </Box>
    </Section>
  );
}
