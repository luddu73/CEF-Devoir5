function Legals() {
    return (
      <div className="Legals">
        <div className="row justify-content-center mt-4">
            <div className="col-11 col-md-9 m-4">
                <div className="row justify-content-center">
                    <div className="col-md-9 header-services text-center">
                        <h1>Mentions légales</h1>
                        <div className="row justify-content-center">
                            <hr class="border border-primary border-3 opacity-75 col-3 col-md-6 mt-3"></hr>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Editeur du site
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="m-auto"><strong className="fs-4">John Doe</strong></p>
                                <p>
                                    <adress>
                                        <i class="bi bi-map"></i> 40 Rue Laure Diebold<br/>
                                        <i class="bi bi-geo-alt"></i> 69009 Lyon, France<br/>
                                        <i class="bi bi-phone"></i> 06 06 06 06 06<br/>
                                        <i class="bi bi-envelope-at"></i> john.doe@gmail.com<br/>
                                    </adress>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h3>alwaysdata</h3>
                                <adress>91 Rue du Faubourg Saint-Honoré, 75008 Paris</adress>
                                <p className="pt-2"><i class="bi bi-globe"></i> <a href="https://www.alwaysdata.com" target="_blank">www.alwaysdata.com</a></p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h3>Crédits</h3>
                                <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank">Centre Européen de formation</a>.</p>
                                <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a className="fst-italic" href="https://pixabay.com/fr/" target="_blank">Pixabay</a></p>
                                <p className="fst-italic">La favicon de ce site a été fournie par <a className="fst-italic" href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank">John doe icons erstellt von Freepik - Flaticon</a></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Legals;
  