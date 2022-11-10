import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "lib/theme";
import { Layout } from "components/layouts/main";
import { Fonts } from "components/fonts";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

export default function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
