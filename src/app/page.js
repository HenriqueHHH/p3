import { FaMusic } from "react-icons/fa";

export default function Home() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Musicas</h1>


        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <a href="/musicas" style={linkStyle}>
            <FaMusic style={iconStyle} />
            Musicas
          </a>
        </div>
      </div>
      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#555" }}>
      </footer>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh", 
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#000", 
  color: "#fff", 
};

const contentStyle = {
  textAlign: "center",
  maxWidth: "700px", 
  border: "3px solid #0070f3", 
  borderRadius: "8px", 
  padding: "1rem", 
};

const titleStyle = {
  fontSize: "2.5rem",
  marginBottom: "1.5rem",
  color: "#fff", 
};

const subtitleStyle = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
  color: "#fff", 
};

const linkStyle = {
  textDecoration: "none",
  color: "#0070f3",
  fontSize: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  transition: "color 0.2s ease-in-out",
};

const iconStyle = {
  fontSize: "2.5rem",
  color: "#0070f3",
};