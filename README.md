# DT-1 – Relação entre Atores e Filmes

Este projeto representa um sistema de **grafo bipartido** construído com **Node.js**, que modela a relação entre **atores** e **filmes**. Ele permite encontrar o caminho mais curto entre dois atores (através de filmes em comum) e listar todos os atores que estão a no máximo 6 conexões de distância de um ator inicial.

Foi desenvolvido como parte de um trabalho prático de grafos na disciplina de Teoria de Grafos.

---

## Funcionalidades

- **Encontrar menor caminho entre dois atores**  
  Utiliza **Busca em Largura (BFS)** para encontrar o caminho mais curto entre dois atores baseado nos filmes em que atuaram. Exemplo:  
  `Ator A → Filme 1 → Ator B → Filme 2 → Ator C`

- **Listar conexões até grau 6**  
  Retorna todos os atores conectados ao ator de origem com até 6 arestas de distância, simulando o famoso "jogo dos 6 graus de separação".

---

## Estrutura do Grafo

- Tipo: **Grafo não direcionado bipartido**
- Vértices:
  - Atores
  - Filmes
- Arestas: conexão entre um ator e um filme (o ator participou daquele filme)

---

## Tecnologias utilizadas

- **Node.js**
- **JavaScript**
- Estrutura de dados: **Lista de adjacência**
- Lógica de grafos: **Busca em Largura (BFS)**

---

## Organização do projeto

```plaintext
projeto-dt1/
├── backend/
│   ├── controllers/
│   │   ├── grafoController.js     # Lógica para construção do grafo e busca BFS
│   ├── db/
│   │   └── atores_filmes.json     # Base de dados com atores e filmes
│   ├── routes/
│   │   └── grafoRoutes.js         # Rotas da API: menor caminho, conexões até 6
│   ├── index.js                   # Servidor principal Express
│   └── package.json               # Dependências do backend
│
├── frontend/
│   ├── src/
│   │   ├── pages/                 # Páginas como Home, Buscar, Resultado etc.
│   │   ├── components/            # Componentes reutilizáveis
│   │   ├── App.js                 # Roteamento e estrutura principal
│   │   └── index.js               # Entry point do React
│   └── package.json               # Dependências do frontend
│
├── README.md                      # Documentação do projeto

```

##  Como executar

1. **Clone o repositório:**

```bash
git clone git@github.com:vitor-sramos/Seis-Graus-de-Separacao.git
```

# Inicie o backend:

```bash
 cd backend
 npm install
 npm start
```

# Em outro terminal, inicie o frontend:

```bash
 cd frontend
 npm install
 npm start
```

# Acesse a aplicação em:
http://localhost:3000

## Aprendizados
- Implementação de grafos bipartidos

- Aplicação prática de Busca em Largura (BFS)

- Leitura e manipulação de dados JSON

- Modelagem de dados em estruturas de grafo

- Desenvolvimento de lógica para análise de conexões em redes complexas

## Autor
- Desenvolvido por Vitor de Souza Ramos
- Estudante de Ciência da Computação na UNESC
- GitHub: https://github.com/vitor-sramos
- LinkedIn: https://www.linkedin.com/in/vitor-ramos-934302349
