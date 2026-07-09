import "./HabitTracker.css";
import {
  FaFire,
  FaCheckCircle,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Habit Tracker feature section.
 *
 * @returns {JSX.Element}
 */
function HabitTracker() {
  return (
    <section className="habit-tracker">

      <div className="habit-tracker-container">

        <div className="habit-content">

          <span className="habit-badge">
            HABIT TRACKER
          </span>

          <h2>
            Build Better Habits.
            <span> Stay Consistent.</span>
          </h2>

          <p>
            Create positive habits, maintain daily streaks,
            and track your consistency with a clean and
            motivating habit dashboard designed to help
            you improve every single day.
          </p>

          <div className="habit-list">

            <div className="habit-item">
              <FaFire />
              <span>Maintain daily streaks</span>
            </div>

            <div className="habit-item">
              <FaCheckCircle />
              <span>Mark habits with one click</span>
            </div>

            <div className="habit-item">
              <FaChartLine />
              <span>Analyze your consistency over time</span>
            </div>

          </div>

          <button className="habit-btn">

            Learn More

            <FaArrowRight />

          </button>

        </div>

        <div className="habit-preview">

          <div className="habit-window">

            <div className="habit-header">

              <span className="habit-dot red"></span>
              <span className="habit-dot yellow"></span>
              <span className="habit-dot green"></span>

            </div>

            <div className="habit-body">

              <div className="habit-title">

                <h4>Habit Tracker</h4>

                <span>July</span>

              </div>

              <div className="habit-card">

                <div>

                  <h5>Morning Exercise</h5>

                  <small>🔥 21 Day Streak</small>

                </div>

                <FaCheckCircle className="habit-check" />

              </div>

              <div className="habit-card">

                <div>

                  <h5>Read 30 Minutes</h5>

                  <small>🔥 18 Day Streak</small>

                </div>

                <FaCheckCircle className="habit-check" />

              </div>

              <div className="habit-card">

                <div>

                  <h5>Drink Water</h5>

                  <small>🔥 35 Day Streak</small>

                </div>

                <FaCheckCircle className="habit-check" />

              </div>

              <div className="habit-progress">

                <div className="habit-progress-info">

                  <span>Weekly Completion</span>

                  <strong>92%</strong>

                </div>

                <div className="habit-progress-bar">

                  <div className="habit-progress-fill"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HabitTracker;