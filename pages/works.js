import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import netflix from "../public/images/works/netflix-clone.png";
import coffestore from "../public/images/works/coffe-store.png";
import ecommerce from "../public/images/works/ecommerce-redux.png";
import ecomreducer from "../public/images/works/ecommerce-useReducer.png";
import portfolio from "../public/images/works/portfolio.png";

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
              // onOpen={onOpen}
              id="portfolio"
              thumbnail={portfolio}
              title="Portfolio"
            >
              Personal Portfolio built with Next.js and Chakra U
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              // onOpen={onOpen}
              id="netflix"
              title="Netflix Clone"
              thumbnail={netflix}
            >
              Netflix Clone built with Next.js
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              // onOpen={onOpen}
              id="coffestore"
              title="Coffe-Store"
              thumbnail={coffestore}
            >
              Coffe Store App buitl with Next.js
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              // onOpen={onOpen}
              id="fourpainters"
              title="The four painters"
              thumbnail={ecommerce}
            >
              Mini-ecommerc site built with React.js, MUI, react-router,
              redux-toolkit, json-server
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              // onOpen={onOpen}
              id="fourpainters"
              title="The four painters"
              thumbnail={ecomreducer}
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
