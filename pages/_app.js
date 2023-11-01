import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
// Globals Styles
import "../styles/globals.css";
// Responsive Styles
import "../styles/responsive.css";

import ScrollToTop from "@/components/Layout/ScrollToTop";
import NavbarStyle2 from "@/components/Layout/NavbarStyle2";
import Footer from "@/components/Layout/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const { pathname } = useRouter();
  return (
    <React.Fragment>
      {pathname === "/thankyou" ? (
        <React.Fragment>
          {" "}
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop />
        </React.Fragment>
      ) : pathname === "/coming-soon" ? (
        <React.Fragment>
          {/* <NavbarStyle2 /> */}
          <Component {...pageProps} />
          {/* <ScrollToTop /> */}
        </React.Fragment>
      ) : pathname === "/book-a-discovery-call" ? (
        <React.Fragment>
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NavbarStyle2 />
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default MyApp;
