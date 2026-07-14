import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

function FileDrop({ file, setFile }) {

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
      },
      multiple: false,
    });

  return (
    <div
      {...getRootProps()}
      className={
        isDragActive
          ? "dropzone active"
          : "dropzone"
      }
    >
      <input {...getInputProps()} />

      <FaCloudUploadAlt className="upload-icon" />

      {file ? (
        <>
          <h3>{file.name}</h3>
          <p>Ready to analyze</p>
        </>
      ) : (
        <>
          <h2>Drag & Drop Resume</h2>

          <p>or click to browse</p>

          <small>PDF only</small>
        </>
      )}
    </div>
  );
}

export default FileDrop;