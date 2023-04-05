const express = require("express");
const app = express();
const PORT = 4500;
const pokemon = require("./models/pokemons");

const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended:false }));

app.use(methodOverride('_method'));


app.get("/", (req,res) => {
    res.send(`<h1>Test page</h1>`)
});

app.get("/pokemon", (req,res) => {
    res.render(`index.ejs`, {pokemon})
});

app.get("/pokemon/new", (req, res) => {
    res.render(`new.ejs`);
  });

app.get("/pokemon/:id", (req, res) => {
    let poke = pokemon[req.params.id];
    res.render(`show.ejs`, {poke, idx: req.params.id})
});

app.get('/pokemon/:id/edit', (req, res) => {
    const pokemonEdit = pokemon[req.params.id];
    res.render(`edit.ejs`, {pokemonEdit, idx: req.params.id})
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));