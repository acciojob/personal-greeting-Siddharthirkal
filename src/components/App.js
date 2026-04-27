import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Personalized Greeting</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Show greeting only if input is not empty */}
      {name.trim() !== "" && <h3>Hello {name}!</h3>}
    </div>
  );
}