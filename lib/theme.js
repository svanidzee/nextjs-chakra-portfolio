import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  grassTeal: '#88ccca',
  ghostwhite: 'ghostwhite',
  blackAlpha: '#16181D',
};

const fonts = {
  heading: 'Rubik',
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('ghostwhite', 'blackAlpha')(props),
      fontFamily: 'heading',
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

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
});
