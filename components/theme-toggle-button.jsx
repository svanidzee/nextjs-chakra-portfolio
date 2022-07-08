import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { IoPlanetOutline, IoPlanetSharp } from 'react-icons/io5';

import useSound from 'use-sound';
import switchOnSound from 'public/sounds/switch-on.mp3';
import switchOffSound from 'public/sounds/switch-off.mp3';

export function ThemeToggleButton () {
  const { toggleColorMode } = useColorMode();

  const isDarkMode = toggleColorMode === 'dark';
  const [play] = useSound(isDarkMode ? switchOnSound : switchOffSound);

  const handleClick = () => {
    toggleColorMode();
    play();
  };

  return (
    <IconButton
      aria-label="Toggle theme"
      size="md"
      icon={useColorModeValue(<IoPlanetSharp />, <IoPlanetOutline />)}
      mr={5}
      onClick={handleClick}
      _focus={{
        border: 'none',
      }}
    />
  );
}
