//Declaration des dépendances 
var express = require('express');



//Création d'un objet app en appelant la fonction express().
var app = express();



// Appel de la route(url) à laquelle l'application doit répondre => fonction callback pour appeler la page ejs
app.get('/', function (req, res) {
    res.render('action.ejs', {nombre, message});
});


// Appel l'action "url" quand click sur ok 
// app.post ou.get ? ('/url', function(req, res) {
    
//}) COMMENT FAIRE ENTRER LE NUM DE L'UTILISATEUR??????????






// Pour gérer les erreurs 404
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);