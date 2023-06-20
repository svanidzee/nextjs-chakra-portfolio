import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";
import { styles } from "./styles";
import { fonts } from "./fonts";
import { components } from "./components";
import { colors } from "./colors";
import { semanticTokens } from "./tokens";

export const theme = extendTheme({
  config,
  styles,
  components,
  semanticTokens,
  fonts,
  colors,
});
