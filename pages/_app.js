import '../styles/globals.css';
import Layout from '../components/ui/Layout';
import Head from 'next/head';

const MyApp=({Component, pageProps})=>{
  return (<Layout>
            <Head>
              <title>Physics is fun</title>
              <meta name="description" content="I blog about concepts of physics"></meta>
            </Head>
            <Component {...pageProps} />
          </Layout>)
}

export default MyApp
