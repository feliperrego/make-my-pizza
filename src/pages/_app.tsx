import type { AppProps } from 'next/app'
import GlobalStyle from '@ui/theme/global';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle/>
    </>
  )
}

export default MyApp
