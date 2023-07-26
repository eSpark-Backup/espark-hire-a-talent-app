import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import OurTeamMembers from "@/components/Team/OurTeamMembers";
import GetStarted from "@/components/Common/GetStarted";

export default function Team() {
  return (
    <>
      <PageTitle homeText="Home" pageTitle="Meet Our Leadership Team" />

      <OurTeamMembers />

      <GetStarted />
    </>
  );
}
