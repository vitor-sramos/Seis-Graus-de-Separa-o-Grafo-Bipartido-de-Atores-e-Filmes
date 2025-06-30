import styles from "./ContainerCentral.module.css";
import {  useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function ContainerCentral({ atores }) {
  const [atorOrigem, setAtorOrigem] = useState("");
  const [atorDestino, setAtorDestino] = useState("");
  const [caminho1, setCaminho1] = useState([]);
  const [comprimento1, setComprimento1] = useState("");
  const [caminho2, setCaminho2] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleChangeOrigem(e) {
    setAtorOrigem(e.target.value);
  }

  function handleChangeDestino(e) {
    setAtorDestino(e.target.value);
  }

  async function onClick1() {
    try {
      const response = await fetch("http://localhost:8080/bfs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origem: atorOrigem,
          destino: atorDestino,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCaminho1(data.caminho.join(" -> "));
        setComprimento1(data.comprimento.toString());
      } else {
        alert(data.message || "Erro ao buscar caminho.");
      }
    } catch (error) {
      console.error(error);
      setCaminho1("");
      setComprimento1("");
      alert("Caminho não encontrado");
    }
  }

  async function onClick2() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/bfsMax6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origem: atorOrigem,
          destino: atorDestino,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.caminhos) {
          setCaminho2(data.caminhos);
        } else {
          alert(data.message || "Nenhum caminho encontrado.");
          setCaminho2([]);
        }
      } else {
        alert(data.message || "Erro ao buscar caminhos.");
        setCaminho2([]);
      }
    } catch (error) {
      console.error(error);
      setCaminho2([]);
      alert("Caminho não encontrado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.containerCentral}>
      <div className={styles.titulo}>
        <div>
          <h2>Busca em Largura (BFS)</h2>
        </div>
        <div className={styles.campo4}>
            <div>
              <Link to="/grafo">SHOW</Link>
            </div>
          </div>
      </div>

      <div className={styles.formularioCentral}>
        <div className={styles.formulario}>
          <div className={styles.campo1}>
            <div className={styles.label}>
              <label>
                <p>Ator de Origem:</p>
              </label>
            </div>
            <div>
              <select onChange={handleChangeOrigem}>
                <option disabled selected>
                  Selecione o ator de origem
                </option>
                {atores &&
                  atores.map((ator, index) => (
                    <option key={index} value={ator}>
                      {ator}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className={styles.campo1}>
            <div className={styles.label}>
              <label>
                <p>Ator de Destino:</p>
              </label>
            </div>
            <div>
              <select onChange={handleChangeDestino}>
                <option disabled selected>
                  Selecione o ator de destino
                </option>
                {atores &&
                  atores.map((ator, index) => (
                    <option key={index} value={ator}>
                      {ator}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className={styles.campo2}>
            <div>
              <button onClick={onClick1} className={styles.btn1}>
                BFS - Encontrar Menor Caminho
              </button>
            </div>
            <div>
              <button onClick={onClick2} className={styles.btn2}>
                BFS - Comprimento Máximo 6
              </button>
            </div>
          </div>

          <div className={styles.campo3}>
            <div className={styles.blocoEsquerda}>
              <div className={styles.divCaminho}>
                <div>
                  <label>Caminho:</label>
                </div>
                <div>
                  <input value={caminho1} readOnly />
                </div>
              </div>
              <div>
                <div>
                  <label>Comprimento:</label>
                </div>
                <div>
                  <input value={comprimento1} readOnly />
                </div>
              </div>
            </div>

            <div className={styles.blocoDireita}>
  <div className={styles.divCaminho}>
    <div>
      <label>Caminhos Encontrados:</label>
    </div>
    <div className={styles.caminhos}>
      {loading ? (
        <Loading />
      ) : caminho2.length > 0 ? (
        caminho2.map((caminho, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <div>
              <strong>Caminho {index + 1}:</strong> {caminho.join(" -> ")}
            </div>
            <div>
              <strong>Comprimento:</strong> {caminho.length - 1} arestas
            </div>
          </div>
        ))
      ) : (
        <div>Nenhum caminho encontrado.</div>
      )}
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerCentral;
