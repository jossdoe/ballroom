import React from 'react';
import Head from 'next/head';
import { GlobalStyles } from 'styles';
import { Content } from './styled';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout = ({ children, title = null }) => (
  <>
    <GlobalStyles />
    <Head>
      <title>{title ? `${title} • ballroom` : `ballroom`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
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
    <Navbar />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default Layout;
