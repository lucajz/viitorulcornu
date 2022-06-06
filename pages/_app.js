import Footer from "../components/Footer";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className="bg-blue-50">
      <SessionProvider session={session}>
        <Component {...pageProps} />

        <Footer />
      </SessionProvider>
    </div>
  );
}

export default MyApp;
