import "./FAQPreview.css";
import { FaChevronRight } from "react-icons/fa";

/**
 * Displays a preview of the FAQ section.
 *
 * @returns {JSX.Element}
 */
function FAQPreview() {
  const faqs = [
    {
      question: "What is UniCore?",
      answer:
        "UniCore is an all-in-one productivity platform that helps you manage tasks, habits, goals, journals, calendars, and more from one modern dashboard.",
    },
    {
      question: "Is UniCore free to use?",
      answer:
        "Yes. UniCore starts with a free plan that includes the core productivity features. Premium features may be introduced in future updates.",
    },
    {
      question: "Which devices are supported?",
      answer:
        "UniCore works on desktop browsers today and is being optimized for tablets and mobile devices.",
    },
    {
      question: "Can I use UniCore offline?",
      answer:
        "Offline support is part of our future roadmap to make productivity available anywhere.",
    },
  ];

  return (
    <section className="faq-preview">

      <div className="faq-preview-container">

        <div className="faq-preview-heading">

          <span>FAQ</span>

          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p>
            Here are a few common questions about UniCore.
            Visit the FAQ page to explore more answers.
          </p>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              className="faq-card"
              key={index}
            >

              <div className="faq-question">

                <h3>{faq.question}</h3>

                <FaChevronRight />

              </div>

              <p>{faq.answer}</p>

            </div>
          ))}

        </div>

        <div className="faq-button">

          <button>
            View All FAQs
          </button>

        </div>

      </div>

    </section>
  );
}

export default FAQPreview;