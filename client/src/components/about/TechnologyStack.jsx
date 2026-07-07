import "./TechnologyStack.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { SiExpress, SiMysql, SiPostman } from "react-icons/si";

/**
 * Displays the technologies used to build UniCore.
 *
 * @returns {JSX.Element}
 */
function TechnologyStack() {
  const technologies = [
    {
      icon: <FaReact />,
      name: "React",
      description: "Modern component-based frontend library.",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      description: "JavaScript runtime for backend development.",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      description: "Fast and minimal REST API framework.",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      description: "Reliable relational database management system.",
    },
    {
      icon: <FaDatabase />,
      name: "REST API",
      description: "Secure communication between client and server.",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      description: "Modern responsive user interface styling.",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      description: "Version control for collaborative development.",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      description: "Repository hosting and project management.",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
      description: "Testing and debugging backend APIs.",
    },
    {
      icon: <FaCode />,
      name: "VS Code",
      description: "Primary development environment.",
    },
  ];

  return (
    <section className="technology-stack">

      <div className="technology-container">

        <div className="technology-heading">

          <span>TECHNOLOGY STACK</span>

          <h2>
            Modern Technology,
            <span> Powerful Foundation.</span>
          </h2>

          <p>
            UniCore is built using modern web technologies that
            deliver speed, scalability, security, and an excellent
            user experience.
          </p>

        </div>

        <div className="technology-grid">

          {technologies.map((technology, index) => (
            <div
              className="technology-card"
              key={index}
            >

              <div className="technology-icon">
                {technology.icon}
              </div>

              <h3>{technology.name}</h3>

              <p>{technology.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TechnologyStack;