import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm2 from '@/components/Common/NewsletterForm2';
import PartnerArea from '@/components/TechnologySolutions/PartnerArea';

import {
  thankYouHeadings,
  thankYouParas,
  thankyouCards,
} from 'constants/constants';

function ThankYou() {
  return (
    <>
      <div className="thank-you-main">
        <div className="container-fluid thank-header">
          <Link href="/">
            <Image
              src="/images/ThankyouPageLogo.png"
              width={'157.983px'}
              height={'74.775px'}
            />
          </Link>
          <div>
            <h1 className="thankyou-heading-1">{thankYouHeadings[0]}</h1>
            <h1 className="thankyou-heading-1">{thankYouHeadings[1]}</h1>
            <h2 className="thankyou-heading-2">
              Take Your <span style={{ fontWeight: '700' }}>Business</span> To
              The <span style={{ fontWeight: '700' }}>Next Level</span>
            </h2>
          </div>
          {thankYouParas.map((item, index) => (
            <p className="thankyou-paragraph" key={index}>
              {item}
            </p>
          ))}
          <div className="container">
            <div className="section-title">
              <h2>How It Works</h2>
            </div>
            <div className="row justify-content-center">
              {thankyouCards.map((eachCard, i) => (
                <div
                  key={i}
                  className="col-lg-4 col-sm-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <div className="thankyou-features-box">
                    <div className="icon">
                      <Image src={eachCard.icon} alt="image" />
                    </div>
                    <h3>{eachCard.heading}</h3>
                    <ul>
                      {eachCard.items.map((eachItem, index) => (
                        <li key={index}>{eachItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <PartnerArea />
      </div>
      <NewsletterForm2 />
    </>
  );
}

export default ThankYou;
