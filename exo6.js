var nom = window.prompt("Saisissez votre nom");
var prenom = window.prompt("Saisissez votre prenom");

alert(nom +prenom);

var nb1 =parseInt(window.prompt("Entrez le 1er nombre"));
var nb2 = parseInt(window.prompt("Entrez le 2eme nombre"));

alert(nb1 * nb2);


var c = parseInt(window.prompt("Donnez-moi la temperature en celsius"));
var f = parseInt(((c*9/5)+32)) ;

alert("La temperature en fahrenheit est de " + f);
