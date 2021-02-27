import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Jac</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
