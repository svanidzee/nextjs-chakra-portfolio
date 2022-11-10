import { extendTheme } from '@chakra-ui/react';
// import { mode } from '@chakra-ui/theme-tools';

const colors = {
  grassTeal: '#88ccca',
  ghostwhite: 'ghostwhite',
  blackAlpha: '#16181D',
};

const fonts = {
  // heading: "'Raleway'",
  heading: "'Poppins'",
};

const styles = {
  global: () => ({
    body: {
      bg: 'body',
      fontFamily: 'heading',
      color: 'text.dim',
      '.chakra-divider': {
        // borderColor: '#BCBCBC !important',
        opacity: 1,
      },
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        // fontSize: 28,
        fontSize: [21, 28, 28, 28, 28, 28],
        fontWeight: 600,
        // lineHeight: "65px",
        letterSpacing: 'normal',
        
        // textUnderlineOffset: 6,
        // textDecorationColor: '#525252',
        // textDecorationThickness: 4,
        marginTop: "10"
        // marginBottom: 2
        // marginRight: 15,
      },
      'sub-text': {
        // fontSize: 23,
        fontSize: ["xl", 23, 23, 23, 23, 23],
        fontWeight: 400,
        // color: "green",
        lineHeight: '36px',
        letterSpacing: 'tighter',
        // fontWeight: "thin",
        // marginTop: 3,
      },
    },
  },
  Link: {
    baseStyle: () => ({
      color: 'text.dim',
      // _hover: { textDecoration: 'none' },
      fontSize: '26px',
      fontWeight: '300',
      lineHeight: '28px',
    }),
  },
};

const semanticTokens = {
  colors: {
    body: {
      // default: '#FFFDFE',
      // default: '#FBFBFB',
      // default: '#FFFFFF',
      default: '#FDFBFB',
      // default: 'rgb(226,226,226)',
      // default: 'rgb(247,242,238)',
      // default: '#EFEFEF',
      // default: '#F9F9F9',
      // default: '#FCFCFC',
      // default: '#f7f7f7',
      // default: '#F4F0F0',
      // _dark: '#141414',
      _dark: 'rgb(19,19,19)',
      // _dark: '#171717',
      // _dark: '#181818',
      // _dark: '#111111',
    },
    'text.dim': {
      // default: '#000000',
      // default: '#222222',
      // default: '#252422',
      // default: '#444444',
      // default: '#101010',
      // default: 'rgb(5,0,56)',
      default: '#272727',
      // default: '#171717',
      _dark: '#FFFFFF',
      // _dark: '#FEFEFE',
      // _dark: '#E2E6E8',
      // _dark: '#DFD3C3',
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

// const breakpoints = {
//   sm: '30em',
//   md: '48em',
//   lg: '62em',
//   xl: '80em',
//   '2xl': '96em',
// }

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
