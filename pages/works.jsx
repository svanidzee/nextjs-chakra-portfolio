import { Stack, Heading, Text, Divider, Flex } from "@chakra-ui/react";

import { Card } from "../components/card";
import { Page } from "../components/layouts";
import { Section } from "../components/sections";
import { getWorks } from "../graphql/graphcms";

export default function Works({ works }) {
  return (
    <Page title="Works">
      <Section delay={0.1}>
        <Stack spacing="10" justifyContent="center">
          <Stack spacing="5">
            <Heading color="displayColor" as="h3" variant="section-title">
              Projects
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
              I love building projects and practice my engineering skills,
              here&apos;s an archive of things that I&apos;ve worked on.
            </Text>
            <Divider />
          </Stack>

          <Flex direction="column" gap="20">
            {works.map((work) => (
              <Card key={work.id} data={work} />
            ))}
          </Flex>
        </Stack>
      </Section>
    </Page>
  );
}

export const getStaticProps = async () => {
  const works = await getWorks();
  return {
    props: {
      works,
    },
  };
};
