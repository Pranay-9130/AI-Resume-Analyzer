import { useState } from "react";
import FileDrop from "./FileDrop";
import { toast } from "react-toastify";

function UploadForm({ onAnalyze }) {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resume) {
      toast.error("Please upload a resume.");
      return;
    }

    if (!jobDescription.trim()) {
      toast.warning("Please enter a job description.");
      return;
    }

    onAnalyze(resume, jobDescription);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>🤖 AI Resume Analyzer</h2>

      <label>Upload Resume (PDF)</label>

      {/* Drag & Drop Upload */}
      <FileDrop
        file={resume}
        setFile={setResume}
      />

      <label>Job Description</label>

      <textarea
        rows="10"
        placeholder="Paste the job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <button type="submit">
        Analyze Resume
      </button>
    </form>
  );
}

export default UploadForm;