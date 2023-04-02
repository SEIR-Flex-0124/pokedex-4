const express = require("express");
const app = express();
const PORT = 4500;
const pokemonC = require("./models/pokemons");


app.get("/", (req,res) => {
    res.send(`<h1>Test page</h1>`)
});




app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));