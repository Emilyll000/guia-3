import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PlanetasSlider() {
  const [planetas, setPlanetas] = useState([]);
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);
  const [tabActivo, setTabActivo] = useState("masa");

  useEffect(() => {
    fetch("/planetas.json")
      .then((res) => res.json())
      .then((data) => {
        setPlanetas(data);
        setPlanetaSeleccionado(data[0]);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (!planetas.length) return <p style={{ color: "white", textAlign: "center" }}>Cargando información de planetas...</p>;

  return (
    <div style={{ backgroundColor: "black", padding: "20px", borderRadius: "8px" }}>
      <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px", fontWeight: "600" }}>
        Planetas del Sistema Solar
      </h2>

      <Slider {...settings}>
        {planetas.map((planeta) => (
          <div
            key={planeta.id}
            onClick={() => setPlanetaSeleccionado(planeta)}
            style={{ cursor: "pointer", padding: "10px" }}
          >
            <img
              src={planeta.imagen}
              alt={planeta.nombre}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                transition: "transform 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p style={{ textAlign: "center", color: "white", marginTop: "10px", fontWeight: "600" }}>
              {planeta.nombre}
            </p>
          </div>
        ))}
      </Slider>

      {planetaSeleccionado && (
        <div
          style={{
            marginTop: "25px",
            color: "white",
            textAlign: "center",
            maxWidth: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#121212",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(255, 215, 0, 0.3)",
          }}
        >
          <h3 style={{ marginBottom: "15px", fontWeight: "700" }}>{planetaSeleccionado.nombre}</h3>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "15px" }}>
            {["masa", "distancia_sol", "temperatura"].map((tab) => (
              <button
                key={tab}
                onClick={() => setTabActivo(tab)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: tabActivo === tab ? "#FFD700" : "#333",
                  color: tabActivo === tab ? "#000" : "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                {tab === "masa" && "Masa"}
                {tab === "distancia_sol" && "Distancia al Sol"}
                {tab === "temperatura" && "Temperatura"}
              </button>
            ))}
          </div>

          <p style={{ fontSize: "17px", fontWeight: "500" }}>
            {tabActivo === "masa" && planetaSeleccionado.masa}
            {tabActivo === "distancia_sol" && planetaSeleccionado.distancia_sol}
            {tabActivo === "temperatura" && planetaSeleccionado.temperatura}
          </p>
        </div>
      )}
    </div>
  );
}