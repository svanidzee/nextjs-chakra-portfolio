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
  global: (props) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
      // bg: 'body',
      fontFamily: 'heading',
      color: 'text.dim',
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 30,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        // marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      _hover: { textDecoration: 'none' },
    }),
  },
  // Button: {
  //   // baseStyle: {
  //   //   borderRadius: 'none',
  //   // },
  //   // sizes: {
  //   //   small: {
  //   //     px: 5,
  //   //     h: '50px',
  //   //     fontSize: '20px',
  //   //   },
  //   //   medium: {
  //   //     px: 7,
  //   //     h: '60px',
  //   //     fontSize: '25px',
  //   //   },
  //   //   large: {
  //   //     px: 8,
  //   //     h: '70px',
  //   //     fontSize: '30px',
  //   //     borderRadius: '10px',
  //   //   },
  //   // },
  //   variants: {
  //     primary: {
  //       // bg: 'red',
  //       // color: '#fff',
  //       // marginRight: 5,
  //     //   size="md"
  //     // mr={5}
  //     },
  //     secondary: {
  //       bg: 'secondary',
  //       color: '#fff',
  //     },
  //     ghost: {
  //       bg: 'transparent',
  //       border: '1px solid red',
  //     },
  //     primaryGhost: {
  //       bg: 'transparent',
  //       border: '1px solid',
  //       borderColor: 'primary',
  //     },
  //     secondaryGhost: {
  //       bg: 'transparent',
  //       border: '1px solid',
  //       borderColor: 'secondary',
  //       _hover: {
  //         color: '#fff',
  //         bg: '#BB1415',
  //       },
  //     },
  //   },
  //   // defaultProps: {
  //   //   size: 'md',
  //   //   variant: 'outline',
  //   // },
  // },
};

const semanticTokens = {
  colors: {
    body: {
      // default: '#FFFDFE',
      default: '#FFFFFF',
      // _dark: '#141414',
      _dark: '#000000',
    },
    'text.dim': {
      // default: '#000000',
      default: '#222222',
      _dark: '#FFFFFF',
    },
    'icon.dim': {
      default: 'red',
      _dark: 'yellow',
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
