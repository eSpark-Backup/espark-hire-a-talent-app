import React from "react";
import Link from "next/link";

const Footer = () => {
  const contactUs = [
    "info@esparktalent.com​​",
    "hr@esparktalent.com",
    "support@esparktalent.com​",
  ];
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="d-inline-block logo">
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>
                <br />
                <br />
                <p>
                  Our guaranteed top-tier service and industry-leading worldwide
                  coverage provides peace of mind for any global team. With
                  eSpark Talent next-level automation and in-house
                  infrastructure, quality always comes first for our customers.
                </p>
                {/* <div className="newsletter-form">
                  <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                  <form data-toggle="validator">
                    <input
                      type="email"
                      className="input-newsletter"
                      placeholder="Enter your email"
                      name="EMAIL"
                      required
                    />
                    <button type="submit">
                      Subscribe Now <i className="ri-send-plane-line"></i>
                    </button>
                  </form>
                </div>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Hire a Talent​</h3>
                <ul className="services-links">
                  <li>
                    <Link href="/service-details">
                      <a>Hire a App Developer</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Hire a Web Developer</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Hire a Digital Marketer</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Hire an Embedded Developer </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Hire a Database Developer ​</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Hire a QA Engineer ​</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="quick-links">
                  <li>
                    <Link href="/about-us">
                      <a>What we do</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">
                      <a>How it works</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career">
                      <a>Career</a>
                    </Link>
                  </li>
                </ul>
                {/* <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies">
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Our News</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li> */}
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Us</h3>
                <ul className="footer-contact-info">
                  <li>
                    <a href="mailto:info@esparktalent.com">
                      info@esparktalent.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hr@esparktalent.com">hr@esparktalent.com</a>
                  </li>
                  <li>
                    <a href="mailto:support@esparktalent.com​">
                      support@esparktalent.com​
                    </a>
                  </li>
                  {/* <li>Address: 2750, Quadra Street Victoria, Canada</li>
                  <li>
                    Email: <a href="mailto:hello@lofi.com">hello@lofi.com</a>
                  </li>
                  <li>
                    Phone: <a href="tel:+44587154756">+44 587 154756</a>
                  </li>
                  <li>
                    Fax: <a href="tel:+44587154756">+55 58715 4756</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <p>
                  &copy; <strong>Lofi</strong> is Proudly Owned by{" "}
                  <a
                    href="https://envytheme.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EnvyTheme
                  </a>
                </p>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
