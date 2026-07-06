import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import WhyUniCore from "./components/home/WhyUniCore";
import Preview from "./components/home/Preview";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";
import Footer from "./components/home/Footer";

/**
 * Renders the root application component.
 *
 * @returns {JSX.Element}
 */
function App() {
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

export default App;