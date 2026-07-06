import "./Preview.css";
import {
  FaCheckCircle,
  FaBullseye,
  FaClock,
  FaFire,
} from "react-icons/fa";

/**
 * Displays a preview of the UniCore dashboard.
 *
 * @returns {JSX.Element}
 */
function Preview() {
  return (
    <section className="preview">

      <div className="preview-container">

        <div className="preview-heading">

          <span>PREVIEW</span>

          <h2>
            A Dashboard You'll
            <span> Love Using</span>
          </h2>

          <p>
            Everything you need to manage your day is available
            in one clean and intuitive dashboard.
          </p>

        </div>

        <div className="dashboard-preview">

          <aside className="dashboard-sidebar">

            <h3>UniCore</h3>

            <ul>
              <li className="active">Dashboard</li>
              <li>Planner</li>
              <li>Habits</li>
              <li>Goals</li>
              <li>Journal</li>
              <li>Analytics</li>
            </ul>

          </aside>

          <main className="dashboard-content">

            <div className="dashboard-top">

              <div className="welcome-card">

                <h3>Good Morning 👋</h3>

                <p>
                  Stay focused and complete your daily goals.
                </p>

              </div>

              <div className="focus-card">

                <FaClock />

                <h4>02:15</h4>

                <p>Focus Time</p>

              </div>

            </div>

            <div className="dashboard-grid">

              <div className="dashboard-widget">

                <FaCheckCircle />

                <h4>Today's Tasks</h4>

                <span>8 / 10 Completed</span>

              </div>

              <div className="dashboard-widget">

                <FaFire />

                <h4>Habit Streak</h4>

                <span>21 Days</span>

              </div>

              <div className="dashboard-widget">

                <FaBullseye />

                <h4>Goals</h4>

                <span>4 Active</span>

              </div>

            </div>

          </main>

        </div>

      </div>

    </section>
  );
}

export default Preview;