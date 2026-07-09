import "./FeaturesOverview.css";
import {
  FaTasks,
  FaCalendarAlt,
  FaBullseye,
  FaBook,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

/**
 * Displays an overview of UniCore's core features.
 *
 * @returns {JSX.Element}
 */
function FeaturesOverview() {
  const features = [
    {
      icon: <FaTasks />,
      title: "Task Management",
      description:
        "Organize your daily tasks with priorities, deadlines, and completion tracking.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Daily Planner",
      description:
        "Plan your entire day with an intuitive schedule and time blocks.",
    },
    {
      icon: <FaBullseye />,
      title: "Goal Tracking",
      description:
        "Create short and long-term goals and monitor your progress every day.",
    },
    {
      icon: <FaClock />,
      title: "Focus Sessions",
      description:
        "Boost concentration using the built-in Pomodoro timer and focus tools.",
    },
    {
      icon: <FaBook />,
      title: "Daily Journal",
      description:
        "Capture your thoughts, reflections, and memorable moments effortlessly.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description:
        "Visualize your productivity through beautiful charts and statistics.",
    },
  ];

  return (
    <section className="features-overview">

      <div className="features-overview-container">

        <div className="overview-header">

          <span className="overview-badge">
            OVERVIEW
          </span>

          <h2>
            Designed To Keep
            <span> Everything Organized</span>
          </h2>

          <p>
            UniCore combines all the essential productivity tools
            into one powerful and beautifully designed workspace.
          </p>

        </div>

        <div className="overview-grid">

          {features.map((feature, index) => (
            <div
              className="overview-card"
              key={index}
            >

              <div className="overview-icon">
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

export default FeaturesOverview;