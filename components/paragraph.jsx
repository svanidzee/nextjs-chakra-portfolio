import { chakra } from "@chakra-ui/react"

export function Paragraph({ children }) {
  return (
    <chakra.p
      textAlign="justify"
      fontSize={['lg', "lg", 'xl', 'xl', "xl", "2xl"]}
      lineHeight="9"
      // fontWeight="thin"
      letterSpacing="tighter"
      fontWeight={["light", "light", "normal", "normal", "normal", "normal"]}
    >
      {children}
    </chakra.p>
  );
}


