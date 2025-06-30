import Container from "./components/Container";
import Grafo from "./pages/Grafo";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/grafo" element={<Grafo/>}/>
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
