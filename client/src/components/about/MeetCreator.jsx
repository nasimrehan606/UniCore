import "./MeetCreator.css";
import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

/**
 * Displays information about the creator of UniCore.
 *
 * @returns {JSX.Element}
 */
function MeetCreator() {
  return (
    <section className="meet-creator">

      <div className="meet-creator-container">

        <div className="creator-image">

          <div className="creator-card">

            <div className="creator-avatar">
              NC
            </div>

            <h3>Nasim Rehan</h3>

            <span>Founder & Full Stack Developer</span>

            <div className="creator-socials">

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className="creator-content">

          <span className="creator-badge">
            MEET THE CREATOR
          </span>

          <h2>
            Built With Passion,
            <span> Designed For Everyone.</span>
          </h2>

          <p>
            UniCore was created with one goal in mind: to simplify
            productivity by bringing everything into one modern,
            intuitive workspace. Instead of relying on multiple
            applications, users can plan, focus, track, and grow
            from a single platform.
          </p>

          <p>
            Every feature is carefully designed with attention to
            usability, performance, and clean design to provide
            an enjoyable productivity experience.
          </p>

          <div className="creator-highlights">

            <div className="creator-item">

              <div className="creator-icon">
                <FaCode />
              </div>

              <div>

                <h4>Full Stack Development</h4>

                <p>
                  Modern technologies with scalable architecture.
                </p>

              </div>

            </div>

            <div className="creator-item">

              <div className="creator-icon">
                <FaLightbulb />
              </div>

              <div>

                <h4>Creative Problem Solving</h4>

                <p>
                  Building solutions that simplify everyday life.
                </p>

              </div>

            </div>

            <div className="creator-item">

              <div className="creator-icon">
                <FaRocket />
              </div>

              <div>

                <h4>Future Vision</h4>

                <p>
                  Continuously evolving UniCore into a complete
                  productivity ecosystem.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MeetCreator;