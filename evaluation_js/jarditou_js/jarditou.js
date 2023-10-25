// Attendez que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      // Réinitialise les messages d'erreur
      resetErrorMessages();
  
      // Valide le nom
      const nom = document.getElementById("nom");
      if (!validateRequiredField(nom, "erreur")) {
        event.preventDefault();
      }
  
      // Valide le prénom
      const prenom = document.getElementById("prenom");
      if (!validateRequiredField(prenom, "erreur1")) {
        event.preventDefault();
      }
  
           // Récupérer les éléments HTML par leurs ID
           const sexeFeminin = document.getElementById("sexe_f");
           const sexeMasculin = document.getElementById("sexe_m");
           const erreurMessage = document.getElementById("erreurtest");
   
           // Fonction de validation
           if (!validateRequiredField(sexeFeminin, "erreurtest")) {
            event.preventDefault();
          }
          if (!validateRequiredField(sexeFeminin, "erreurtest")) {
            event.preventDefault();
          }
           function validerSexe() {
               if (sexeFeminin.checked && sexeMasculin.checked) {
                   // Réinitialiser le message d'erreur
                   erreurMessage.textContent = "Veuillez sélectionner un sexe.";
               } else {
                   // Afficher un message d'erreur
                   erreurMessage.textContent = "Veuillez sélectionner un sexe.";
               }
           }
   
           // Associer la fonction de validation à l'événement "click" des boutons radio
           sexeFeminin.addEventListener("click", validerSexe);
           sexeMasculin.addEventListener("click", validerSexe);
  
    
  
   // Valide le code postal (Chiffres uniquement, exactement 5 chiffres)
const cp = document.getElementById("cp");
const cpRegex = /^\d{5}$/;
if (!validateRequiredField(cp, "erreur3")) {
    event.preventDefault();
}
cp.addEventListener("blur", function () {
  if (!cpRegex.test(cp.value)) {
    document.getElementById("erreur3").textContent = "Entrez un code postal valide (5 chiffres).";
  } else {
    document.getElementById("erreur3").textContent = "";
  }
});
  
      // Valide l'email
      const email = document.getElementById("email");
      if (!validateEmail(email, "erreur4")) {
        event.preventDefault();
      }
  
      // Valide le sujet
      const sujet = document.getElementById("sujet");
      if (sujet.value === "") {
        document.getElementById("erreur5").textContent = "Sujet* : Sélectionnez un sujet.";
        event.preventDefault();
      }
  
      // Valide la question
      const question = document.getElementById("question");
      if (!validateRequiredField(question, "erreur6")) {
        event.preventDefault();
      }
  
      // Valide l'acceptation des conditions
      const acceptConditions = document.getElementById("check");
      if (!acceptConditions.checked) {
        document.getElementById("erreur7").textContent = "Vous devez accepter les conditions.";
        event.preventDefault();
      }
    });
  
    // Réinitialise les messages d'erreur
    function resetErrorMessages() {
      const errorElements = document.querySelectorAll("p[id^='erreur']");
      errorElements.forEach((element) => (element.textContent = ""));
    }
  
    // Valide les champs requis
    function validateRequiredField(field, errorMessageId) {
      if (field.value.trim() === "") {
        document.getElementById(errorMessageId).textContent = "Ce champ est obligatoire.";
        return false;
      }
      return true;
    }
  
    // Valide l'adresse email
    function validateEmail(emailField, errorMessageId) {
      const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!emailPattern.test(emailField.value)) {
        document.getElementById(errorMessageId).textContent = "Veuillez entrer une adresse email valide.";
        return false;
      }
      return true;
    }
  });
  