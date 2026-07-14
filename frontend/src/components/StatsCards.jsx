import { FaFileAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function StatsCards({ result }) {
  return (
    <div className="stats-container">

      <div className="stat-card">
        <FaFileAlt className="stat-icon" />
        <h2>{result.resume_skills.length}</h2>
        <p>Resume Skills</p>
      </div>

      <div className="stat-card">
        <FaCheckCircle className="stat-icon green" />
        <h2>{result.matched_skills.length}</h2>
        <p>Matched Skills</p>
      </div>

      <div className="stat-card">
        <FaTimesCircle className="stat-icon red" />
        <h2>{result.missing_skills.length}</h2>
        <p>Missing Skills</p>
      </div>

    </div>
  );
}

export default StatsCards;