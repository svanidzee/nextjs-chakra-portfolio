import { extendTheme } from '@chakra-ui/react';

const colors = {
  grassTeal: '#88ccca',
  ghostwhite: 'ghostwhite',
  blackAlpha: '#16181D',
};

const fonts = {
  heading: "'Poppins'",
};

const styles = {
  global: () => ({
    body: {
      bg: 'body',
      fontFamily: 'heading',
      color: 'text.dim',
      '.chakra-divider': {
        opacity: 1,
      },
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: [21, 28, 28, 28, 28, 28],
        fontWeight: 600,
        letterSpacing: 'normal',
        marginTop: '10',
      },
      'sub-text': {
        fontSize: ['xl', 23, 23, 23, 23, 23],
        fontWeight: 400,
        lineHeight: '36px',
        letterSpacing: 'tighter',
      },
    },
  },
  Link: {
    baseStyle: () => ({
      color: 'text.dim',
      fontSize: '26px',
      fontWeight: '300',
      lineHeight: '28px',
    }),
  },
};

const semanticTokens = {
  colors: {
    body: {
      default: '#FDFBFB',
      _dark: 'rgb(19,19,19)',
    },
    'text.dim': {
      default: '#272727',
      _dark: '#FFFFFF',
    },
    'icon.dim': {
      default: 'red',
      _dark: 'yellow',
    },
    'social.icon': {
      default: 'black',
      _dark: 'white',
    },
    'footer.dim': {
      default: 'rgb(19,19,19)',
      _dark: 'rgb(247,242,238)',
    },
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles,
  components,
  semanticTokens,
  fonts,
  colors,
});
