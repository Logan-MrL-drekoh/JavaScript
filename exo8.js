var a = parseInt (window.prompt("Entrez un nombre"));
a = a % 2
alert(a);

var d =  new Date().getFullYear();
var naissance = parseInt(window.prompt("Entrez votre année de naissance"));
var b=  (d-naissance);
alert ("Vous avez :" + b +"ans")
if (b<18){
    alert("Vous etes mineur");
}
    else{
        alert("Vous etes majeur");
    }

var nb1 = parseInt(window.prompt("Entrez le 1er nombre"));
var op = window.prompt("Saissisez l'operateur");
var nb2= parseInt(window.prompt("Entrez le 2eme nombre"));
if (nb2=='0' && op== '/') {
  console.log("erreur");
  alert("erreur");
}else{
switch(op){
    case '+':
        var add = nb1+nb2;
    alert(add);
    break;
    
    case '-':
        var sou= nb1-nb2;
        alert(sou);
    break;
    
    case '*':
        var mul=nb1*nb2;
        alert(mul);
    break; 
    
    case '/':
        var div= nb1/nb2;
        alert(div);
    break;
   
        
}
}