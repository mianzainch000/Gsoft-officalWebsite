import React, { useEffect } from "react";
import { Layout } from "../../Components/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import { BannerArea } from "../../Components/Company/BannerArea";
import { WorkWithTechLeader } from "../../Components/Company/WorkWithTechLeader";
import { OurMissionAndVision } from "../../Components/Company/OurMissionAndVision";
import { Number } from "../../Components/Company/Number";
import { MeetOurClient } from "../../Components/Company/MeetOurClient";
import { Slider } from "../../Components/Slider";
import { Testimonial } from "../../Components/Testimonial";

export const Company = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      {/* Banner Area */}

      <BannerArea />

      {/* Section 1 */}

      <WorkWithTechLeader />

      {/* section 2 Work with the Tech Leader. */}

      <OurMissionAndVision />

      {/* Section 3 Number  */}

      <Number />

      {/* Section 4 Meet Our Clients */}

      <MeetOurClient />

      {/* Section 5 Slider */}

      <Slider />

      {/* Section 6  Test imonial */}

      <Testimonial />
    </Layout>
  );
};
