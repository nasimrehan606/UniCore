
import Footer from "../components/home/Footer";
import Navbar from "../components/layout/Navbar";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import WhyUniCore from "../components/about/WhyUniCore";
import CoreFeatures from "../components/about/CoreFeatures";
import OurValues from "../components/about/OurValues";
import MeetCreator from "../components/about/MeetCreator";
import TechnologyStack from "../components/about/TechnologyStack";
import Roadmap from "../components/about/Roadmap";
import FAQPreview from "../components/about/FAQPreview";
import CTA from "../components/about/CTA";

/**
 * Displays the About page.
 *
 * @returns {JSX.Element}
 */
function About() {
  return (
    <>

      <main>
         <Navbar />

        <AboutHero />

        <OurStory />

        <MissionVision />

        <WhyUniCore />

        <CoreFeatures />

        <OurValues />

        <MeetCreator />

        <TechnologyStack />

        <Roadmap />

        <FAQPreview />

        <CTA />

      </main>

      <Footer />
    </>
  );
}

export default About;