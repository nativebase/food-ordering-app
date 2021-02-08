import { extendTheme } from "native-base";
import React from "react";

export const customTheme = extendTheme({
  colors: {
    custom: {
      1: "#F56565",
      2: "#faa",
      3: "#1ac",
    },
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    // primary: "#00ad93",
    primaryHoverColor: "#009c84",
    headingText: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    primary: "#FC8018",
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "#00ad93",
          color: "#fff",
        },
      },
    },
  },
});
