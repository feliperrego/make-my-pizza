import React from 'react';
import Head from 'next/head';
import PageTitle from '@ui/components/PageTitle';
import Header from '@ui/components/Header';
import { IoArrowBackSharp } from 'react-icons/io5';
import colors from '@ui/theme/colors';
import { useRouter } from 'next/router';
import { Container, Main, BackButton } from './styles';

interface LayoutProps {
  title?: string;
  backgroundImage?: StaticImageData;
  backButton?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children, backButton, backgroundImage, title, ...props
}) => {
  const router = useRouter();

  return (
    <Container backgroundImage={backgroundImage} {...props}>
      <Head>
        <meta name="docsearch:version" content="2.0" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt-bt" />
        <meta property="og:site_name" content="Make me pizza" />
        <title>{title ? `${title} | Make my pizza` : 'Make my pizza'}</title>
        <meta
          name="description"
          content="Crie a sua pizza perfeita."
        />
      </Head>

      {title && (
        <Header>
          <PageTitle>{title}</PageTitle>

          {backButton && (
            <BackButton onClick={() => router.push('/')}>
              Início
            </BackButton>
          )}
        </Header>
      )}

      <Main>
        {children}
      </Main>
    </Container>
  );
};

export default Layout;
