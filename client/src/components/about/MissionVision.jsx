import "./MissionVision.css";
import { FaBullseye, FaEye } from "react-icons/fa";

/**
 * Displays the mission and vision section.
 *
 * @returns {JSX.Element}
 */
function MissionVision() {
  return (
    <section className="mission-vision">

      <div className="mission-container">

        <div className="mission-heading">

          <span>MISSION & VISION</span>

          <h2>
            Driven By Purpose,
            <span> Inspired By The Future.</span>
          </h2>

          <p>
            UniCore is built to simplify productivity today while
            continuously evolving into a complete personal
            productivity ecosystem for tomorrow.
          </p>

        </div>

        <div className="mission-grid">

          <div className="mission-card">

            <div className="mission-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              To help people organize their daily lives through one
              modern platform that combines planning, productivity,
              focus, and personal growth into a seamless experience.
            </p>

          </div>

          <div className="mission-card">

            <div className="mission-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become the all-in-one productivity platform that
              empowers millions of people to work smarter, build
              better habits, and achieve meaningful goals every day.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;