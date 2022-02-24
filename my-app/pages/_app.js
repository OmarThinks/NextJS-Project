import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
