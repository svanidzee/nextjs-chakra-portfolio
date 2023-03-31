import { Stack, Heading, Text, SimpleGrid, Divider } from "@chakra-ui/react";

import { Card } from "components/card";
import { Page } from "components/layouts";
import { Section } from "components/sections";
import { getWorks } from "lib/graphcms";

export default function Works({ work }) {
  return (
    <Page title="Works">
      <Section delay={0.1}>
        <Stack spacing="10" justifyContent="center">
          <Stack spacing="5">
            {" "}
            <Heading color="displayColor" as="h3" variant="section-title">
              Projects
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
              I love building projects and practice my engineering skills,
              here&apos;s an archive of things that I&apos;ve worked on.
            </Text>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 1 }} spacing="8">
            <Card {...work} />
          </SimpleGrid>
        </Stack>
      </Section>
    </Page>
  );
}

export const getStaticProps = async () => {
  const work = await getWorks();
  return {
    props: {
      work: work[0],
    },
  };
};
