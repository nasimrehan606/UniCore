import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

/**
 * Displays customer testimonials.
 *
 * @returns {JSX.Element}
 */
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "UI Designer",
      review:
        "UniCore has completely changed how I organize my day. The interface is beautiful and incredibly easy to use.",
    },
    {
      name: "David Miller",
      role: "Software Developer",
      review:
        "From task management to habit tracking, everything I need is finally in one place. It's fast and intuitive.",
    },
    {
      name: "Emily Wilson",
      role: "University Student",
      review:
        "I love how clean and modern UniCore feels. It keeps me motivated and helps me stay productive every day.",
    },
  ];

  return (
    <section className="testimonials">

      <div className="testimonials-container">

        <div className="testimonials-heading">

          <span>TESTIMONIALS</span>

          <h2>
            Loved by
            <span> Productive People</span>
          </h2>

          <p>
            Thousands of people rely on UniCore to organize
            their day and accomplish more.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial-card"
              key={index}
            >

              <div className="testimonial-stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="testimonial-review">
                "{testimonial.review}"
              </p>

              <div className="testimonial-user">

                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>

                  <h4>{testimonial.name}</h4>

                  <span>{testimonial.role}</span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;