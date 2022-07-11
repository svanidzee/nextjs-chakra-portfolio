import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  grassTeal: '#88ccca',
  ghostwhite: 'ghostwhite',
  blackAlpha: '#16181D',
};

const fonts = {
  // heading: 'Rubik',
  heading: 'MonumentGrotesk, -apple-system, system-ui, sans-serif',
  body: 'MonumentGrotesk-Italic, -apple-system, system-ui, sans-serif',
};

const styles = {
  global: () => ({
    body: {
      bg: 'body',
      fontFamily: 'heading',
      color: 'text.dim',
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      _hover: { textDecoration: 'none' },
    }),
  },
};

const semanticTokens = {
  colors: {
    body: {
      default: '#FFFDFE',
      _dark: '#141414',
    },
    'text.dim': {
      default: '#3F3F3F',
      _dark: '#FFFFFF',
    },
    'icon.dim': {
      default: 'red',
      _dark: 'yellow',
    },
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles,
  components,
  semanticTokens,
  fonts,
  colors,
});
