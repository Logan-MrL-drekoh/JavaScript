var validation = document.getElementById('btn_envoi');
var nom = document.getElementById('nom');
var nom_m = document.getElementById('nom_manquant');
validation.addEventListener('click',f_valid);

function f_valid(e){
    if (nom.validity.valueMissing) {
        e.preventDefault();
        nom_m.textContent ='Nom manquant';
        nom_m.style.color = 'red';

    }
}