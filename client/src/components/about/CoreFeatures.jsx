import "./CoreFeatures.css";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaBullseye,
  FaClock,
  FaBook,
  FaChartLine,
  FaSmile,
  FaFire,
} from "react-icons/fa";

/**
 * Displays the core features of UniCore.
 *
 * @returns {JSX.Element}
 */
function CoreFeatures() {
  const features = [
    {
      icon: <FaCalendarAlt />,
      title: "Daily Planner",
      description:
        "Plan your day with a clear schedule and never miss an important task.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Task Management",
      description:
        "Create, organize, prioritize, and complete tasks with ease.",
    },
    {
      icon: <FaFire />,
      title: "Habit Tracker",
      description:
        "Build positive habits and maintain long-term consistency with streaks.",
    },
    {
      icon: <FaBullseye />,
      title: "Goals",
      description:
        "Set meaningful goals and monitor your progress every day.",
    },
    {
      icon: <FaClock />,
      title: "Pomodoro Timer",
      description:
        "Stay focused using productive work sessions and scheduled breaks.",
    },
    {
      icon: <FaBook />,
      title: "Journal",
      description:
        "Capture ideas, reflections, and memorable moments in one place.",
    },
    {
      icon: <FaSmile />,
      title: "Mood Tracker",
      description:
        "Track your daily emotions and understand your mental well-being.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description:
        "Visualize your productivity with detailed insights and statistics.",
    },
  ];

  return (
    <section className="core-features">

      <div className="core-features-container">

        <div className="core-features-heading">

          <span>CORE FEATURES</span>

          <h2>
            Everything You Need
            <span> To Stay Productive.</span>
          </h2>

          <p>
            UniCore brings together powerful productivity tools
            into one modern workspace, helping you stay organized,
            focused, and motivated every day.
          </p>

        </div>

        <div className="core-features-grid">

          {features.map((feature, index) => (
            <div
              className="core-feature-card"
              key={index}
            >

              <div className="core-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CoreFeatures;