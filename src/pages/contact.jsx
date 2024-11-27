/* eslint-disable jsx-a11y/iframe-has-title */
function Contact() {

    document.title = "Contact - John Doe, Développeur web full stack";
    // Mise à jour du titre de la page web

    const metaRobots = document.querySelector("meta[name='robots']");
    metaRobots.content="index";
    // Mise à jour de la balise meta afin d'indexer la page web
    
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
                        <form className="row my-4" method="post" action="#">
                            <div className="input-group my-1">
                                <input type="text" className="form-control" id="nom" aria-describedby="nom" placeholder="Votre nom" required></input>
                            </div>
                            <div className="input-group my-1">
                                <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Votre adresse email" required></input>
                            </div>
                            <div className="input-group my-1">
                                <input type="tel" className="form-control" id="tel" aria-describedby="tel" placeholder="Votre numéro de téléphone" required></input>
                            </div>
                            <div className="input-group my-1">
                                <input type="text" className="form-control" id="sujet" aria-describedby="sujet" placeholder="Sujet" required></input>
                            </div>
                            <div className="my-1">
                                <textarea className="form-control ratio" style={{height:"400px"}} placeholder="Votre message" id="message"></textarea>
                            </div>
                            <div className="col-12 my-2 text-center">
                                <button className="btn btn-primary" type="submit">Envoyer</button>
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
  