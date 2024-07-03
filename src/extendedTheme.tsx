import { ThemeConfig, extendBaseTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const extendedTheme = extendBaseTheme({
  themeConfig,
  fonts: {
    heading: `'Poppins', 'open-sans', 'sans-serif'`,
    body: `'Poppins', 'open-sans', 'sans-serif'`,
  },
});

export default extendedTheme;
