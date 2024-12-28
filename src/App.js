import React, { useState, useEffect } from "react";
import hashDictionary from "./hashDictionary.json"
import "./styles.css"

const App = () => {
  const [inputHash, setInputHash] = useState("");
  const [resolvedText, setResolvedText] = useState("");

  const handleResolveHash = () => {
    const resolved = hashDictionary[inputHash] || "Texto no encontrado";
    setResolvedText(resolved);
  };

  return (
    <div>
      <header style={headerStyle}>
        <img
          src={require("./pensiveMeltdown.gif")}
          alt="Logo"
          style={logoStyle}
        />
        <h1 style={titleStyle}>Arc's Waifu Solver</h1>
      </header>
      <div className="container">
        <h1>Introduce el id de personaje:</h1>
        <input
          type="text"
          value={inputHash}
          onChange={(e) => setInputHash(e.target.value)}
          placeholder="Agua de coco"
        />
        <br />
        <div style={imageStyle}>
        <button onClick={handleResolveHash}>
          Buscar
        </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>Personaje encontrado:</h3>
          <p>{resolvedText || "El resultado aparecerá aquí"}</p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <p style={{ fontSize: "14px", color: "#AAAAAA" }}>
            Made by Arc 2024-2025
          </p>
          
        </div>
        <div>
        <p style={{ fontSize: "14px", color: "#AAAAAA" }}>
            Roulito vive la lucha sigue
          </p>
        </div>
      </div>
    </div>
  );
};


// Estilos del Header
const headerStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#333333", // Fondo oscuro
  color: "#FFFFFF", // Texto claro
  borderBottom: "2px solid #444444", // Línea separadora
};

const logoStyle = {
  height: "50px",
  marginRight: "20px",
};

const titleStyle = {
  fontSize: "20px",
  margin: 0,
};

const gifStyle = {
  height: "30px",
  width: "30px",
};
const imageStyle = {
  alignItems: "center",
}
export default App;