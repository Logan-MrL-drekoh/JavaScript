function afficheimg(image){
    if(x==null || y==null)
    html=false;
   
}
function produit(nb1,nb2){
    var m= nb1*nb2;
    return m;
}

var html = document.getElementById("img").innerHTML;

var x = parseInt(window.prompt("Entrez le premier nombre"));
var y = parseInt(window.prompt("Entrez le multiplicateur:"));
var k =produit(x,y);
    

document.getElementById("text").innerHTML = "Le produit est :"+k;




afficheimg();