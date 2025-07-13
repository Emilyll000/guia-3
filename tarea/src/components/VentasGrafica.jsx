import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function VentasGrafica() {
  const [datos, setDatos] = useState([]);
  const [anioSeleccionado, setAnioSeleccionado] = useState(null);

  useEffect(() => {
    fetch("/ventas.json")
      .then((res) => res.json())
      .then((data) => {
        setDatos(data);
        if (data.length > 0) setAnioSeleccionado(data[0].anio);
      });
  }, []);

  if (!datos.length) return <p style={{ textAlign: "center" }}>Cargando datos de ventas...</p>;

  const ventasAnio = datos.find((d) => d.anio === anioSeleccionado)?.ventas || [];

  return (
    <div
      style={{
        backgroundColor: "#e0e0e0",
        padding: "30px",
        borderRadius: "10px",
        maxWidth: "650px",
        margin: "40px auto",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#222", marginBottom: "25px", fontWeight: "600" }}>
        Ventas Mensuales
      </h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label htmlFor="selector-anio" style={{ marginRight: "10px", fontWeight: "500" }}>
          Selecciona el año:
        </label>
        <select
          id="selector-anio"
          value={anioSeleccionado}
          onChange={(e) => setAnioSeleccionado(Number(e.target.value))}
          style={{ padding: "6px 12px", borderRadius: "6px", border: "1px solid #aaa" }}
        >
          {datos.map((d) => (
            <option key={d.anio} value={d.anio}>
              {d.anio}
            </option>
          ))}
        </select>
      </div>

      <BarChart width={600} height={320} data={ventasAnio} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#bbb" />
        <XAxis dataKey="mes" stroke="#555" />
        <YAxis stroke="#555" />
        <Tooltip
          contentStyle={{ backgroundColor: "#333", borderRadius: "6px", color: "#fff", fontWeight: "500" }}
          cursor={{ fill: "rgba(0,0,0,0.15)" }}
        />
        <Legend wrapperStyle={{ color: "#222", fontWeight: "600" }} />
        <Bar dataKey="valor" fill="#000000" radius={[8, 8, 0, 0]} />
      </BarChart>
    </div>
  );
}