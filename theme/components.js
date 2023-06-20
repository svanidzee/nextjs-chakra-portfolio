export const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: [21, 28, 28, 28, 28, 26],
        fontWeight: 500,
        letterSpacing: "tighter",
        marginTop: "5",
      },
      "sub-text": {
        fontSize: ["xl", 23, 23, 23, 23, 23],
        fontWeight: 500,
        lineHeight: "33px",
        letterSpacing: "tighter",
      },
    },
  },
  Link: {
    baseStyle: () => ({
      color: "text.dim",
      fontSize: "26px",
      fontWeight: "300",
      lineHeight: "28px",
    }),
  },
};
