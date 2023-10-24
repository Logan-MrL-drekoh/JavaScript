var validation = document.getElementById('btn_envoi');
var nom = document.getElementById('nom');
var nom_m = document.getElementById('nom_manquant');
var nom_v = /^[a-zA-ZéèîïÉÈÎÏ] [a-zéèêàçîï]+([-'\s] [a-zA-ZéèîïÉÈÎÏ] [a-zéèêàçîï]+)?/
var prenom = document.getElementById('prenom');
var prenom_m = document.getElementById('prenom_manquant');





validation.addEventListener('click',f_valid);

function f_valid(e){
    if (nom.validity.valueMissing) {
        e.preventDefault();
        nom_m.textContent ='Nom manquant';
        nom_m.style.color = 'red';
        }
    else if (nom_v.test(nom.value) ==false){
        Event.preventDefault();
        nom_m.textContent = 'Format incorrect';
    }
        else{

        }
}
