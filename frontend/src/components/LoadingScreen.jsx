import { FaRobot } from "react-icons/fa";

function LoadingScreen() {
  return (
    <div className="loading-screen">

      <FaRobot className="robot-icon" />

      <h2>AI is analyzing your resume...</h2>

      <div className="loader-bar">
        <div className="loader-fill"></div>
      </div>

      <p>Matching skills...</p>

      <p>Calculating ATS score...</p>

      <p>Computing semantic similarity...</p>

      <p>Generating AI suggestions...</p>

    </div>
  );
}

export default LoadingScreen;