
import { HeroSection } from "../Components/HeroSection/HeroSection";
import { Client } from "../Components/ClientofCompany/Client";
import { Section2 } from "../Components/Section2/Section2";
import { TabSection } from "../Components/TabSection/TabSection";
import { SectionOne } from "../Components/Section/SectionOne";

export const LandingPage = () => {
  return (  
    <>
     
      <HeroSection />
      <Client />
      <SectionOne/>
      <TabSection/>
      <Section2 />
    
    </>
  );
};
