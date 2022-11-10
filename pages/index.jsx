import { Layout } from 'components/layouts/article';

import { Author, About, Stack, Hobbies } from 'components/sections';
import { getHomePage } from '../lib/graphcms';

export default function Home({ home }) {
  return (
    <Layout>
      <Author name={home.myName} position={home.myposition} />
      <About title={home.aboutTitle} content={home.aboutContent} />
      <Stack
        toolsTitle={home.toolsTitle}
        toolsContent={home.toolsContent}
        stacks={home.stack}
      />
      <Hobbies hobbiesTitle={home.hobbiesTitle} hobbies={home.hobbies} />     
    </Layout>
  );
}

export const getStaticProps = async () => {
  const home = await getHomePage();

  return {
    props: {
      home,
    },
  };
};
