import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
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

  return (
    <>
      <header className="header-area">
        <div className="top-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <div className="top-header-start d-flex align-items-center">
                  <Link href="/" className="logo d-inline-block">
                    <Image
                      src="/images/logo.png"
                      alt="image"
                      className="talent-logo"
                      width={120}
                      height={60}
                    />
                  </Link>
                  <form className="search-box">
                    <label>
                      <i className="ri-search-line"></i>
                    </label>
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Search here..."
                    />
                  </form>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="top-header-end">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="number">
                      <Link
                        href="tel:+1-485-456-0102"
                        className="d-flex align-items-center"
                      >
                        <i className="ri-phone-line"></i> +1-485-456-0102
                      </Link>
                    </div>
                    <ul className="social-links">
                      <li>
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-facebook-box-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-twitter-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-linkedin-box-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-instagram-fill"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="navbar" className="navbar-area">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/" className="navbar-brand d-lg-none">
                <Image
                  src="/images/logo.png"
                  width={120}
                  height={57}
                  alt="Site logo"
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
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                      Home
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" className="nav-link">
                          Technology Solutions
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-2" className="nav-link">
                          Digital Marketing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-3" className="nav-link">
                          Business Consulting
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-4" className="nav-link">
                          Cybersecurity Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-5" className="nav-link">
                          Crypto Startup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-6" className="nav-link">
                          ICO Landing
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" className="nav-link">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                      Services
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services" className="nav-link">
                          Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details" className="nav-link">
                          Services Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                      Case Studies
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/case-studies" className="nav-link">
                          Case Studies
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/case-studies-2" className="nav-link">
                          Case Studies #2
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/case-studies-3" className="nav-link">
                          Case Studies #3
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/case-studies-details" className="nav-link">
                          Case Studies Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/team" className="nav-link">
                      Team
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/pricing" className="nav-link">
                      Pricing
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-edit-2-line"></span>Get A Free Quote
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
