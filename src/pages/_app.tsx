import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Lunch web app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Lunch App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
