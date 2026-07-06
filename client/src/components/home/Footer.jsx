import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

/**
 * Displays the website footer.
 *
 * @returns {JSX.Element}
 */
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>UniCore</h2>

            <p>
              Plan your day. Make it unique.
            </p>

            <div className="footer-socials">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaGithub />
              </a>

            </div>

          </div>

          <div className="footer-links">

            <div>

              <h4>Product</h4>

              <a href="#">Features</a>
              <a href="#">Dashboard</a>
              <a href="#">Pricing</a>
              <a href="#">Updates</a>

            </div>

            <div>

              <h4>Company</h4>

              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>

            </div>

            <div>

              <h4>Resources</h4>

              <a href="#">Help Center</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Support</a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} UniCore. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>

            <a href="#">Cookies</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;