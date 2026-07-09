import "./DailyPlanner.css";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Daily Planner feature section.
 *
 * @returns {JSX.Element}
 */
function DailyPlanner() {
  return (
    <section className="daily-planner">

      <div className="daily-planner-container">

        <div className="planner-content">

          <span className="planner-badge">
            DAILY PLANNER
          </span>

          <h2>
            Plan Every Hour.
            <span> Accomplish Every Goal.</span>
          </h2>

          <p>
            The Daily Planner helps you organize your entire day
            with scheduled activities, priorities, reminders,
            and time blocks so you always know what comes next.
          </p>

          <div className="planner-list">

            <div className="planner-item">
              <FaCalendarAlt />
              <span>Create organized daily schedules</span>
            </div>

            <div className="planner-item">
              <FaClock />
              <span>Time-block every important task</span>
            </div>

            <div className="planner-item">
              <FaCheckCircle />
              <span>Track completed activities instantly</span>
            </div>

          </div>

          <button className="planner-btn">
            Learn More
            <FaArrowRight />
          </button>

        </div>

        <div className="planner-preview">

          <div className="planner-window">

            <div className="planner-header">

              <span className="planner-dot red"></span>
              <span className="planner-dot yellow"></span>
              <span className="planner-dot green"></span>

            </div>

            <div className="planner-body">

              <div className="planner-day">
                <h4>Monday</h4>
                <span>12 Tasks</span>
              </div>

              <div className="planner-task completed">
                <span>08:00</span>
                <p>Morning Exercise</p>
              </div>

              <div className="planner-task">
                <span>09:00</span>
                <p>Frontend Development</p>
              </div>

              <div className="planner-task">
                <span>11:30</span>
                <p>Project Meeting</p>
              </div>

              <div className="planner-task">
                <span>02:00</span>
                <p>Study Session</p>
              </div>

              <div className="planner-progress">

                <div className="progress-info">
                  <span>Today's Progress</span>
                  <strong>75%</strong>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DailyPlanner;