import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NewsletterForm2 = () => {
  const router = useRouter();
  const gettingPath = router.pathname;
  return (
    <>
      <div className="subscribe2-area pt-0">
        <div className="container-fluid px-0">
          <div className="page-title-area2">
            <div className="subscribe2-inner">
              <h1>
                Connect With eSpark Talent & Uplift The Professional
                <br /> Performance of Your Business Now! 
              </h1>
              <p>
                Get in touch with skilled interviewers who will help <br /> you
                find the right people for your company's growth
              </p>
              {gettingPath === '/thankyou' ? null : (
                <div className="newsletter-form">
                  <Link
                    href="https://calendly.com/esparktalents/60min?month=2023-09"
                    target="_blank"
                  >
                    <button type="submit">Schedule a Meeting</button>
                  </Link>
                </div>
              )}
            </div>
            <div className="shape1">
              <img
                src="/images/cta/ctaImage1.png"
                alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
              />
            </div>
            <div className="shape3">
              <img
                src="/images/cta/ctaImage2.png"
                alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
              />
            </div>
            <div className="shape4">
              <img
                src="/images/cta/ctaImage3.png"
                alt="Global Recruitment - global recruitment agency - worldwide recruiting agency - global recruitment services - global recruitment solutions - eSpark Talent"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm2;
