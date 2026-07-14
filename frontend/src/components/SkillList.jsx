function SkillList({ title, skills }) {
  const getBadgeClass = () => {
    if (title === "Matched Skills") return "skill-badge matched";
    if (title === "Missing Skills") return "skill-badge missing";
    return "skill-badge";
  };

  return (
    <div className="skill-card">
      <h3>{title}</h3>

      {skills.length === 0 ? (
        <p>No skills found.</p>
      ) : (
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span
              className={getBadgeClass()}
              key={index}
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillList;