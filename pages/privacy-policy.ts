import React from 'react';
import PageTitle from '@/components/Common/PageTitle';
import NewsletterForm2 from '@/components/Common/NewsletterForm2';

import { privacyPolicy } from 'constants/constants';

export default function PrivacyPolicy() {
  const htmlContent = { __html: privacyPolicy?.content };

  return (
    <>
      <PageTitle
        homeText={privacyPolicy?.homeText}
        pageTitle={privacyPolicy?.pageTitle}
        pageSubTitle={privacyPolicy?.pageSubTitle}
      />
      <div className="ptb-100">
        <div className="container">
          <div
            className="main-text-content"
            dangerouslySetInnerHTML={htmlContent}
          />
        </div>
      </div>
      <NewsletterForm2 />
    </>
  );
}
