import generatePDF from "../utils/generatePDF";

function DownloadButton({ result }) {
  return (
    <button
      className="download-btn"
      onClick={() => generatePDF(result)}
    >
      📄 Download AI Report
    </button>
  );
}

export default DownloadButton;