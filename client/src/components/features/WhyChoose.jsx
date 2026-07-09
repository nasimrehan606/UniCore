import "./WhyChoose.css";
import {
  FaRocket,
  FaLayerGroup,
  FaMobileAlt,
  FaChartLine,
  FaShieldAlt,
  FaPalette,
} from "react-icons/fa";

/**
 * Displays the Why Choose UniCore section.
 *
 * @returns {JSX.Element}
 */
function WhyChoose() {
  return (
    <section className="why-choose">

      <div className="why-choose-container">

        <div className="why-choose-heading">

          <span className="why-badge">
            WHY CHOOSE UNICORE
          </span>

          <h2>
            Everything You Need
            <span> In One Workspace.</span>
          </h2>

          <p>
            UniCore isn't just another planner. It combines
            productivity, organization, habits, goals,
            journaling, analytics, and motivation into one
            beautiful and intuitive platform.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <div className="why-icon">
              <FaLayerGroup />
            </div>

            <h3>All-in-One Platform</h3>

            <p>
              Tasks, habits, goals, calendar,
              journal, analytics and achievements
              in one place.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <FaRocket />
            </div>

            <h3>Boost Productivity</h3>

            <p>
              Stay focused with powerful planning
              tools that help you accomplish
              more every day.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <FaChartLine />
            </div>

            <h3>Track Your Progress</h3>

            <p>
              Monitor performance through
              beautiful dashboards, reports
              and insightful analytics.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <FaMobileAlt />
            </div>

            <h3>Modern Experience</h3>

            <p>
              Clean interface, responsive
              layouts and a distraction-free
              user experience.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <FaShieldAlt />
            </div>

            <h3>Reliable & Secure</h3>

            <p>
              Designed with secure architecture
              to safely manage your personal
              productivity data.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <FaPalette />
            </div>

            <h3>Beautiful Design</h3>

            <p>
              Premium gradients, smooth
              animations and elegant UI
              crafted for everyday use.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;