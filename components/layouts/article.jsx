import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { GridItemStyle } from 'components/gridItem-style';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export function Layout ({ children, title }) {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <React.Fragment>
        {title && (
          <Head>
            <title>
              {title}
              {' '}
              - Irakli Svanidze
            </title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
          </Head>
        )}
        {children}
        <GridItemStyle />
      </React.Fragment>
    </motion.article>
  );
}
