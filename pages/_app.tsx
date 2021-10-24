import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import SimpleLayout from '../layouts/SimpleLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SimpleLayout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </SimpleLayout>
    </RecoilRoot>
  )
}
export default MyApp
