import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import netflix from "../public/images/works/netflix.PNG";
import rent from "../public/images/works/rent.PNG";
import tesla from "../public/images/works/tesla.PNG";
import services from "../public/images/works/services.PNG";
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
              red="https://github.com/svanidzee/netflixclone2"
              external="https://netflixclone2-hxgix8z3z-svanidzee.vercel.app"
            >
              Netflix Clone built with Next.js and magic Link
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="apartments"
              title="Apartments"
              thumbnail={rent}
              red="https://github.com/svanidzee/rent-buy-nextjs"
              external="https://rent-buy-nextjs-f6debtdzo-svanidzee.vercel.app"
            >
              Apartments for Rent built with Next.js and rapidAPI
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="tesla"
              title="Tesla Clone"
              thumbnail={tesla}
              red="https://github.com/svanidzee/tesla-clone"
              external="https://tesla-clone-rf9zi9qjc-svanidzee.vercel.app"
            >
              Tesla Clone built with React.js and styled-components
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="shopping"
              title="Shopping Cart"
              thumbnail={ecommerce}
              red="https://github.com/svanidzee/mini-ecommerce-redux"
              external="https://wakeful-match.surge.sh"
            >
              Mini-ecommerc site built with React.js, MUI, react-router,
              redux-toolkit, json-server
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="shopping"
              title="Shopping Cart"
              thumbnail={ecomreducer}
              red="https://github.com/svanidzee/mini-ecommerce-useReducer"
              external="https://one-curve.surge.sh/"
            >
              Same mini ecommerce app built with React.js, MUI, React
              context-api, useReducer
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="services"
              title="Services landing page"
              thumbnail={services}
              red="https://github.com/svanidzee/services"
              external="https://epic-lumiere-ffce04.netlify.app/"
            >
              My wirst ever react app ))
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
export { getServerSideProps } from "../components/chakra";
