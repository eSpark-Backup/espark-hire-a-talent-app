import React from 'react';
import PageTitle from '@/components/Common/PageTitle';
import NewsletterForm2 from '@/components/Common/NewsletterForm2';

import { termsConditions } from 'constants/constants';

export default function TermsConditions() {
  const htmlContent = { __html: termsConditions?.content };
  return (
    <>
      <PageTitle
        homeText={termsConditions?.homeText}
        pageTitle={termsConditions?.pageTitle}
        pageSubTitle={termsConditions?.pageSubTitle}
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
