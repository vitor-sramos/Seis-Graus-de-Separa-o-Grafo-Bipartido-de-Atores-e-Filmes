import ContainerCentral from "../components/ContainerCentral";
import { useState, useEffect } from "react";

function Home() {

    const [atores, setAtores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/atores")
      .then((res) => res.json())
      .then((data) => {
        setAtores(data);
      });
  }, []);

    return(
        <ContainerCentral atores={atores}/>
    )
}
export default Home;