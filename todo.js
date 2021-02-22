let express = require('express'); // import express
let app = express(); // initialiser app -> utiliser express
app.use(express.urlencoded({ extend: true}));

//Importer fichier router
let routers = require ('./router');
app.use('/', routers);


app.listen(1000, function(){
    console.log("Running on port 1000");
});
