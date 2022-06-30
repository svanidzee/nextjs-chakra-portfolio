import { Container, Heading, Box, SimpleGrid, Text } from '@chakra-ui/react';
import Paragraph from 'components/paragraph';
import Layout from 'components/layouts/article';
import Section from 'components/section';

const Home = () => (
  <Layout>
    <Container maxW="3xs4">
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} textAlign="center">
          <Heading as="h2" variant="page-title">
            Irakli Svanidze
          </Heading>
          <p>Junior Front-End Devoloper</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" textAlign="left" mr="15px">
          About Me
        </Heading>
        <Paragraph>
          Hello Everyone wave! I&apos;m Irakli Svanidze, a passionate beginner
          on frontend web developer who likes following best practices when
          doing Frontend Mentor projects and helping people by giving them
          truthful feedbacks. Besides coding, I also enjoy reading comics and
          playing video games I love building things with code, especially a
          website.I am learning on how to create websites to get a job as a
          Junior Frontend Web Developer. <br />
          Goals of 2022 I want to learn English. Now I watch English youtube
          channels and articles everyday and write English articles about
          program technology each week, I hope I can prepared in 2022. I also
          want to contribute more open source projects so make I can improve my
          skills of program.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" align="left">
          Technologies I Use
        </Heading>
        <SimpleGrid columns={5} spacingX="0px" spacingY="2px">
          <Text>HTML</Text>
          <Text>CSS</Text>
          <Text>Javascript</Text>
          <Text>React</Text>
          <Text>Next Js</Text>
          <Text>Mui</Text>
          <Text>Chakra UI</Text>
          <Text>Theme UI</Text>
          <Text>Semantic UI</Text>
          <Text>Redux</Text>
          <Text>Redux-toolkit</Text>
          <Text>Git</Text>
          <Text>Github</Text>
          <Text>npm</Text>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" align="left">
          Hobbies 🎶
        </Heading>
        <Paragraph>
          In my free time I love to experiment with Ableton Live 🎹. It has
          always been my dream to build my own home studio
        </Paragraph>
      </Section>
    </Container>
  </Layout>
);

export default Home;

