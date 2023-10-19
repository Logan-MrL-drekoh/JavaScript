/**exercice 1 */


var a=true ;
var numero=1;
var n=1;
while(a==true){

    var prenom = prompt("Saissisez le prenom N°" + (numero++) );

    console.log("prenom numero"+(n++) + prenom);
   if ( prenom =='' || prenom == null){
    a=false
    
   }
} 


/**exercice 2 */
console.log(prenom* n-1)


var nombre =parseInt (window.prompt("entrez un nombre"));

for(nombre; nombre>=0; --nombre ){
    i =nombre;
    alert(i);
    console.log(i);
}


/**exercice 3 */
var i = true;
var somme = 0;
var moy = 0;
var counter = 0;
while(i==true){
    var saisie = parseInt(window.prompt("Entrez un nombre Entier"));
    console.log(saisie);
    if (saisie==0){
        i=false;
    }
    else {
        somme=somme+saisie;
        ++counter;
        
    }

}
var moy = somme/counter;
alert("La somme est : "+somme+"."+"Le nombre de saisie :"+counter+"."+"La moyenne de toutes les saisies"+moy+".");