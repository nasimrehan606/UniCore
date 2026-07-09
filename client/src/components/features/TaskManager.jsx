import "./TaskManager.css";
import {
  FaTasks,
  FaFlag,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Task Manager feature section.
 *
 * @returns {JSX.Element}
 */
function TaskManager() {
  return (
    <section className="task-manager">

      <div className="task-manager-container">

        <div className="task-preview">

          <div className="task-window">

            <div className="task-header">

              <span className="task-dot red"></span>
              <span className="task-dot yellow"></span>
              <span className="task-dot green"></span>

            </div>

            <div className="task-body">

              <div className="task-title">

                <h4>Today's Tasks</h4>

                <span>8 Tasks</span>

              </div>

              <div className="task-card completed">

                <FaCheckCircle />

                <div>

                  <h5>Design Dashboard UI</h5>

                  <span>Completed</span>

                </div>

              </div>

              <div className="task-card">

                <FaFlag />

                <div>

                  <h5>Finish React Components</h5>

                  <span>High Priority</span>

                </div>

              </div>

              <div className="task-card">

                <FaTasks />

                <div>

                  <h5>Update Documentation</h5>

                  <span>In Progress</span>

                </div>

              </div>

              <div className="task-status">

                <div>

                  <strong>75%</strong>

                  <span>Completed</span>

                </div>

                <div>

                  <strong>2</strong>

                  <span>Remaining</span>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="task-content">

          <span className="task-badge">
            TASK MANAGER
          </span>

          <h2>
            Stay Organized.
            <span> Finish More Every Day.</span>
          </h2>

          <p>
            Manage all your daily tasks from one beautiful
            workspace. Create priorities, organize projects,
            monitor progress, and never miss an important task.
          </p>

          <div className="task-list">

            <div className="task-item">
              <FaCheckCircle />
              <span>Create unlimited tasks and subtasks</span>
            </div>

            <div className="task-item">
              <FaFlag />
              <span>Set priorities and deadlines</span>
            </div>

            <div className="task-item">
              <FaTasks />
              <span>Track progress in real time</span>
            </div>

          </div>

          <button className="task-btn">

            Learn More

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
}

export default TaskManager;