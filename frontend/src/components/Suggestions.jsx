function Suggestions({ suggestions }) {
  return (
    <div className="suggestion-card">
      <h3>Suggestions</h3>

      <ul>
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;