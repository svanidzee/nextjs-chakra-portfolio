import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useSound from "use-sound";

import switchOnSound from "../public/sounds/switch-on.mp3";
import switchOffSound from "../public/sounds/switch-off.mp3";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  const isDarkMode = toggleColorMode === "dark";
  const [play] = useSound(isDarkMode ? switchOnSound : switchOffSound);

  const handleClick = () => {
    toggleColorMode();
    play();
  };

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue("purple", "orange")}
      size="md"
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      mr={5}
      onClick={handleClick}
      _focus={{
        border: "none",
      }}
    ></IconButton>
  );
};

export default ThemeToggleButton;
