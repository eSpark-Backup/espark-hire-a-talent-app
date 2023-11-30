import React, { useState } from "react";
import Link from "@/utils/ActiveLink";
import Head from "next/head";
import { seoContent } from "constants/SEOConstant";
import { useRouter } from "next/router";

const PartnerHeader = () => {
  const [menu, setMenu] = React.useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState("");
  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const router = useRouter();
  const gettingPath = router?.asPath;
  const filterTitle = seoContent.filter((item) =>
    item.link.includes(gettingPath)
  );

  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="robots" content="follow, index"></meta>
        <title>{filterTitle[0]?.title}</title>
        <meta name="description" content={filterTitle[0]?.description}></meta>
        <link rel="canonical" href={filterTitle[0]?.canonical}></link>

        <meta property="og:local" content={filterTitle[0]?.ogLocal}></meta>
        <meta property="og:type" content={filterTitle[0]?.ogType}></meta>
        <meta property="og:title" content={filterTitle[0]?.ogTitle}></meta>
        <meta
          property="og:description"
          content={filterTitle[0]?.ogDescription}
        />
        <meta property="og:url" content={filterTitle[0]?.ogUrl}></meta>
        <meta
          property="og:site_name"
          content={filterTitle[0]?.ogSiteName}
        ></meta>
        <meta property="og:image" content={filterTitle[0]?.ogImage}></meta>
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content={filterTitle[0]?.description}
        ></meta>
        <meta name="twitter:card" content={filterTitle[0]?.twitterCard}></meta>
        <meta
          name="twitter:title"
          content={filterTitle[0]?.twitterTitle}
        ></meta>
        <meta
          name="twitter:description"
          content={filterTitle[0]?.twitterDescription}
        />
        <meta name="twitter:site" content={filterTitle[0]?.ogSiteName}></meta>
        <meta name="twitter:creator" content="@twitter:eSparkTalent"></meta>
        <meta name="twitter:image" content={filterTitle[0]?.ogImage}></meta>
        <meta name="twitter:label1" content="Written by"></meta>
        <meta name="twitter:data1" content="eSparkTalent"></meta>
        <meta name="twitter:label1" content="Powered by"></meta>
        <meta name="twitter:data1" content="@twitter:eSparkConsGroup"></meta>
        <meta
          property="article:modified_time"
          content={filterTitle[0]?.articleModifiedTime}
        ></meta>
        <meta
          property="article:published_time"
          content={filterTitle[0]?.articlePublishTime}
        ></meta>
        <meta
          name="article:author"
          content={filterTitle[0]?.articleAuthor}
        ></meta>
      </Head>
      <header className="header-area header-style-two">
        <div id="navbar" className="navbar-area">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-lg">
              <Link legacyBehavior href="/">
                <a
                  className={`navbar-brand ${selectedNavItem === "Home" ? "active" : ""
                    }`}
                  onClick={() => handleNavItemClick("Home")}
                >
                  {router?.pathname == '/partners'  }  
                  <img
                    src="/images/logo.png"
                    alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
                    className="talent-logo"
                  />
                  
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link legacyBehavior href="/what-we-do" activeClassName="active">
                      <a
                        className={`nav-link partners-header-text`}
                        onClick={() => handleNavItemClick("what we do")}
                      >
                        What we do
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link legacyBehavior href="/how-it-works" activeClassName="active">
                      <a
                       className={`nav-link partners-header-text`}
                        onClick={() => handleNavItemClick("How it works")}
                      >
                        How it works
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link legacyBehavior href="/blogs" activeClassName="active">
                      <a
                       className={`nav-link partners-header-text`}
                        onClick={() => handleNavItemClick("Blog")}
                      >
                        Blogs
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link legacyBehavior href="/careers" activeClassName="active">
                      <a
                       className={`nav-link partners-header-text`}
                        onClick={() => handleNavItemClick("Career")}
                      >
                        Careers
                      </a>
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link legacyBehavior
                      href="https://form.jotform.com/232503890925459"
                    // activeClassName="active"
                    >
                      <a
                        target="_blank"
                       className={`nav-link partners-header-text`}
                        onClick={() =>
                          handleNavItemClick("Apply as a Developer")
                        }
                      >
                        Apply as a Developer
                      </a>
                    </Link>
                  </li>

                  <li className="nabar-buttons">
                    <Link legacyBehavior
                      href="https://calendly.com/esparktalents/60min?month=2023-09"
                      activeClassName="active"
                    >
                      <a
                        target="_blank"
                        className={`default-btn style-two ${selectedNavItem === "Hire a Talent" ? "active" : ""
                          }`}
                        onClick={() => handleNavItemClick("Hire a Talent")}
                      >
                        Hire a Talent
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            
              <div className="others-option">
              
                <Link legacyBehavior href="https://calendly.com/esparktalents/60min?month=2023-09">
                  <a className="style-two partners-header-button" target="_blank">
                    Hire a Talent
                 </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default PartnerHeader;
