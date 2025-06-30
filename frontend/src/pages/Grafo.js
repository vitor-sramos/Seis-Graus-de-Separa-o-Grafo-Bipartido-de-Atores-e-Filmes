import { useEffect, useState } from "react";
import styles from "./Grafo.module.css";

function Grafo() {
  const [grafo, setGrafo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/show")
      .then((response) => response.json())
      .then((data) => setGrafo(data))
      .catch((error) => console.error("Erro ao carregar o grafo:", error));
  }, []);

  if (!grafo) {
    return <div>Carregando grafo...</div>;
  }

  return (
    <div className={styles.grafoContainer}>
      <h1>Grafo</h1>
      <div>
        <h2>Vertices</h2>
        {Object.keys(grafo.vertices).map((vertice, index) => {
          const { tipo, adjacentes } = grafo.vertices[vertice];
          return (
            <div key={index} className={styles.divVertice}>
              <h3>{vertice} ({tipo})</h3>
              <strong>Adjacentes:</strong>
              <ul>
                {Object.keys(adjacentes).map((adjacente, idx) => (
                  <li key={idx}>{adjacente}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Grafo;
