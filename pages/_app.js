import Footer from "../components/Footer";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-50">
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
