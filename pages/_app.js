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

import Head from "next/head";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import NavbarStyle2 from "@/components/Layout/NavbarStyle2";
import Footer from "@/components/Layout/Footer";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>
          Lofi - Multipurpose Technology Startup React Next Template
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarStyle2 />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}

export default MyApp;
