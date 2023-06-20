import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

import { Main } from "../components/layouts";
import { Fonts } from "../components/fonts";
import { theme } from "../theme";

export default function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Fonts />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}
