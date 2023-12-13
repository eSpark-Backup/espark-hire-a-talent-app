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
import PartnerHeader from "@/components/Partners/PartnerHeader";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const { pathname } = useRouter();
  return (
    <>
      {pathname === "/thankyou" ? (
        <>
          {" "}
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop />
        </>
      ) : pathname === "/coming-soon" ? (
        <>
          <Component {...pageProps} />
        </>
      ) : pathname === "/book-a-discovery-call" ? (
        <>
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop />
        </>
      ) : pathname === "/partners" ? (
        <React.Fragment>
          <PartnerHeader />
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop />
        </React.Fragment>
      ) : (
        <>
          <NavbarStyle2 />
          <Component {...pageProps} />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default MyApp;
