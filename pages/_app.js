import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const hideNavFromSignup = router.pathname == "/auth/signup" ? false : true;
  const hideNavFromLogin = router.pathname == "/auth/login" ? false : true;

  return (
    <>
      {hideNavFromSignup && hideNavFromLogin && <Navbar />}
      <Component {...pageProps} />
      {hideNavFromSignup && hideNavFromLogin && <Footer />}
    </>
  );
}

export default MyApp;
