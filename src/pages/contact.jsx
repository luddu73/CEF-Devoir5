/* eslint-disable jsx-a11y/iframe-has-title */
function Contact() {

    document.title = "Contact - John Doe, Développeur web full stack";
    // Mise à jour du titre de la page web

    const metaRobots = document.querySelector("meta[name='robots']");
    metaRobots.content="index";
    // Mise à jour de la balise meta afin d'indexer la page web

    let pasok = 0; // Variable initiale qui ne bloque pas le formulaire

    function verifEmail(email) // Fonction qui permet de vérifier la structure d'un mail
    {
        const emailVerification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider les emails, inspirer sur internet
        return emailVerification.test(email);
    }

    function verifTel(tel) // Fonction qui permet de vérifier la structure d'un numéro de téléphone
    {
        const telVerification = /^[0-9]{10}$/; // J'accepte des chiffres uniquement d'une longueur de 10
        return telVerification.test(tel);
    }

    function addErrorInfo(parametre,texte) // Fonction qui permet d'ajouter une information d'erreur sur le formulaire
    {
        let input = document.getElementById(parametre);
        if(!document.getElementById('invalid'+parametre))
        {
            let alertDiv = document.createElement("div");
            let contenuAlertDiv = document.createTextNode("Vous devez saisir " +texte); 
            alertDiv.appendChild(contenuAlertDiv); // Mon texte est enfant de ma nouvelle div
            alertDiv.setAttribute("class", "invalid-feedback"); // J'ajoute à ma div une class
            alertDiv.setAttribute("id", "invalid"+parametre); // ainsi qu'un ID
            alertDiv.style.display = "flex"; // Je met à jour le style qui est par défaut sur none
            input.after(alertDiv); // Ma nouvelle div est ajoutée à la suite de l'input
            pasok = 1;
        }
    }
    function removeErrorInfo(parametre) // Fonction qui retire l'information d'erreur sur le formulaire
    {
        let formDiv = document.getElementById("form"+parametre);
        if(document.getElementById('invalid'+parametre)) // Si le nom n'est pas vide et un élement à cet ID
        {
            let invalidDiv = document.getElementById("invalid"+parametre); // Je récupère la div 
            invalidDiv.remove(); // et l'a supprime

            formDiv.classList.remove("class", "was-validated"); // J'enlève la class de l'effet rouge
        }
    }

    function UpdateForm(parametre,texte) // A chaque modification dans le formulaire, cette fonction se lance
    {
        let input = document.getElementById(parametre);
        console.log(parametre);
        if(parametre === "Email") // Pour le paramètre email, je lance une vérification spéciale liée à la validité de l'email
        {
            const emailInput = document.getElementById("Email").value;
            if(!verifEmail(emailInput)) 
            {
                addErrorInfo(parametre,texte);
            }
            else
            {
                removeErrorInfo(parametre);
            }
        }
        else if(parametre === "Tel")
        {
            const telInput = document.getElementById("Tel").value;
            if(!verifTel(telInput)) 
            {
                addErrorInfo(parametre,texte);
            }
            else
            {
                removeErrorInfo(parametre);
            }
        }
        else if(input.value === "")
        {
            addErrorInfo(parametre,texte);
        }
        else
        {
            removeErrorInfo(parametre);
        }
    }


    function checkForm() // Lors du clique je relance l'ensemble des contrôles
    {
        pasok = 0;
        UpdateForm("Nom","votre nom.");
        UpdateForm("Email","votre adresse email.");
        UpdateForm("Tel","votre numéro de téléphone.");
        UpdateForm("Sujet","un sujet à votre message.");
        UpdateForm("Message","un message.");
        if(pasok !== 1) // Si je n'ai pas de valeur à 1, alors je considère que le formulaire est ok
        {
            alert("Votre formulaire a bien été envoyé !");
        }
    }



    return (
      <div className="Contact">
        <div className="row justify-content-center m-auto mt-4">
            <div className="col-11 col-md-9 m-4">
                <div className="row justify-content-center text-center">
                    <div className="col-md-9 header-services">
                        <h1>Contact</h1>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                        <div className="row justify-content-center">
                            <hr className="border border-primary border-3 opacity-75 col-3 col-md-6 mt-3"></hr>
                        </div>
                    </div>
                </div>

                <div className="row shadow-lg p-4 m-3 bg-body-tertiary rounded home-presentation">
                    <div className="col-md-6 py-4">
                        <h2 className="pb-2 fs-2 mb-4">Formulaire de contact</h2>
                        <form className="row my-4">
                            <div className="input-group my-1" id="formNom">
                                <input type="text" className="form-control" id="Nom" aria-describedby="Nom" placeholder="Votre nom" onChange={() => UpdateForm("Nom","votre nom.")} required></input>
                            </div>
                            <div className="input-group my-1" id="formEmail">
                                <input type="email" className="form-control" id="Email" aria-describedby="Email" placeholder="Votre adresse email" onChange={() => UpdateForm("Email","votre adresse email.")} required></input>
                            </div>
                            <div className="input-group my-1" id="formTel">
                                <input type="tel" className="form-control" id="Tel" aria-describedby="Tel" placeholder="Votre numéro de téléphone" onChange={() => UpdateForm("Tel","votre numéro de téléphone.")} required></input>
                            </div>
                            <div className="input-group my-1" id="formSujet">
                                <input type="text" className="form-control" id="Sujet" aria-describedby="Sujet" placeholder="Sujet" onChange={() => UpdateForm("Sujet","un sujet à votre message.")} required></input>
                            </div>
                            <div className="my-1" id="formMessage"v>
                                <textarea className="form-control ratio" style={{height:"400px"}} placeholder="Votre message" id="Message" onChange={() => UpdateForm("Message","votre message.")} required></textarea>
                            </div>
                            <div className="col-12 my-2 text-center">
                                <button className="btn btn-primary" onClick={() => checkForm()} type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 py-4">
                        <h2 className="pb-2 fs-2 mb-4">Mes coordonnées</h2>
                        <p className="m-auto"><strong className="fs-4">John Doe</strong></p>
                        <address>
                            <i className="bi bi-map"></i> 40 Rue Laure Diebold<br/>
                            <i className="bi bi-geo-alt"></i> 69009 Lyon, France<br/>
                            <i className="bi bi-phone"></i> 06 06 06 06 06<br/>
                            <i className="bi bi-envelope-at"></i> john.doe@gmail.com<br/>
                        </address>
                        <div className="my-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.2543020379735!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold!5e0!3m2!1sfr!2sfr!4v1732464160990!5m2!1sfr!2sfr" 
                            width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="ratio"></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  