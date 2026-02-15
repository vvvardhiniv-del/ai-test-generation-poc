function Dashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Dashboard</h2>
        <p data-testid="welcome-text">
          Welcome to your application dashboard.
        </p>
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
    backgroundColor: "#f4f6f9",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    width: "400px",
    textAlign: "center",
  },
};

export default Dashboard;
