import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={styles.wrapper}>
      {/* Floating Background Blobs */}
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>
      <div style={styles.blob3}></div>

      <div style={styles.container}>
        {/* Left Panel */}
        <div style={styles.leftPanel}>
          <div style={styles.leftOverlay}>
            <h1 style={styles.brandTitle}>AI Test Generator</h1>
            <p style={styles.brandSubtitle}>
              Intelligent sprint-aware test generation.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div style={styles.rightPanel}>
          <div style={styles.card}>
            <h2 style={styles.title}>Welcome Back</h2>
            <p style={styles.subtitle}>Login to continue</p>

            <input
              data-testid="username"
              placeholder="Username"
              style={styles.input}
            />

            <input
              data-testid="password"
              type="password"
              placeholder="Password"
              style={styles.input}
            />

            <button
              data-testid="login-btn"
              onClick={handleLogin}
              style={styles.button}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #0f172a, #1e1b4b, #312e81)",
    position: "relative",
    overflow: "hidden",
  },

  /* Floating Blobs */
  blob1: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
    top: "-150px",
    left: "-150px",
    filter: "blur(120px)",
    animation: "float1 12s ease-in-out infinite",
  },

  blob2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
    bottom: "-120px",
    right: "-120px",
    filter: "blur(100px)",
    animation: "float2 15s ease-in-out infinite",
  },

  blob3: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
    top: "50%",
    left: "40%",
    filter: "blur(100px)",
    animation: "float3 18s ease-in-out infinite",
  },

  container: {
    display: "flex",
    height: "100%",
    position: "relative",
    zIndex: 2,
  },

  /* Left Panel */
  leftPanel: {
    flex: 1,
    background:
      "linear-gradient(to bottom right, rgba(99,102,241,0.3), rgba(59,130,246,0.2))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
  },

  leftOverlay: {
    color: "white",
    maxWidth: "400px",
  },

  brandTitle: {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  brandSubtitle: {
    fontSize: "18px",
    color: "#e0e7ff",
    lineHeight: "1.6",
  },

  /* Right Panel */
  rightPanel: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(25px)",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
    width: "380px",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },

  title: {
    marginBottom: "8px",
    fontSize: "26px",
  },

  subtitle: {
    marginBottom: "25px",
    color: "#c7d2fe",
    fontSize: "14px",
  },

  input: {
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    fontSize: "14px",
    outline: "none",
  },

  button: {
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background:
      "linear-gradient(90deg, #7c3aed, #6366f1, #3b82f6)",
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(99,102,241,0.4)",
  },
};

export default Login;
