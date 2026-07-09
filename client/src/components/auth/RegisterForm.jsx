import "./LoginForm.css";
import { Link } from "react-router-dom";

/**
 * Displays the login form.
 *
 * @returns {JSX.Element}
 */
function LoginForm() {
  return (
    <section className="login">

      <div className="login-card">

        <div className="login-header">

          <h1 className="login-logo">
            UniCore
          </h1>

          <h2>
            Welcome Back
          </h2>

          <p>
            Sign in to continue your productivity journey.
          </p>

        </div>

        <form className="login-form">

          <div className="form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>

          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
            />

          </div>

          <div className="login-options">

            <label className="remember-me">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="#"
              className="forgot-password"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <div className="login-divider">

          <span>OR</span>

        </div>

        <p className="register-text">

          Don't have an account?

          <Link to="/register">

            Create Account

          </Link>

        </p>

      </div>

    </section>
  );
}

export default LoginForm;