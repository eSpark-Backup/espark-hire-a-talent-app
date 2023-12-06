import React from 'react';
import Link from 'next/link';
import AdaptTab from '@/components/Book_A_Discovery_Call/Adapt';
import ReliableAndSecure from '@/components/Book_A_Discovery_Call/ReliableAndSecure';
import OurProcess from '@/components/Book_A_Discovery_Call/OurProcess';
import DiscoveryServices from '@/components/Book_A_Discovery_Call/DiscoveryServices';
import MeetTheTeam from '@/components/Book_A_Discovery_Call/MeetTheTeam';
import HiringTab from '@/components/Book_A_Discovery_Call/Hiring';
import GetTalent from '@/components/Book_A_Discovery_Call/GetTalent';
import ClientFeedback from '@/components/Book_A_Discovery_Call/ClientFeedback';

import {
  ClientFeedbackData,
  Hiring_data,
  Meet_The_Team,
  Our_Process,
  Reliable_And_Secure,
  We_Adapt_To_Your_Need,
  data,
} from 'constants/discovery_call_constant';
import { sliderData } from 'constants/constants';

function DiscoveryCall() {
  const { heading, subHeading, list, text, subText, link } = data;
  const { cardHeading, items } = list;
  return (
    <>
      <div className="DiscoveryCall discovery-call">
        <div className="container-fluid discovery-call-header">
          <Link href="/">
            <img
              src="/images/ThankyouPageLogo.png"
              width={'157.983px'}
              height={'74.775px'}
            />
          </Link>
          <div>
            <h1 className="discovery-call-heading-1">{heading}</h1>
            <h2
              className="discovery-call-heading-2"
              dangerouslySetInnerHTML={{ __html: subHeading }}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-items-center d-flex">
                <div className="discovery-call-features">
                  <h3>{cardHeading}</h3>
                  <ul>
                    {items?.map((eachItem, index) => (
                      <li key={index}>{eachItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="discovery-call-img">
                  <video controls autoPlay muted loop>
                    <source
                      src={'/images/discovery_call/video.mp4'}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <Link href={link} target="blank" className="discovery-call-button">
            <span className="free-strategy">{text}</span>
            <span className="limited-free">{subText}</span>
          </Link>
        </div>
      </div>
      <AdaptTab data={We_Adapt_To_Your_Need} />
      <ReliableAndSecure data={Reliable_And_Secure} />
      <OurProcess data={Our_Process} />
      <DiscoveryServices items={sliderData} />
      <HiringTab data={Hiring_data} />
      <MeetTheTeam data={Meet_The_Team} />
      <GetTalent />
      <ClientFeedback data={ClientFeedbackData} />
    </>
  );
}

export default DiscoveryCall;
