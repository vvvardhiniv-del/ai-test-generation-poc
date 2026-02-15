import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProject() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCreate = () => {
    if (!projectName.trim()) return;
    setSuccess(true);

    // Navigate after animation
    setTimeout(() => {
      navigate("/dashboard");
    }, 2500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {!success ? (
          <>
            <h2 style={styles.title}>Create Project</h2>

            <input
              data-testid="project-name"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              style={styles.input}
            />

            <textarea
              data-testid="project-description"
              placeholder="Project Description"
              style={styles.textarea}
            />

            <button
              data-testid="create-project-btn"
              onClick={handleCreate}
              style={styles.button}
            >
              Create Project
            </button>
          </>
        ) : (
          <div style={styles.successContainer}>
            <div style={styles.checkmark}></div>
            <h3 style={styles.successText}>
              Project "{projectName}" created successfully!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
  },
  card: {
    background: "white",
    padding: "50px",
    borderRadius: "16px",
    width: "420px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    marginBottom: "15px",
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    marginBottom: "20px",
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(90deg, #7c3aed, #6366f1)",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
  },
  successContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    animation: "fadeIn 0.6s ease-in-out",
  },
  checkmark: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "6px solid #22c55e",
    position: "relative",
    marginBottom: "20px",
    animation: "pop 0.4s ease-in-out",
  },
  successText: {
    color: "#16a34a",
    fontWeight: "600",
  },
};

export default CreateProject;
