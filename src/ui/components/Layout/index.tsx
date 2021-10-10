import React from 'react';
import Head from 'next/head';
import { Container, Main } from './styles';
import PageTitle from "@ui/components/PageTitle";
import Header from "@ui/components/Header";

interface LayoutProps {
  title?: string;
  backgroundImage?: StaticImageData;
}

const Layout: React.FC<LayoutProps> = ({children, backgroundImage, title, ...props}) => (
  <Container backgroundImage={backgroundImage} {...props}>
    <Head>
      <meta name="docsearch:version" content="2.0"/>
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"/>
      <meta property="og:type" content="website"/>
      <meta property="og:locale" content="pt-bt"/>
      <meta property="og:site_name" content="Make me pizza"/>
      <title>{title ? `${title} | Make my pizza` : 'Make my pizza'}</title>
      <meta
        name="description"
        content="Crie a sua pizza perfeita."
      />
    </Head>

    {title && (
      <Header>
        <PageTitle>{title}</PageTitle>
      </Header>
    )}

    <Main>
      {children}
    </Main>
  </Container>
);

export default Layout;
