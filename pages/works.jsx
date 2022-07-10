import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import { Layout } from 'components/layouts/article';
import { Section } from 'components/sections/section';
import { WorkGridItem } from 'components/grid-item';

import { getAllProjects } from 'lib/graphcms';

export async function getStaticProps () {
  const projects = (await getAllProjects()) || [];
  return {
    props: { projects },
  };
}

export default function Works ({ projects }) {
  return (
    <Layout title="Works">
      <Container maxW="3xl">
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          {projects.map((item) => (
            <Section delay={0.1} key={item.id}>

              <WorkGridItem
                thumbnail={item.projectImage.url}
                title={item.title}
                red={item.sourceURL}
              >
                {item.description}
              </WorkGridItem>

            </Section>
          ))}

        </SimpleGrid>
      </Container>
    </Layout>
  );
}
