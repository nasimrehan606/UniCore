import "./Navbar.css";

/**
 * Displays the main navigation bar.
 *
 * @returns {JSX.Element}
 */
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>UniCore</h2>
        </div>

        <nav className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="navbar-button">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Navbar;