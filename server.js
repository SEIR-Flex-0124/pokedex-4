const express = require("express");
const app = express();
const PORT = 4500;
const pokemon = require("./models/pokemons");


app.get("/", (req,res) => {
    res.send(`<h1>Test page</h1>`)
});

app.get("/pokemon", (req,res) => {
    res.render(`index.ejs`, {pokemon})
});

app.get("/pokemon/:id", (req, res) => {
    let poke = pokemon[req.params.id];
    res.render(`show.ejs`, {poke})
});



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));