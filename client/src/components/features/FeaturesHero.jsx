import "./FeaturesHero.css";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaBullseye,
  FaClock,
} from "react-icons/fa";

/**
 * Displays the hero section of the Features page.
 *
 * @returns {JSX.Element}
 */
function FeaturesHero() {
  return (
    <section className="features-hero">

      <div className="features-hero-container">

        

        <span className="features-badge">
          POWERFUL FEATURES
        </span>

        <h1>
          Everything You Need
          <br />
          <span>To Master Your Day.</span>
        </h1>

        <p>
          UniCore combines planning, task management, habits,
          goals, journaling, analytics, and productivity tools
          into one modern workspace built for students,
          professionals, and creators.
        </p>

        <div className="features-buttons">

          <button className="features-primary-btn">
            Get Started
          </button>

          <button className="features-secondary-btn">
            Live Demo
          </button>

        </div>

        <div className="features-stats">

          <div className="feature-stat">
            <FaCalendarAlt />
            <span>Planner</span>
          </div>

          <div className="feature-stat">
            <FaCheckCircle />
            <span>Tasks</span>
          </div>

          <div className="feature-stat">
            <FaBullseye />
            <span>Goals</span>
          </div>

          <div className="feature-stat">
            <FaClock />
            <span>Focus</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturesHero;