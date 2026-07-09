import "./GoalManager.css";
import {
  FaBullseye,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Goal Manager feature section.
 *
 * @returns {JSX.Element}
 */
function GoalManager() {
  return (
    <section className="goal-manager">

      <div className="goal-manager-container">

        <div className="goal-preview">

          <div className="goal-window">

            <div className="goal-header">

              <span className="goal-dot red"></span>
              <span className="goal-dot yellow"></span>
              <span className="goal-dot green"></span>

            </div>

            <div className="goal-body">

              <div className="goal-title">

                <h4>Goals</h4>

                <span>4 Active</span>

              </div>

              <div className="goal-card">

                <div>

                  <h5>Launch UniCore</h5>

                  <small>90% Completed</small>

                </div>

                <span className="goal-percentage">
                  90%
                </span>

              </div>

              <div className="goal-card">

                <div>

                  <h5>Complete React Course</h5>

                  <small>68% Completed</small>

                </div>

                <span className="goal-percentage">
                  68%
                </span>

              </div>

              <div className="goal-card">

                <div>

                  <h5>Read 20 Books</h5>

                  <small>45% Completed</small>

                </div>

                <span className="goal-percentage">
                  45%
                </span>

              </div>

              <div className="goal-progress">

                <div className="goal-progress-info">

                  <span>Overall Progress</span>

                  <strong>72%</strong>

                </div>

                <div className="goal-progress-bar">

                  <div className="goal-progress-fill"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="goal-content">

          <span className="goal-badge">
            GOAL MANAGER
          </span>

          <h2>
            Turn Dreams Into
            <span> Achievable Goals.</span>
          </h2>

          <p>
            Set meaningful goals, divide them into milestones,
            monitor your progress, and celebrate every achievement
            along the way with an organized goal management system.
          </p>

          <div className="goal-list">

            <div className="goal-item">
              <FaBullseye />
              <span>Create short and long-term goals</span>
            </div>

            <div className="goal-item">
              <FaChartLine />
              <span>Track progress with visual indicators</span>
            </div>

            <div className="goal-item">
              <FaCheckCircle />
              <span>Complete milestones step by step</span>
            </div>

          </div>

          <button className="goal-btn">

            Learn More

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
}

export default GoalManager;