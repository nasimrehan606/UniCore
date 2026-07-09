import "./Analytics.css";
import {
  FaChartLine,
  FaTasks,
  FaBullseye,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Analytics feature section.
 *
 * @returns {JSX.Element}
 */
function Analytics() {
  return (
    <section className="analytics">

      <div className="analytics-container">

        <div className="analytics-content">

          <span className="analytics-badge">
            ANALYTICS
          </span>

          <h2>
            Measure Progress.
            <span> Improve Every Day.</span>
          </h2>

          <p>
            Visualize your productivity with beautiful analytics.
            Track completed tasks, habits, goals, focus sessions,
            and overall performance from one powerful dashboard.
          </p>

          <div className="analytics-list">

            <div className="analytics-item">
              <FaChartLine />
              <span>Interactive productivity charts</span>
            </div>

            <div className="analytics-item">
              <FaTasks />
              <span>Daily, weekly & monthly reports</span>
            </div>

            <div className="analytics-item">
              <FaBullseye />
              <span>Performance insights & trends</span>
            </div>

          </div>

          <button className="analytics-btn">

            Learn More

            <FaArrowRight />

          </button>

        </div>

        <div className="analytics-preview">

          <div className="analytics-window">

            <div className="analytics-header">

              <span className="analytics-dot red"></span>
              <span className="analytics-dot yellow"></span>
              <span className="analytics-dot green"></span>

            </div>

            <div className="analytics-body">

              <div className="analytics-top">

                <div className="analytics-card">

                  <small>Productivity</small>

                  <strong>92%</strong>

                  <span>▲ +8%</span>

                </div>

                <div className="analytics-card">

                  <small>Tasks</small>

                  <strong>146</strong>

                  <span>Completed</span>

                </div>

              </div>

              <div className="chart-area">

                <div className="chart-bars">

                  <div className="bar" style={{height:"45%"}}></div>
                  <div className="bar" style={{height:"70%"}}></div>
                  <div className="bar" style={{height:"55%"}}></div>
                  <div className="bar active" style={{height:"92%"}}></div>
                  <div className="bar" style={{height:"80%"}}></div>
                  <div className="bar" style={{height:"65%"}}></div>
                  <div className="bar" style={{height:"88%"}}></div>

                </div>

                <div className="chart-labels">

                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>

                </div>

              </div>

              <div className="analytics-stats">

                <div>

                  <strong>58h</strong>

                  <span>Focus Time</span>

                </div>

                <div>

                  <strong>31</strong>

                  <span>Day Streak</span>

                </div>

                <div>

                  <strong>89%</strong>

                  <span>Goal Rate</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Analytics;