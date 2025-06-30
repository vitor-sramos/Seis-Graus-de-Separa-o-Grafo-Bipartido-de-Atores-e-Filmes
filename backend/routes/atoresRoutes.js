const { listarAtores, show, bfs, bfsMax6 } = require("../controller/metodos");
const router = require("express").Router();

router.get("/atores", (req, res) => {
  const atores = listarAtores();
  res.json(atores);
});

router.get("/show", (req, res) => {
  const grafo = show();
  res.json(grafo);
});

router.post("/bfs", (req, res) => {
  const { origem, destino } = req.body;

  if (!origem || !destino) {
    return res
      .status(400)
      .json({ message: "Origem e destino são obrigatórios" });
  }

  const resultado = bfs(origem, destino);

  if (!resultado) {
    return res.status(404).json({ message: "Caminho não encontrado" });
  }

  res.json(resultado);
});

router.post("/bfsMax6", (req, res) => {
  const { origem, destino } = req.body;

  if (!origem || !destino) {
    return res
      .status(400)
      .json({ message: "Origem e destino são obrigatórios" });
  }

  const resultado = bfsMax6(origem, destino);

  if (
    !resultado ||
    !Array.isArray(resultado.caminhos) ||
    resultado.caminhos.length === 0
  ) {
    return res.status(404).json({ message: "Nenhum caminho encontrado" });
  }

  res.json(resultado);
});

module.exports = router;
