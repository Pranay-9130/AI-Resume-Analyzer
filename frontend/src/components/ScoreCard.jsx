import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function ScoreCard({ title, score }) {
  return (
    <div className="score-card">

      <h3>{title}</h3>

      <div className="progress-wrapper">

        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            pathColor: "#2563eb",
            textColor: "#2563eb",
            trailColor: "#dbeafe",
          })}
        />

      </div>

    </div>
  );
}

export default ScoreCard;