import HeroSection from '@/components/Partners/HeroSection';
import { PartnersTitleData } from 'constants/partnersConstants';
import React from 'react';

const Partners = () => {
  const { title, description, image, alt } = PartnersTitleData;
  return (
    <div className="partner-page">
      <HeroSection
        alt={alt}
        title={title}
        description={description}
        image={image}
      />
    </div>
  );
};

export default Partners;
