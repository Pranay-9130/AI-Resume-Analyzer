import { FaRobot, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaRobot />
        <span>AI Resume Analyzer</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#features">Features</a></li>

        <li>
          <a
            href="https://github.com/tannupriya550/AI-Resume-Analyzer"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;