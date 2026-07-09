import "./ContactForm.css";

/**
 * Displays the Contact Form section.
 *
 * @returns {JSX.Element}
 */
function ContactForm() {
  return (
    <section className="contact-form-section">

      <div className="contact-form-container">

        <div className="contact-card">

         <div className="contact-heading">

  <h2>Send a Message</h2>

  <p>
    Fill out the form below and we'll get back to you soon.
  </p>

</div>

          <form className="contact-form">

            <div className="input-row">

              <div className="input-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                />

              </div>

              <div className="input-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                />

              </div>

            </div>

            <div className="input-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                placeholder="What's this about?"
              />

            </div>

            <div className="input-group">

              <label>
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message here..."
              ></textarea>

            </div>

            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactForm;