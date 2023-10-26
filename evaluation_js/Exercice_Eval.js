 /*Exercice 1*/

var jeunes=0;
 var adultes=0;
var vieux=0;
 var personnes;
do{
 personnes = parseInt(window.prompt("Entrez votre age:"));
    if (personnes < 20){
        jeunes++;
            console.log(jeunes);
 }

    else if ((personnes >=20) && (personnes <=40)){
        adultes++;
            console.log(adultes);
    } 
    if ((personnes>=41)&& (personnes<=99)){
        vieux++;
         console.log(vieux);
     }



 }while(personnes < 100);

 window.alert("Il y a " + "" + jeunes + "" + " jeunes\n " + "Il y a " + "" + adultes + "" + " adulte\n " + " Il y a " + "" + vieux + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");



 /*Exercice 2 */
 n=parseInt(window.prompt("Entrez un nombre"));

 function tablemultiplication(nombre){
         for(let i=1; i<=10; i++){
             console.log(nombre + "X"+ i +"="+ nombre*i);
             document.write(nombre + "X"+ i +"="+ nombre*i +"<br>");
         }
 }


 tablemultiplication(n);


 /*Exercice 3 */
 
  var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
 
  {
      var saisi = window.prompt("Veuillez choisir un prénom audrey, aurelien, flavien,jeremy,laurent,melik,nouara,salem,samuel,stephane. ")
      var rang = tab.indexOf(saisi);
 
 
 if (rang>=0)
 {
      var sup = tab.splice(rang,1);
      console.log(rang+sup)
   
      var nb = tab.push("");
 
      console.log(tab);
 
  }
  else {
      alert ("Mauvais prénom")
 
 }
 }


/*Exercice 4*/



PU =parseInt(window.prompt("prix unitaire du produit:"));
QTECOM = parseInt(window.prompt("Quantité du produit:"));
var REM=0;
var PORT=0;
var TOT = PU*QTECOM;

if (TOT<100){
    PORT=6;
    PAP = TOT+PORT;
    alert("Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

}

else if (TOT>=100 && TOT<=200){
    prixrem = (5*TOT)/100;
    PORT=6;
    PAP=TOT-prixrem+PORT;
    alert("La remise est de "+prixrem+"€\n"+"Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

}




else if (TOT>200 && TOT<500){
    REM = (10*TOT)/100;
    prixrem=TOT-REM;
    if(prixrem<300){
        PORT=6;
        PAP=prixrem+PORT;
    }
    else if (prixrem>300 && prixrem<500){
        PORT=prixrem*0.02;
        PAP=prixrem+PORT;

    }
    alert("La remise est de "+prixrem+"€\n"+"Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

}



 else if (TOT>500){
    REM = (10*TOT)/100;
    prixrem= TOT-REM;
    console.log(prixrem);
    if(prixrem<500){
    PORT= prixrem*0.02;
    PAP=prixrem+PORT;
    alert("La remise est de "+prixrem+"€\n"+"Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

 }

 else if (prixrem>500){
   
    console.log(prixrem);
    alert("Le prix a payé est de "+prixrem+"€\n");

    
 }
}

