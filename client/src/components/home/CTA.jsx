import "./CTA.css";

/**
 * Displays the call-to-action section.
 *
 * @returns {JSX.Element}
 */
function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        <span className="cta-badge">
          START TODAY
        </span>

        <h2>
          Ready to Make Every Day
          <span> More Productive?</span>
        </h2>

        <p>
          Join UniCore and organize your tasks, habits, goals,
          journals, and productivity in one beautiful workspace.
        </p>

        <div className="cta-buttons">

          <button className="cta-primary-btn">
            Get Started Free
          </button>

          <button className="cta-secondary-btn">
            Explore Features
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;