import "./AboutHero.css";

/**
 * Displays the hero section of the About page.
 *
 * @returns {JSX.Element}
 */
function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-hero-container">

        <span className="about-badge">
          ABOUT UNICORE
        </span>

        <h1>
          Building Better Days,
          <br />
          <span>One Plan at a Time.</span>
        </h1>

        <p>
          UniCore is a modern productivity platform designed to help you
          organize your tasks, build lasting habits, achieve meaningful
          goals, and stay focused—all from one beautiful workspace.
        </p>

        <div className="about-buttons">

          <button className="about-primary-btn">
            Get Started
          </button>

          <button className="about-secondary-btn">
            Explore Features
          </button>

        </div>

      </div>

      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

    </section>
  );
}

export default AboutHero;