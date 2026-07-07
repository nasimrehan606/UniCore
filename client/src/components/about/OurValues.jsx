import "./OurValues.css";
import {
  FaLightbulb,
  FaLock,
  FaRocket,
  FaUsers,
  FaHeart,
  FaGem,
} from "react-icons/fa";

/**
 * Displays the core values of UniCore.
 *
 * @returns {JSX.Element}
 */
function OurValues() {
  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "We continuously improve UniCore with smarter ideas and modern technology.",
    },
    {
      icon: <FaLock />,
      title: "Privacy",
      description:
        "Your personal data belongs to you. Security and privacy are built into every feature.",
    },
    {
      icon: <FaRocket />,
      title: "Productivity",
      description:
        "Every feature is designed to help you accomplish more with less effort.",
    },
    {
      icon: <FaUsers />,
      title: "User First",
      description:
        "We design every experience around simplicity, accessibility, and ease of use.",
    },
    {
      icon: <FaHeart />,
      title: "Consistency",
      description:
        "Small daily improvements create extraordinary long-term results.",
    },
    {
      icon: <FaGem />,
      title: "Quality",
      description:
        "We focus on creating polished experiences with attention to every detail.",
    },
  ];

  return (
    <section className="our-values">

      <div className="our-values-container">

        <div className="our-values-heading">

          <span>OUR VALUES</span>

          <h2>
            The Principles That
            <span> Shape UniCore.</span>
          </h2>

          <p>
            Everything we build is guided by a simple philosophy:
            create tools that are beautiful, reliable, and genuinely
            help people become more productive every day.
          </p>

        </div>

        <div className="our-values-grid">

          {values.map((value, index) => (
            <div
              className="value-card"
              key={index}
            >

              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default OurValues;