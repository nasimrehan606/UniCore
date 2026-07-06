import "./Hero.css";

/**
 * Displays the landing page hero section.
 *
 * @returns {JSX.Element}
 */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            🚀 Productivity Reimagined
          </span>

          <h1>
            Plan your day.
            <br />
            <span>Make it unique.</span>
          </h1>

          <p>
            UniCore helps you organize tasks, build habits,
            track goals, and stay productive—all in one
            beautiful workspace.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

          <div className="hero-stats">

            <div>
              <h3>10K+</h3>
              <p>Active Users</p>
            </div>

            <div>
              <h3>98%</h3>
              <p>Task Completion</p>
            </div>

            <div>
              <h3>4.9★</h3>
              <p>User Rating</p>
            </div>

          </div>

        </div>

        <div className="hero-preview">

          <div className="preview-card">

            <div className="preview-header">
              <div className="circle red"></div>
              <div className="circle yellow"></div>
              <div className="circle green"></div>
            </div>

            <div className="preview-body">

              <div className="preview-sidebar"></div>

              <div className="preview-content">

                <div className="preview-box large"></div>

                <div className="preview-grid">

                  <div className="preview-box"></div>
                  <div className="preview-box"></div>
                  <div className="preview-box"></div>
                  <div className="preview-box"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;