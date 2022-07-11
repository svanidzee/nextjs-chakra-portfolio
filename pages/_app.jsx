import { AnimatePresence } from 'framer-motion';
import { Global } from '@emotion/react';
import { fontFace } from 'lib/fontface';

import { Layout } from 'components/layouts/main';
import { Chakra } from 'components/chakra';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

export default function Website ({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Global styles={fontFace} />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}
