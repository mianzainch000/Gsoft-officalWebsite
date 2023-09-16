import React, { useEffect } from "react";
import { Layout } from "../../Components/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import { BannerArea } from "../../Components/Home/BannerArea";
import { WhoWeAre } from "../../Components/Home/WhoWeAre";
import { OurServices } from "../../Components/Home/OurServices";
import { TechnologiesWeWorkWith } from "../../Components/Home/TechnologiesWeWorkWith";
import { WorkFlow } from "../../Components/Home/WorkFlow";
import { Slider } from "../../Components/Slider";
import { Testimonial } from "../../Components/Testimonial";
import { Faqs } from "../../Components/Home/Faqs";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      {/* Banner Area */}

      <BannerArea />

      {/* Section 1   Who We Are */}

      <WhoWeAre />

      {/* Section 2 our 360 services */}

      <OurServices />

      {/*Section 3 Technologies We Work With */}

      <TechnologiesWeWorkWith />

      {/* Work Flow Our Working Process */}

      <WorkFlow />

      {/* Slider */}

      <Slider />

      {/* TestImonial */}

      <Testimonial />

      {/* FAQ Question */}

      <Faqs />
    </Layout>
  );
};
