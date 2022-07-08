import { Flex, Stack, Text } from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

import { social } from 'data/social';
import { SocialIcons } from './socials';

export function Footer () {
  const {
    github,
    linkidin,
    twitter,
  } = social;
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Stack direction="row" spacing={3} mr={{ base: 'auto', md: 2 }}>
        <SocialIcons label="GitHub" href={github}>
          <IoLogoGithub />
        </SocialIcons>
        <SocialIcons label="Linkidin" href={linkidin}>
          <IoLogoLinkedin />
        </SocialIcons>
        <SocialIcons label="Twitter" href={twitter}>
          <IoLogoTwitter />
        </SocialIcons>
      </Stack>
      <Stack direction="row" spacing={3} mr={{ base: 'auto', md: 2 }}>
        <Text fontSize="sm">Built with Next.js, GraphCMS, Vercel</Text>
      </Stack>
    </Flex>
  );
}
