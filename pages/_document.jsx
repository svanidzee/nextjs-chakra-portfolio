import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { theme } from 'lib/theme';

export default class Document extends NextDocument {
  render () {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {['MonumentGrotesk-Regular', 'MonumentGrotesk-Italic'].map((font) => (
            <link
              key={font}
              rel="preload"
              href={`/fonts/${font}.woff2`}
              as="font"
              type="font/woff2"
              crossOrigin=""
            />
          ))}
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
