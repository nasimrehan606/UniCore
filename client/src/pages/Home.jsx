import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import WhyUniCore from "../components/home/WhyUniCore";
import Preview from "../components/home/Preview";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";
import Navbar from "../components/layout/Navbar";

/**
 * Displays the application's landing page.
 *
 * @returns {JSX.Element}
 */
function Home() {
  return (
    <>
     <Navbar />
      <Hero />
      <Features/>
      <WhyUniCore />
      <Preview />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;