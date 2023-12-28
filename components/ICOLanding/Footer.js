import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="footer-style-wrap-area pt-100">
        <div className="container">
          <div className="footer-widget-style-wrap with-white-color">
            <Link href="/" className="d-inline-block logo">
              <Image
                src="/images/white-logo.png"
                alt="logo"
                width={1056}
                height={503}
              />
            </Link>

            <ul className="quick-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/blog">Our News</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>

            <ul className="social-links">
              <li>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-facebook-fill"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.twitter.com/"
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
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-instagram-line"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-pinterest-line"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.skype.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-skype-line"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-youtube-line"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.gitlab.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-gitlab-fill"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright-area with-white-color">
          <div className="container">
            <p>
              &copy; <strong>Lofi</strong> is Proudly Owned by{' '}
              <Link
                href="https://envytheme.com/"
                target="_blank"
                rel="noreferrer"
              >
                EnvyTheme
              </Link>
            </p>
          </div>
        </div>

        <div className="footer-style-wrap-shape">
          <Image
            src="/images/ico-landing-home/global-shape.png"
            alt="image"
            width={1321}
            height={564}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
