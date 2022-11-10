import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === "transition",
});

export function Section({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.35 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <StyledDiv
      ref={ref}
      transition={{ duration: 0.5, delay }}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      {children}
    </StyledDiv>
  );
}
