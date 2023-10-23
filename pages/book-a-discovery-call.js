import React from "react";
import NewsletterForm2 from "@/components/Common/NewsletterForm2";
import Link from "next/link";
import { We_Adapt_To_Your_Need, data } from "constants/discovery_call_constant";
import PartnerArea from "@/components/TechnologySolutions/PartnerArea";
import Adapt from "@/components/Book_A_Discovery_Call/Adapt";

function DiscoveryCall() {
  const { heading, subHeading, list, text, subText, link } = data;
  const { cardHeading, items } = list;
  return (
    <>
      <div className="discovery-call">
        <div className="container-fluid discovery-call-header">
          <a href="/">
            <img
              src="/images/ThankyouPageLogo.png"
              width={"157.983px"}
              height={"74.775px"}
            />
          </a>
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
                  <img src="/images/discovery_call/discovery_img.png" />
                </div>
              </div>
            </div>
          </div>
          <a href={link} target="blank" className="discovery-call-button">
            <span className="free-strategy">{text}</span>
            <span className="limited-free">{subText}</span>
          </a>
        </div>
      </div>
      <Adapt data={We_Adapt_To_Your_Need} />
      <NewsletterForm2 />
    </>
  );
}

export default DiscoveryCall;
