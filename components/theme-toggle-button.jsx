import React, { useCallback } from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { CgSun, CgMoon } from 'react-icons/cg';

import useSound from 'use-sound';
import switchOnSound from 'public/sounds/switch-on.mp3';
import switchOffSound from 'public/sounds/switch-off.mp3';

export function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();

  const isDarkMode = toggleColorMode === 'dark';
  const [play] = useSound(isDarkMode ? switchOnSound : switchOffSound);

  const handleClick = useCallback(() => {
    toggleColorMode();
    play();
  }, [play, toggleColorMode]);

  return (
    <IconButton
    alignSelf="left"
      variant="ghost"
      size="md"
      icon={useColorModeValue(<CgMoon />, <CgSun />)}
      // mr={7}
      position="relative"
      onClick={handleClick}
      _focus={{
        border: 'none',
      }}
    />
  );
}
