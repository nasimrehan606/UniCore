import "./CTA.css";

/**
 * Displays the About page call-to-action section.
 *
 * @returns {JSX.Element}
 */
function CTA() {
  return (
    <section className="about-cta">

      <div className="about-cta-container">

        <span className="about-cta-badge">
          START YOUR JOURNEY
        </span>

        <h2>
          Ready to Transform
          <span> Your Productivity?</span>
        </h2>

        <p>
          Join UniCore today and bring your tasks, habits, goals,
          journals, and productivity tools together in one modern,
          beautiful workspace.
        </p>

        <div className="about-cta-buttons">

          <button className="about-cta-primary">
            Get Started
          </button>

          <button className="about-cta-secondary">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;
