let express = require('express'); // import express
let app = express(); // initialiser app -> utiliser express

let listetodo = ["Faire la course","Nourir le chat"]; // Créer la liste

// Afficher la liste To Do
app.get('/', (req,res) => {
    res.render("todo.ejs",{chaquetodo: listetodo});
});

//Afficher formulaire
app.get("/",(req,res) => {
    res.render("todo.ejs");
});

// Recevoir input ds formulaire
app.get("/addtodo",(req,res) => {
    let newtodo = req.query.newtodo; //formulaire ds variable
    listetodo.push(newtodo); //rajouter input ds liste
    res.redirect("/"); 
});

app.listen(1000, function(){
    console.log("Running on port 1000");
})