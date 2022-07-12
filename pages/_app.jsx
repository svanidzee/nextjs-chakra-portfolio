import { AnimatePresence } from 'framer-motion';
import { Global } from '@emotion/react';
import { fontFace } from 'lib/fontface';

import {
  ChakraProvider,
  // cookieStorageManager,
  // localStorageManager,
} from '@chakra-ui/react';

import { theme } from 'lib/theme';
import { Layout } from 'components/layouts/main';
// import { Chakra } from 'components/chakra';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

export default function Website ({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  );
}
