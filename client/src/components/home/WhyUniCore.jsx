import "./WhyUniCore.css";
import {
  FaRocket,
  FaShieldAlt,
  FaPalette,
  FaBolt,
} from "react-icons/fa";

/**
 * Displays the reasons to choose UniCore.
 *
 * @returns {JSX.Element}
 */
function WhyUniCore() {
  return (
    <section className="why-unicore">

      <div className="why-container">

        <div className="why-image">

          <div className="why-dashboard">

            <div className="dashboard-card large"></div>

            <div className="dashboard-row">
              <div className="dashboard-card"></div>
              <div className="dashboard-card"></div>
            </div>

            <div className="dashboard-card wide"></div>

          </div>

        </div>

        <div className="why-content">

          <span className="why-badge">
            WHY UNICORE
          </span>

          <h2>
            Productivity Should Feel
            <span> Simple & Beautiful.</span>
          </h2>

          <p>
            UniCore combines planning, habits, goals, journals,
            analytics, and focus sessions into one clean workspace
            so you can spend less time organizing and more time
            achieving.
          </p>

          <div className="why-list">

            <div className="why-item">

              <div className="why-icon">
                <FaRocket />
              </div>

              <div>
                <h4>Boost Productivity</h4>
                <p>
                  Organize your entire day from one dashboard.
                </p>
              </div>

            </div>

            <div className="why-item">

              <div className="why-icon">
                <FaShieldAlt />
              </div>

              <div>
                <h4>Everything Together</h4>
                <p>
                  No switching between multiple productivity apps.
                </p>
              </div>

            </div>

            <div className="why-item">

              <div className="why-icon">
                <FaPalette />
              </div>

              <div>
                <h4>Modern Experience</h4>
                <p>
                  A clean interface designed for comfort and speed.
                </p>
              </div>

            </div>

            <div className="why-item">

              <div className="why-icon">
                <FaBolt />
              </div>

              <div>
                <h4>Stay Focused</h4>
                <p>
                  Build consistency with habits, goals and timers.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyUniCore;