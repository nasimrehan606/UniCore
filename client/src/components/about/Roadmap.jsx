import "./Roadmap.css";
import {
  FaFlagCheckered,
  FaUserShield,
  FaThLarge,
  FaMobileAlt,
  FaRobot,
  FaGlobe,
} from "react-icons/fa";

/**
 * Displays the UniCore development roadmap.
 *
 * @returns {JSX.Element}
 */
function Roadmap() {
  const roadmap = [
    {
      icon: <FaFlagCheckered />,
      phase: "Phase 1",
      title: "Landing Website",
      description:
        "Build the public website including Home, About, Features, Contact, and FAQ pages.",
    },
    {
      icon: <FaUserShield />,
      phase: "Phase 2",
      title: "Authentication",
      description:
        "Implement secure login, registration, password recovery, and user management.",
    },
    {
      icon: <FaThLarge />,
      phase: "Phase 3",
      title: "Dashboard",
      description:
        "Develop the complete productivity dashboard with planners, tasks, habits, and goals.",
    },
    {
      icon: <FaMobileAlt />,
      phase: "Phase 4",
      title: "Mobile Experience",
      description:
        "Optimize UniCore for tablets and mobile devices with a responsive experience.",
    },
    {
      icon: <FaRobot />,
      phase: "Phase 5",
      title: "AI Features",
      description:
        "Introduce intelligent insights, smart planning, and productivity recommendations.",
    },
    {
      icon: <FaGlobe />,
      phase: "Phase 6",
      title: "Global Launch",
      description:
        "Release UniCore publicly with continuous updates and community-driven improvements.",
    },
  ];

  return (
    <section className="roadmap">

      <div className="roadmap-container">

        <div className="roadmap-heading">

          <span>ROADMAP</span>

          <h2>
            Our Journey
            <span> Has Just Begun.</span>
          </h2>

          <p>
            UniCore is continuously evolving. Every phase brings new
            features, better experiences, and more powerful tools to
            help people stay productive.
          </p>

        </div>

        <div className="roadmap-timeline">

          {roadmap.map((item, index) => (
            <div
              className="roadmap-item"
              key={index}
            >

              <div className="roadmap-icon">
                {item.icon}
              </div>

              <div className="roadmap-content">

                <span>{item.phase}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Roadmap;