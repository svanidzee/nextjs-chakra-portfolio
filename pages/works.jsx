import { Stack, Heading, Text, SimpleGrid, Divider, Flex } from '@chakra-ui/react'

import Card from 'components/card'
import { Layout } from 'components/layouts/article';
import { Section } from 'components/sections';
import { getWorks } from '../lib/graphcms';

export default function Works({ work }) {
  console.log(work)
  return (
    <Layout title="Works">
      <Section delay={0.1}>
        <Stack
          spacing="10"
          justifyContent="center"
        >
          <Stack spacing="5">
            {' '}
            <Heading
              color="displayColor"
              as="h3"
              variant="section-title"
            >
              Projects
            </Heading>

            <Text fontSize={{ base: 'sm', md: 'md' }}>
              I love building projects and practice my engineering skills,
              here's an archive of things that I've worked on.
            </Text>
            <Divider />
          </Stack>
          <SimpleGrid 
            columns={{ sm: 1, md: 1 }} 
            spacing="8"
            >
            <Card {...work} />
          </SimpleGrid>
        </Stack>
      </Section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const work = await getWorks();

  return {
    props: {
      work: work[0],
    },
  };
};
