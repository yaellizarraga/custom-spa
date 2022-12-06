import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  <Head>
    <title>El Encanto</title>
    <meta name='viewport' content='minimum-scale=1m initial-scale=1, width=device-width' />
  </Head>
  return <Component {...pageProps} />
}
