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



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));