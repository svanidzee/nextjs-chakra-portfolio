import {
  Container,
  Heading,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BuildIcon from "@mui/icons-material/Build";
import LanguageIcon from "@mui/icons-material/Language";

import netflix from "../public/images/works/netflix-clone.png";
import coffestore from "../public/images/works/coffe-store.png";
import ecommerce from "../public/images/works/ecommerce-redux.png";
import ecomreducer from "../public/images/works/ecommerce-useReducer.png";
import portfolio from "../public/images/works/portfolio.png";

const SERVICES_DATA = {
  posts: [
    {
      title: "33",
      Language: "TypeScript",
      Framework: "Next.js",
      Libraries: "React, Chakra UI, graphql-request",
    },
    {
      title: "222",
      Language: "dskdkkkkk",
      Framework: "sdldslkdsds",
      Libraries: "kkkkkkt",
    },
    {
      title: "11",
      Language: "iiiiiiiiiiiiiiiiiiiii",
      Framework: "dfdfdf",
      Libraries: "dfffffffff",
    },
  ],
};

const Works = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { posts } = SERVICES_DATA;

  return (
    <Layout title="Works">
      <Container maxW="3xl">
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        {posts.map(({ title, Language, Framework, Libraries }, index) => (
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
              bgColor="ghostwhite"
              color="#202023"
              pos="relative"
              top={-55}
            >
              <ModalHeader>{title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody mb={5}>
                <Flex direction="column" alignItems="flex-start">
                  <HStack spacing={4} p="4" alignItems="center">
                    <LanguageIcon fontSize="small" />
                    <Text>{Language}</Text>
                  </HStack>

                  <HStack spacing={4} p="4" alignItems="center">
                    <BuildIcon fontSize="small" />
                    <Text>{Framework}</Text>
                  </HStack>
                  <HStack spacing={4} p="4" alignItems="center">
                    <LibraryBooksIcon fontSize="small" />
                    <Text>{Libraries}</Text>
                  </HStack>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        ))}

        <SimpleGrid columns={[1, 1, 1]} gap={6} onClick={onOpen}>
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
