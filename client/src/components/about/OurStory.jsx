import "./OurStory.css";
import {
  FaLightbulb,
  FaBullseye,
  FaUsers,
} from "react-icons/fa";

/**
 * Displays the story behind UniCore.
 *
 * @returns {JSX.Element}
 */
function OurStory() {
  return (
    <section className="our-story">

      <div className="our-story-container">

        <div className="story-content">

          <span className="story-badge">
            OUR STORY
          </span>

          <h2>
            Every Great Product Begins
            <span> With a Problem.</span>
          </h2>

          <p>
            Modern productivity often means juggling multiple
            applications for tasks, habits, notes, calendars,
            and goals. Constantly switching between tools makes
            it difficult to stay focused and organized.
          </p>

          <p>
            UniCore was created with one simple vision: bring
            everything together in one clean, modern workspace
            where planning your day feels effortless instead of
            overwhelming.
          </p>

          <div className="story-highlights">

            <div className="story-item">

              <div className="story-icon">
                <FaLightbulb />
              </div>

              <div>
                <h4>The Idea</h4>
                <p>
                  One platform for every productivity need.
                </p>
              </div>

            </div>

            <div className="story-item">

              <div className="story-icon">
                <FaBullseye />
              </div>

              <div>
                <h4>The Mission</h4>
                <p>
                  Help people stay organized and consistent.
                </p>
              </div>

            </div>

            <div className="story-item">

              <div className="story-icon">
                <FaUsers />
              </div>

              <div>
                <h4>The Goal</h4>
                <p>
                  Build a productivity platform everyone enjoys using.
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="story-visual">

          <div className="story-card">

            <div className="story-header">

              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>

            </div>

            <div className="story-body">

              <div className="story-box large"></div>

              <div className="story-grid">

                <div className="story-box"></div>
                <div className="story-box"></div>

              </div>

              <div className="story-box wide"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OurStory;