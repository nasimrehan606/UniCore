import "./Pomodoro.css";
import {
  FaClock,
  FaPlay,
  FaPause,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Pomodoro Timer feature section.
 *
 * @returns {JSX.Element}
 */
function Pomodoro() {
  return (
    <section className="pomodoro">

      <div className="pomodoro-container">

        <div className="pomodoro-content">

          <span className="pomodoro-badge">
            POMODORO TIMER
          </span>

          <h2>
            Focus Deeply.
            <span> Achieve More.</span>
          </h2>

          <p>
            Stay productive using the Pomodoro Technique.
            Work in focused sessions, take meaningful breaks,
            and build a sustainable workflow without burnout.
          </p>

          <div className="pomodoro-list">

            <div className="pomodoro-item">
              <FaClock />
              <span>25-minute focus sessions</span>
            </div>

            <div className="pomodoro-item">
              <FaPause />
              <span>Automatic short & long breaks</span>
            </div>

            <div className="pomodoro-item">
              <FaBrain />
              <span>Improve concentration every day</span>
            </div>

          </div>

          <button className="pomodoro-btn">

            Learn More

            <FaArrowRight />

          </button>

        </div>

        <div className="pomodoro-preview">

          <div className="timer-window">

            <div className="timer-header">

              <span className="timer-dot red"></span>
              <span className="timer-dot yellow"></span>
              <span className="timer-dot green"></span>

            </div>

            <div className="timer-body">

  <div className="timer-circle">

    <div className="timer-inner">

      <span className="timer-time">
        25:00
      </span>

      <small>Focus Session</small>

    </div>

  </div>

  <div className="timer-controls">

    <button className="play-btn">
      <FaPlay />
    </button>

    <button className="pause-btn">
      <FaPause />
    </button>

    <button className="reset-btn">
      ↻
    </button>

  </div>

  <div className="session-info">

    <div className="session-card">
      <strong>6</strong>
      <span>Sessions</span>
    </div>

    <div className="session-card">
      <strong>2h 30m</strong>
      <span>Focused</span>
    </div>

    <div className="session-card">
      <strong>98%</strong>
      <span>Efficiency</span>
    </div>

  </div>

</div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Pomodoro;