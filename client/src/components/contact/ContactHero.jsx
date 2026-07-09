import "./ContactHero.css";

/**
 * Displays the Contact Hero section.
 *
 * @returns {JSX.Element}
 */
function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="contact-hero-container">

        <span className="contact-badge">
          CONTACT US
        </span>

        <h1>
          We'd Love To
          <span> Hear From You.</span>
        </h1>

        <p>
          Have a question, suggestion, or feedback?
          We'd love to hear your thoughts. Fill out the
          form below and we'll get back to you as soon
          as possible.
        </p>

      </div>

    </section>
  );
}

export default ContactHero;