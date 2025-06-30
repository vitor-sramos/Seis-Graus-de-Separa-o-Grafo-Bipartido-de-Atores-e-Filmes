const data = require("../db/latest_movies.json");

class Grafo {
  constructor() {
    this.vertices = {};
  }

  adicionarVertice(vertice, tipo) {
    if (!this.vertices[vertice]) {
      this.vertices[vertice] = {
        tipo: tipo,
        adjacentes: {},
      };
    }
  }

  adicionarAresta(origem, destino) {
    if (!this.vertices[origem] || !this.vertices[destino]) {
      console.log("Vértices não existem!");
      return;
    }

    if (!this.vertices[origem].adjacentes[destino]) {
      this.vertices[origem].adjacentes[destino] = true;
    }
    if (!this.vertices[destino].adjacentes[origem]) {
      this.vertices[destino].adjacentes[origem] = true;
    }
  }
}

const grafo = new Grafo();

function seedGrafo() {
  data.forEach((filme) => {
    grafo.adicionarVertice(filme.title, "filme");

    filme.cast.forEach((ator) => {
      grafo.adicionarVertice(ator, "ator");
      grafo.adicionarAresta(filme.title, ator);
    });
  });
}

seedGrafo();

module.exports = { grafo };
