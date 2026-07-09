import ContactHero from "../components/contact/ContactHero";
import Footer from "../components/home/Footer";
import Navbar from "../components/layout/Navbar";
import ContactForm from "../components/contact/ContactForm";

/**
 * Displays the Contact page.
 *
 * @returns {JSX.Element}
 */
function Contact() {
  return (
    <>
        <Navbar />
      <ContactHero />

      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
