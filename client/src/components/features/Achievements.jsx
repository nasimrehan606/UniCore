import "./Achievements.css";
import {
  FaTrophy,
  FaMedal,
  FaFire,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Achievements feature section.
 *
 * @returns {JSX.Element}
 */
function Achievements() {
  return (
    <section className="achievements">

      <div className="achievements-container">

        <div className="achievements-preview">

          <div className="achievement-window">

            <div className="achievement-header">

              <span className="achievement-dot red"></span>
              <span className="achievement-dot yellow"></span>
              <span className="achievement-dot green"></span>

            </div>

            <div className="achievement-body">

              <div className="achievement-title">

                <h4>Your Achievements</h4>

                <span>Level 12</span>

              </div>

              <div className="achievement-card">

                <div className="achievement-icon gold">
                  <FaTrophy />
                </div>

                <div>

                  <h5>Productivity Master</h5>

                  <small>Completed 100 Tasks</small>

                </div>

              </div>

              <div className="achievement-card">

                <div className="achievement-icon orange">
                  <FaFire />
                </div>

                <div>

                  <h5>30-Day Streak</h5>

                  <small>Stayed Consistent</small>

                </div>

              </div>

              <div className="achievement-card">

                <div className="achievement-icon purple">
                  <FaMedal />
                </div>

                <div>

                  <h5>Goal Crusher</h5>

                  <small>Completed 20 Goals</small>

                </div>

              </div>

              <div className="xp-section">

                <div className="xp-info">

                  <span>Experience</span>

                  <strong>2,450 / 3,000 XP</strong>

                </div>

                <div className="xp-bar">

                  <div className="xp-fill"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="achievements-content">

          <span className="achievements-badge">
            ACHIEVEMENTS
          </span>

          <h2>
            Stay Motivated With
            <span> Rewards & Milestones.</span>
          </h2>

          <p>
            Turn productivity into a rewarding experience.
            Earn achievements, unlock badges, build streaks,
            gain experience points, and celebrate every
            milestone you accomplish.
          </p>

          <div className="achievements-list">

            <div className="achievements-item">
              <FaTrophy />
              <span>Unlock unique achievement badges</span>
            </div>

            <div className="achievements-item">
              <FaFire />
              <span>Maintain daily productivity streaks</span>
            </div>

            <div className="achievements-item">
              <FaStar />
              <span>Earn XP and level up over time</span>
            </div>

          </div>

          <button className="achievements-btn">

            Learn More

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
}

export default Achievements;