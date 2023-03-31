import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export function Page({ children, title }) {
  const t = `${title} - Irakli Svanidze`;

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.1, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <React.Fragment>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}
      </React.Fragment>
    </motion.article>
  );
}
