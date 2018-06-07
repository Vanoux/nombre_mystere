//Declaration des dépendances 
var express = require('express');
var bodyParser = require("body-parser");
var lodash = require("lodash");


var nombre;
var message = "";
var aleatoire = lodash.random(9);


//Création d'un objet app en appelant la fonction express().
var app = express();
    app.use(bodyParser.urlencoded ({ extended: true }));

// Appel de la route(url) à laquelle l'application doit répondre => fonction callback pour appeler la page ejs
app.get('/', function (req, res) {// req = request et res = response
    res.render('action.ejs', {nombre, message});
    //res.render => méthode qui génère un modèle du vue
});



// récupère le chiffre quand click sur ok
app.post('/url', function(req, res) {
    nombre = req.body.nombre;
    console.log(nombre);
   // res.render('action.ejs', {nombre, message}) 
    
    
    if (nombre == aleatoire){
        message = 'Gagné ! Le nombre mystère était : ' + aleatoire
        console.log('Gagné ! Le nombre mystère était : ' + aleatoire);
    }
    else if (nombre > aleatoire){
        message = 'C\'est moins ! Retente'
        console.log('C\'est moins ! Retente');
    }
    else if (nombre < aleatoire){
        message = 'C\'est plus ! Retente'
        console.log('C\'est plus ! Retente');
    }
   
    res.render('action.ejs', {
       message:message,
       nombre:nombre
    })
});



// Pour gérer les erreurs 404
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);