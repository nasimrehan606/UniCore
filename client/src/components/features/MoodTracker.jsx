import "./MoodTracker.css";
import {
  FaSmile,
  FaMeh,
  FaFrown,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Mood Tracker feature section.
 *
 * @returns {JSX.Element}
 */
function MoodTracker() {
  return (
    <section className="mood-tracker">

      <div className="mood-tracker-container">

        <div className="mood-content">

          <span className="mood-badge">
            MOOD TRACKER
          </span>

          <h2>
            Understand Your Emotions.
            <span> Improve Your Well-Being.</span>
          </h2>

          <p>
            Record how you feel each day and discover emotional
            patterns over time. Monitor your mood, reflect on
            your experiences, and build healthier daily habits.
          </p>

          <div className="mood-list">

            <div className="mood-item">
              <FaSmile />
              <span>Log your mood in one click</span>
            </div>

            <div className="mood-item">
              <FaChartLine />
              <span>Visualize emotional trends</span>
            </div>

            <div className="mood-item">
              <FaMeh />
              <span>Connect moods with daily activities</span>
            </div>

          </div>

          <button className="mood-btn">

            Learn More

            <FaArrowRight />

          </button>

        </div>

        <div className="mood-preview">

          <div className="mood-window">

            <div className="mood-header">

              <span className="mood-dot red"></span>
              <span className="mood-dot yellow"></span>
              <span className="mood-dot green"></span>

            </div>

            <div className="mood-body">

              <div className="today-mood">

                <h4>Today's Mood</h4>

                <div className="mood-emoji">
                  😊
                </div>

                <strong>Feeling Great</strong>

                <small>
                  Keep up the amazing work!
                </small>

              </div>

              <div className="weekly-moods">

                <span>Weekly Mood</span>

                <div className="mood-days">

                  <div className="day active">😊</div>
                  <div className="day">😁</div>
                  <div className="day">🙂</div>
                  <div className="day">😐</div>
                  <div className="day">😊</div>
                  <div className="day">😁</div>
                  <div className="day">😊</div>

                </div>

              </div>

              <div className="mood-score">

                <div>

                  <strong>8.9</strong>

                  <span>Average</span>

                </div>

                <div>

                  <strong>25</strong>

                  <span>Happy Days</span>

                </div>

                <div>

                  <strong>92%</strong>

                  <span>Positive</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MoodTracker;