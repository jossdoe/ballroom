import React from 'react';
import Head from 'next/head';
import { Content } from './styled';

const Layout = ({ children, title = 'ballroom' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Content>{children}</Content>
  </>
);

export default Layout;
