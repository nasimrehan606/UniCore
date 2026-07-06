import "./Features.css";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaBullseye,
  FaChartLine,
  FaBook,
  FaClock,
} from "react-icons/fa";

/**
 * Displays the main features of UniCore.
 *
 * @returns {JSX.Element}
 */
function Features() {
  const features = [
    {
      icon: <FaCalendarAlt />,
      title: "Daily Planner",
      description:
        "Organize your daily schedule and stay on top of every task.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Habit Tracker",
      description:
        "Build positive habits with daily streaks and progress tracking.",
    },
    {
      icon: <FaBullseye />,
      title: "Goal Manager",
      description:
        "Set clear goals and monitor your progress every day.",
    },
    {
      icon: <FaClock />,
      title: "Pomodoro Timer",
      description:
        "Stay focused using productive work and break sessions.",
    },
    {
      icon: <FaBook />,
      title: "Daily Journal",
      description:
        "Capture your thoughts, reflections, and achievements.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description:
        "Visualize your productivity with beautiful statistics.",
    },
  ];

  return (
    <section className="features">

      <div className="features-container">

        <div className="features-heading">

          <span>FEATURES</span>

          <h2>Everything You Need In One Place</h2>

          <p>
            Powerful tools designed to help you organize your day,
            stay productive, and achieve your goals.
          </p>

        </div>

        <div className="features-grid">

          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
            >
              <div className="feature-icon">
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

export default Features;