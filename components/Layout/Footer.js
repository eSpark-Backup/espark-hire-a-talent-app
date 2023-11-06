import React from 'react';
import Link from 'next/link';
import {
  sliderData,
  footerContact,
  socialLinks,
} from '../../constants/constants';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-area">
        {/* Linkedin Insight Tag */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `_linkedin_partner_id = "6113401";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);`,
          }}
        />
        <noscript>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://px.ads.linkedin.com/collect/?pid=6113401&fmt=gif"
            />
          </noscript>
        </noscript>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-3 col-sm-6 ">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="d-inline-block logo">
                    <img
                      src="/images/logo.png"
                      className="talent-logo"
                      alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
                    />
                  </a>
                </Link>
                <br />
                <br />
                <p>
                  eSpark Talent makes team management easy. With the most
                  advanced & sustainable global recruitment solutions, we offer
                  agile and diligent employees through instant HR outsourcing
                  services. Let’s convert your company into a business giant
                  together!
                </p>
                <ul className="social-links">
                  <h3>Follow Us</h3>
                  {socialLinks?.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item?.link}
                        target="_blank"
                        className={item?.className}
                      >
                        <img
                          src={item?.src}
                          className={item?.className}
                          width={'90%'}
                          height={'90%'}
                          alt="social-icons"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6 ">
              <div className="single-footer-widget">
                <h3>Hire a Talent​</h3>
                <ul className="services-links mt-5">
                  {sliderData?.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={`/hire/${item.slug}`}>
                          <a>{item.title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6 ">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="quick-links mt-5">
                  <li>
                    <Link href="/what-we-do">
                      <a>What we do</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">
                      <a>How it works</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <a>Careers</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6 ">
              <div className="single-footer-widget">
                <h3>Contact Details</h3>
                <ul className="footer-contact-info mt-5">
                  {footerContact?.map((i) => {
                    return (
                      <li key={i.id}>
                        <a href={`mailto:${i.item}`}>{i.item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
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
              <div className="col-lg-6 col-sm-6 col-md-6">
                <p>© Copyright 2023. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
