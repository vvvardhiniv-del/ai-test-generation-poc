import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Dashboard</h2>

        <p data-testid="welcome-text">
          Welcome to your dashboard.
        </p>

        <button
          data-testid="go-to-create-project"
          onClick={() => navigate("/create-project")}
          style={styles.button}
        >
          Create New Project
        </button>
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
    background: "#0f172a",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "400px",
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    padding: "10px",
    cursor: "pointer",
  },
};

export default Dashboard;
