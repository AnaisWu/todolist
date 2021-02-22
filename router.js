// Déclarer router
let express = require('express');
let router = express.Router ();
let listetodo = ["Faire la course","Nourir le chat"]; // Créer la liste

// Afficher la liste To Do
router.get('/', (req,res) => {
     res.render("todo.ejs",{chaquetodo: listetodo, msg :""});
 });
 
 //  Recevoir input ds formulaire
 router.post("/",(req,res) => {
     listetodo.push(req.body.newtodo); //rajouter newtodo ds liste
     res.render("todo.ejs", {chaquetodo: listetodo, msg: "Ajout réussi"}); //afficher la liste todo sous forme de template chaquetodo ds ejs
 });
 
//Faire fonctionner delete
router.get('/:id',(request,response) => {
     let id = request.params.id
     listetodo.splice(id,1)
     response.render('todo.ejs', {chaquetodo: listetodo, msg:"Suppression réussie"});
});

module.exports = router;