import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { seoContent } from 'constants/SEOConstant';

const NavbarStyle2 = () => {
  const [menu, setMenu] = React.useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState('');
  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
  });

  const classOne = menu
    ? 'collapse navbar-collapse mean-menu'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  const router = useRouter();
  const gettingPath = router?.asPath;
  const filterTitle = seoContent.filter((item) =>
    item.link.includes(gettingPath)
  );

  const isLinkActive = (href) => {
    return router.pathname === href;
  };

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
              <Link
                href="/"
                className={`navbar-brand ${
                  selectedNavItem === 'Home' ? 'active' : ''
                }`}
                onClick={() => handleNavItemClick('Home')}
              >
                <Image
                  src="/images/logo.png"
                  alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
                  className="talent-logo"
                />
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
                    <Link
                      href="/what-we-do"
                      className={`nav-link ${
                        isLinkActive('/what-we-do') ? 'active' : ''
                      }`}
                      onClick={() => handleNavItemClick('what we do')}
                    >
                      What we do
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/how-it-works"
                      className={`nav-link ${
                        isLinkActive('/how-it-works') ? 'active' : ''
                      }`}
                      onClick={() => handleNavItemClick('How it works')}
                    >
                      How it works
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blogs"
                      className={`nav-link ${
                        isLinkActive('/blogs') ? 'active' : ''
                      }`}
                      onClick={() => handleNavItemClick('Blog')}
                    >
                      Blogs
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/careers"
                      className={`nav-link ${
                        isLinkActive('/careers') ? 'active' : ''
                      }`}
                      onClick={() => handleNavItemClick('Career')}
                    >
                      Careers
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="https://form.jotform.com/232503890925459"
                      target="_blank"
                      className={`nav-link`}
                      onClick={() => handleNavItemClick('Apply as a Developer')}
                    >
                      Apply as a Developer
                    </Link>
                  </li>
                  <li className="nabar-buttons">
                    <Link
                      href="https://calendly.com/esparktalents/60min?month=2023-09"
                      target="_blank"
                      className={`default-btn style-two ${
                        selectedNavItem === 'Hire a Talent' ? 'active' : ''
                      }`}
                      onClick={() => handleNavItemClick('Hire a Talent')}
                    >
                      Hire a Talent
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="others-option">
                <Link
                  href="https://calendly.com/esparktalents/60min?month=2023-09"
                  className="default-btn style-two"
                  target="_blank"
                >
                  Hire a Talent
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
