function OverallScore({ score }) {

  let status = "";
  let color = "";

  if (score >= 85) {
    status = "Excellent Match";
    color = "#22c55e";
  } else if (score >= 70) {
    status = "Good Match";
    color = "#3b82f6";
  } else if (score >= 50) {
    status = "Average Match";
    color = "#f59e0b";
  } else {
    status = "Needs Improvement";
    color = "#ef4444";
  }

  return (
    <div className="overall-card">

      <h2>🤖 Overall AI Match</h2>

      <h1 style={{ color }}>
        {score}%
      </h1>

      <h3 style={{ color }}>
        {status}
      </h3>

    </div>
  );
}

export default OverallScore;