import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '@ui/theme/global';
import { PizzaProvider } from '@hooks/usePizza';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <PizzaProvider>
    <Component {...pageProps} />
    <GlobalStyle />
  </PizzaProvider>
);

export default MyApp;
