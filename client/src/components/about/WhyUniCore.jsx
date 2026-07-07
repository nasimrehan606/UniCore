import "./WhyUniCore.css";
import {
  FaLayerGroup,
  FaRocket,
  FaShieldAlt,
  FaPalette,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

/**
 * Displays why users should choose UniCore.
 *
 * @returns {JSX.Element}
 */
function WhyUniCore() {
  const reasons = [
    {
      icon: <FaLayerGroup />,
      title: "All-in-One Workspace",
      description:
        "Tasks, habits, goals, journals, analytics, and focus sessions in one place.",
    },
    {
      icon: <FaRocket />,
      title: "Boost Productivity",
      description:
        "Stay organized with a workflow designed to help you accomplish more every day.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Simple & Reliable",
      description:
        "A clean interface that removes distractions and keeps everything accessible.",
    },
    {
      icon: <FaPalette />,
      title: "Modern Design",
      description:
        "A beautiful experience with smooth interactions and a premium interface.",
    },
    {
      icon: <FaChartLine />,
      title: "Track Progress",
      description:
        "Visualize your habits, goals, and productivity with insightful analytics.",
    },
    {
      icon: <FaClock />,
      title: "Stay Focused",
      description:
        "Use planning tools and focus sessions to build consistency every day.",
    },
  ];

  return (
    <section className="about-why">

      <div className="about-why-container">

        <div className="about-why-heading">

          <span>WHY UNICORE</span>

          <h2>
            More Than A Planner,
            <span> Your Daily Productivity Partner.</span>
          </h2>

          <p>
            UniCore isn't just another productivity app. It's a
            complete workspace designed to simplify your daily life,
            improve focus, and help you achieve your goals.
          </p>

        </div>

        <div className="about-why-grid">

          {reasons.map((reason, index) => (
            <div
              className="about-why-card"
              key={index}
            >

              <div className="about-why-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyUniCore;