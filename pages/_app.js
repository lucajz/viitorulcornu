import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-100">

      <Component {...pageProps} />

      <Footer />
    </div>

  )
}

export default MyApp
