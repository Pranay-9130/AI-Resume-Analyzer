import ReactMarkdown from "react-markdown";

function AIReview({ review }) {
  return (
    <div className="ai-review-card">
      <ReactMarkdown>{review}</ReactMarkdown>
    </div>
  );
}

export default AIReview;