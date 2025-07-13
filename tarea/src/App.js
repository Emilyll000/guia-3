import React from "react";
import PlanetasSlider from "./components/PlanetasSlider";
import VentasGrafica from "./components/VentasGrafica";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Ejercicio 1: Planetas</h1>
      <PlanetasSlider />

      <hr style={{ margin: "3rem 0" }} />

      <h1>Ejercicio 2: Ventas</h1>
      <VentasGrafica />
    </div>
  );
}

export default App;