const data = require("../db/latest_movies.json");
const { grafo } = require("../controller/grafo");

function listarAtores() {
  const atores = data.flatMap((filme) => filme.cast);
  return [...new Set(atores)].sort();
}

function show() {
  return grafo;
}

function bfs(origem, destino) {
  const vertices = grafo.vertices;

  if (!vertices[origem] || !vertices[destino]) {
    console.log("Origem ou destino não encontrados no grafo!");
    return { caminho: [], comprimento: 0 };
  }

  const fila = [origem];

  const predecessores = {};

  const visitados = new Set();
  visitados.add(origem);

  while (fila.length > 0) {
    const atual = fila.shift();

    if (atual === destino) {
      const caminho = [];
      let v = destino;
      while (v) {
        caminho.unshift(v);
        v = predecessores[v];
      }
      return { caminho: caminho, comprimento: caminho.length - 1 };
    }

    const adjacentes = Object.keys(vertices[atual].adjacentes);
    for (const vizinho of adjacentes) {
      if (!visitados.has(vizinho)) {
        visitados.add(vizinho);
        predecessores[vizinho] = atual;
        fila.push(vizinho);
      }
    }
  }
  console.log("Nenhum caminho encontrado entre os atores.");
  return { erro: "Nenhum caminho encontrado entre os atores." };
}

function bfsMax6(origem, destino) {
  const vertices = grafo.vertices;

  if (!vertices[origem] || !vertices[destino]) {
    console.log("Origem ou destino não encontrados no grafo!");
    return { caminhos: [] };
  }

  const caminhos = [];
  const fila = [[origem]];
  const visitadosSet = new Set();

  while (fila.length > 0) {
    const caminhoAtual = fila.shift();
    const ultimoVertice = caminhoAtual[caminhoAtual.length - 1];
    // Obtém o último vértice do caminho atual, que é o próximo ponto a ser expandido.

    if (ultimoVertice === destino) {
      caminhos.push(caminhoAtual);
      continue;
    }

    if (caminhoAtual.length > 7) {
      continue;
    }

    const adjacentes = Object.keys(vertices[ultimoVertice].adjacentes);
    // Obtém todos os vértices diretamente conectados ao último vértice (os vizinhos).

    for (const vizinho of adjacentes) {
      // Cria um conjunto contendo todos os vértices do caminho atual, para evitar ciclos.
      const visitados = new Set(caminhoAtual);
      if (!visitados.has(vizinho)) {
        fila.push([...caminhoAtual, vizinho]);
        // Cria um novo caminho com o vizinho adicionado e o coloca na fila para futuras expansões.
      }
    }
  }

  if (caminhos.length === 0) {
    console.log("Nenhum caminho encontrado com limite de 6 arestas.");
    return { erro: "Nenhum caminho encontrado com limite de 6 arestas." };
  }

  return { caminhos };
}

module.exports = { listarAtores, show, bfs, bfsMax6 };
