import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    primary: {
      100: "#e6ddf0",
      200: "#dbcee9",
      300: "#cfbde2",
      400: "#c1aad9",
      500: "#b194cf",
      700: "#5E239D",
    },

    secondary: {
      500: "#99b6d2",
      600: "#5f8db8",
      700: "#174168",
    },

    green: {
      700: "#1d7d1c",
      500: "#279e25",
      300: "#7bc47a",
    },

    gray: {
      700: "#443c4d",
      600: "#73687d",
      500: "#8e8697",
      400: "#a49dab",
      300: "#c6c2cb",
      200: "#e2e0e4",
      100: "#faf9fa",
    },
    white: "#FFFFFF",
  },

  fontConfig: {
    Nunito: {
      400: {
        normal: "NunitoSans_400Regular",
      },

      700: {
        normal: "NunitoSans_700Bold",
      },
    },

    JetBrainsMono: {
      400: {
        normal: "JetBrainsMono_400Regular",
      },
    },
  },

  fonts: {
    heading: "Nunito",
    body: "Nunito",
    mono: "JetBrainsMono",
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },

  sizes: {
    14: 56,
  },
});
