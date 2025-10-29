import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
  fetch("http://localhost:8080/hola")
    .then((res) => res.text())
    .then((data) => setMensaje(data))
    .catch((err) => console.error("Error:", err));
}, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Mi primer proyecto Full Stack</h1>
      <p>Mensaje del backend: {mensaje}</p>
    </div>
  );
}

export default App;
