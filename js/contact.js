const form = document.querySelector('form');

const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function envoyerMail() {
    const bodyMessage = `Nom Complet : ${fullName.value} <br> 
                         Email:       ${email.value} <br> 
                         Message:     ${message.value}`;

    Email.send({
        SecureToken: "3452bf47-f7a0-4f59-a465-592762a27f26",
        To: 'boama561@gmail.com',
        From: "boama561@gmail.com",
        Subject: "Confirmation de votre demande ✔️",
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Succès!",
                    text: "Message envoyé avec succès!",
                    icon: "success",
                    confirmButtonColor: "#6c5ce7",
                    confirmButtonText: "OK"
                });
            }
        }
    ).catch(
        error => alert("Erreur: " + error)
    );
}

function verifierLesInputs() {
        const items = document.querySelectorAll('.contact_input');
        for (const contact_input of items) {
            if (contact_input.value == "") {
                contact_input.classList.add('error');
                contact_input.parentElement.classList.add('error');
            }

            if  (items[1].value != ""){
                checkEmail();
            } 
            items[1].addEventListener("keyup", () => {
                checkEmail();
            });
            
            contact_input.addEventListener("keyup", () => {
                if (contact_input.value != "") {
                    contact_input.classList.remove('error');
                    contact_input.parentElement.classList.remove('error');
                }
                else {
                    contact_input.classList.add('error');
                    contact_input.parentElement.classList.add('error')
                }
            })
        }
    }

function checkEmail(){
    const emailRegrex = /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
 //                   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegrex)) {
        email.classList.add("error")
        email.parentElement.classList.add("error")

        if(email.value != ""){
            errorTxtEmail.innerText = "Entrer une adresse mail valide"
        }else{
            errorTxtEmail.innerText = "Ce champ ne peut être vide"
        }
    }else {
        email.classList.remove("error");
        email.parentElement.classList.remove('error')
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    verifierLesInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !message.classList.contains("error")) {
        console.log('OK');
    }
envoyerMail();

form.reset();
return false;
    // document.getElementById("contact-form").reset();  une maniere de reinitialiser la saisie des donnees de l'utilisateur

});
