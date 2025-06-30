const express = require("express");
const cors = require("cors");
const app = express();
const porta = 8080;

app.use(express.json());
app.use(cors());

const router = require("./routes/router");
app.use("/", router);

app.listen(porta, () => {
    console.log("Rodando");
})
