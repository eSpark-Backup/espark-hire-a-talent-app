import React, { useState } from "react";
import Link from "@/utils/ActiveLink";
import Head from "next/head";
import { seoContent } from "constants/SEOConstant";
import { useRouter } from "next/router";

const NavbarStyle2 = () => {
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

  const gettingActiveLink = router?.pathname;

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
              <Link href="/">
                <a
                  className={`navbar-brand ${
                    selectedNavItem === "Home" ? "active" : ""
                  }`}
                  onClick={() => handleNavItemClick("Home")}
                >
                  <img
                    src="/images/logo.png"
                    alt="Site logo"
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
                  {/* <li className="nav-item">
                    <Link href="#">
                      <a className="dropdown-toggle nav-link">
                        Home
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a className="nav-link">Technology Solutions</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-2" activeClassName="active">
                          <a className="nav-link">Digital Marketing</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-3" activeClassName="active">
                          <a className="nav-link">Business Consulting</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-4" activeClassName="active">
                          <a className="nav-link">Cybersecurity Services</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-5" activeClassName="active">
                          <a className="nav-link">Crypto Startup</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-6" activeClassName="active">
                          <a className="nav-link">ICO Landing</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link">About Us</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details" activeClassName="active">
                          <a className="nav-link">Services Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Case Studies
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/case-studies" activeClassName="active">
                          <a className="nav-link">Case Studies</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/case-studies-2" activeClassName="active">
                          <a className="nav-link">Case Studies #2</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/case-studies" activeClassName="active">
                          <a className="nav-link">Case Studies #3</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/case-studies-details" activeClassName="active">
                          <a className="nav-link">Case Studies Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a
                        className={`nav-link ${
                          gettingActiveLink === "/about-us" ? "active" : ""
                        }`}
                        onClick={() => handleNavItemClick("what we do")}
                      >
                        What we do
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services" activeClassName="active">
                      <a
                        className={`nav-link ${
                          gettingActiveLink === "services" ? "active" : ""
                        }`}
                        onClick={() => handleNavItemClick("How it works")}
                      >
                        How it works
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blogs" activeClassName="active">
                      <a
                        className={`nav-link ${
                          gettingActiveLink === "/blogs" ||
                          gettingActiveLink === "/blogs/[eachId]"
                            ? "active"
                            : ""
                        }`}
                        onClick={() => handleNavItemClick("Blog")}
                      >
                        Blog
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/careers" activeClassName="active">
                      <a
                        className={`nav-link ${
                          gettingActiveLink === "/careers" ? "active" : ""
                        }`}
                        onClick={() => handleNavItemClick("Career")}
                      >
                        Career
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a
                        className={`nav-link ${
                          selectedNavItem === "Contact" ? "active" : ""
                        }`}
                        onClick={() => handleNavItemClick("Contact")}
                      >
                        Contact Us
                      </a>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      href="https://form.jotform.com/232503890925459"
                      // activeClassName="active"
                    >
                      <a
                        target="_blank"
                        className={`nav-link`}
                        onClick={() =>
                          handleNavItemClick("Apply as a Developer")
                        }
                      >
                        Apply as a Developer
                      </a>
                    </Link>
                  </li>

                  {/* <li className="nabar-buttons">
                    <Link href="/contact" activeClassName="active">
                      <a
                        className={`default-btn style-two ${
                          selectedNavItem === "Apply as a Developer"
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          handleNavItemClick("Apply as a Developer")
                        }
                      >
                        Apply as a Developer
                      </a>
                    </Link>
                  </li> */}
                  <li className="nabar-buttons">
                    <Link
                      href="https://calendly.com/esparktalents/60min?month=2023-09"
                      activeClassName="active"
                    >
                      <a
                        target="_blank"
                        className={`default-btn style-two ${
                          selectedNavItem === "Hire a Talent" ? "active" : ""
                        }`}
                        onClick={() => handleNavItemClick("Hire a Talent")}
                      >
                        Hire a Talent
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Icons For Below Button */}
              {/* <span className="ri-edit-2-line"></span> */}
              {/* <span className="ri-edit-2-line"></span> */}
              <div className="others-option">
                {/* <Link href="https://form.jotform.com/232274579439468 ">
                  <a className="default-btn style-two">Apply as a Developer</a>
                </Link> */}
                <Link href="https://calendly.com/esparktalents/60min?month=2023-09">
                  <a className="default-btn style-two" target="_blank">
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

export default NavbarStyle2;
