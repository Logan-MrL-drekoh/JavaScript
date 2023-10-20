var html = document.getElementById("img").innerHTML;

x = parseInt(window.prompt("Entrez le premier nombre"));
y = parseInt(window.prompt("Entrez le multiplicateur:"));
function afficheimg(image){
    if(x==null || y==null)
    html=false;
   
}
function produit(x , y){
   

    var m= x*y;
    return m
}
var k =produit(2);
    

document.write("Le produit est :"+k);

