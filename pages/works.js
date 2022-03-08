import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import netflix from "../public/images/works/netflix.PNG";
import ecommerce from "../public/images/works/ecommerceredux.PNG";
import ecomreducer from "../public/images/works/ecommerce.PNG";
import portfolio from "../public/images/works/portfolio.PNG";

const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW="3xl">
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="portfolio"
              thumbnail={portfolio}
              title="Portfolio"
              red="https://github.com/svanidzee/nextjs-chakra-portfolio"
            >
              Personal Portfolio built with Next.js and Chakra U
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="netflix"
              title="Netflix Clone"
              thumbnail={netflix}
              red="https://github.com/svanidzee"
            >
              Netflix Clone built with Next.js
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="fourpainters"
              title="Shopping Cart"
              thumbnail={ecommerce}
              red="https://youtube.com"
            >
              Mini-ecommerc site built with React.js, MUI, react-router,
              redux-toolkit, json-server
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="fourpainters"
              title="Shopping Cart"
              thumbnail={ecomreducer}
              red="https://twitter.com"
            >
              Same mini ecommerce app built with React.js, MUI, React
              context-api, useReducer
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
export { getServerSideProps } from "../components/chakra";
