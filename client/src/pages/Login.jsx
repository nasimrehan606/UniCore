import LoginForm from "../components/auth/LoginForm";
import './Login.css';

/**
 * Displays the Login page.
 *
 * @returns {JSX.Element}
 */
function Login() {
  return (
    <main className="login-page">
      <LoginForm />
    </main>
  );
}

export default Login;