import { Flex, Stack } from "@chakra-ui/react";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import { social } from "../../data/social";
import SocialIcons from "./socials";

const Footer = () => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Stack direction="row" spacing={3} mr={{ base: `auto`, md: 2 }}>
        <SocialIcons label="GitHub" href={social.github}>
          <IoLogoGithub />
        </SocialIcons>
        <SocialIcons label="Linkidin" href={social.linkidin}>
          <IoLogoLinkedin />
        </SocialIcons>
        <SocialIcons label="Twitter" href={social.twitter}>
          <IoLogoTwitter />
        </SocialIcons>
      </Stack>
    </Flex>
  );
};

export default Footer;
