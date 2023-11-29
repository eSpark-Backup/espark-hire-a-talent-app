import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import LandingBanner from "@/components/Book_A_Meeting/Banner";
import BookDemo from "@/components/Book_A_Meeting/BookDemo";
import LandingPartners from "@/components/Book_A_Meeting/Partners";
import WhyUs from "@/components/Book_A_Meeting/WhyUs";
import HowItWorks from "@/components/Book_A_Meeting/HowItWorks";
import CommonQuestions from "@/components/Book_A_Meeting/CommonQuestions";
import LetsTalk from "@/components/Book_A_Meeting/LetsTalk";
import Reviews from "@/components/Book_A_Meeting/Reviews";

import { bookAMeeting } from "constants/book_a_meeting_constant";

export default function LandingPage() {
  const { pathname } = useRouter();

  const [windowWidth, setWindowWidth] = useState(null);
  const [scrollY, setScrollY] = useState(null);

  useEffect(() => {
    let logo = document.querySelector(".talent-logo");
    let navbar = document.querySelector(".navbar-nav");

    if (windowWidth > 768 && pathname === "/book-a-meeting") {
      logo.src = "/images/book-a-meeting/light-logo.png";
      navbar.classList.add("light-link");

      if (scrollY > 170) {
        toggleHeader(logo, navbar);
      }
    } else {
      toggleHeader(logo, navbar);
    }
  }, [pathname, scrollY, windowWidth]);

  const toggleHeader = (logo, navbar) => {
    logo.src = "/images/logo.png";
    navbar.classList.remove("light-link");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleSCY = () => {
      setScrollY(window.scrollY);
    };

    handleResize();
    handleSCY();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleSCY);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleSCY);
    };
  }, []);

  return (
    <>
      <LandingBanner companySize={bookAMeeting.companySize} />

      <LandingPartners />

      <BookDemo />

      <WhyUs />

      <HowItWorks />

      <CommonQuestions commonQuestions={bookAMeeting.commonQuestions} />

      <Reviews items={bookAMeeting.reviews} />

      <LetsTalk />
    </>
  );
}
