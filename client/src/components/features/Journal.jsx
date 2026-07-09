import "./Journal.css";
import {
  FaBookOpen,
  FaPenNib,
  FaSmile,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Journal feature section.
 *
 * @returns {JSX.Element}
 */
function Journal() {
  return (
    <section className="journal">

      <div className="journal-container">

        <div className="journal-preview">

          <div className="journal-window">

            <div className="journal-header">

              <span className="journal-dot red"></span>
              <span className="journal-dot yellow"></span>
              <span className="journal-dot green"></span>

            </div>

            <div className="journal-body">

              <div className="journal-date">
                <span>Monday, July 13</span>
                <small>09:45 PM</small>
              </div>

              <h4>Today's Reflection</h4>

              <p className="journal-text">
                Today I completed my frontend homepage and made
                significant progress on the Features page. Tomorrow
                I'll continue building the remaining sections and
                polish the overall UI.
              </p>

              <div className="journal-tags">

                <span>Productive</span>
                <span>Focused</span>
                <span>Learning</span>

              </div>

            </div>

          </div>

        </div>

        <div className="journal-content">

          <span className="journal-badge">
            DAILY JOURNAL
          </span>

          <h2>
            Capture Every Thought.
            <span> Remember Every Moment.</span>
          </h2>

          <p>
            Keep a personal journal to record your daily
            experiences, achievements, ideas, and reflections.
            Writing consistently helps you learn, grow, and
            stay mindful throughout your journey.
          </p>

          <div className="journal-list">

            <div className="journal-item">
              <FaBookOpen />
              <span>Create unlimited journal entries</span>
            </div>

            <div className="journal-item">
              <FaPenNib />
              <span>Write thoughts and daily reflections</span>
            </div>

            <div className="journal-item">
              <FaSmile />
              <span>Track your emotions and memories</span>
            </div>

          </div>

          <button className="journal-btn">

            Learn More

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
}

export default Journal;