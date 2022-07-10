import {
  Container,
} from '@chakra-ui/react';

import { Layout } from 'components/layouts/article';
import { tools } from 'data/tools';

import { Author } from 'components/sections/author';
import { About } from 'components/sections/about';
import { Stack } from 'components/sections/stack';
import { Hobbies } from 'components/sections/hobbies';

import {
  getAuthor,
  getAboutMe,
  getHobbies,
} from '../lib/graphcms';

export const getStaticProps = async () => {
  const author = await getAuthor();
  const aboutMe = await getAboutMe();
  const hobbies = await getHobbies();

  return {
    props: {
      author,
      aboutMe,
      hobbies,
    },
  };
};

export default function Home ({
  author,
  aboutMe,
  hobbies,
}) {
  return (
    <Layout>
      <Container maxW="3xs4">
        <Author author={author} />
        <About aboutMe={aboutMe} />
        <Stack tools={tools} />
        <Hobbies hobbies={hobbies} />
      </Container>
    </Layout>
  );
}
