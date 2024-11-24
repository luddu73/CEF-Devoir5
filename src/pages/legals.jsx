function Legals() {
    return (
      <div className="Legals">
        <div className="row justify-content-center m-auto mt-4">
            <div className="col-11 col-md-9 m-4">
                <div className="row justify-content-center">
                    <div className="col-md-9 header-services text-center">
                        <h1>Mentions légales</h1>
                        <div className="row justify-content-center">
                            <hr className="border border-primary border-3 opacity-75 col-3 col-md-6 mt-3"></hr>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Editeur du site
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="m-auto"><strong className="fs-4">John Doe</strong></p>
                                    <address>
                                        <i className="bi bi-map"></i> 40 Rue Laure Diebold<br/>
                                        <i className="bi bi-geo-alt"></i> 69009 Lyon, France<br/>
                                        <i className="bi bi-phone"></i> 06 06 06 06 06<br/>
                                        <i className="bi bi-envelope-at"></i> john.doe@gmail.com<br/>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Hébergeur
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h3>alwaysdata</h3>
                                    <address>91 Rue du Faubourg Saint-Honoré, 75008 Paris</address>
                                    <p className="pt-2"><i className="bi bi-globe"></i> <a href="https://www.alwaysdata.com" rel="noreferrer nofollow" target="_blank">www.alwaysdata.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Crédits
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h3>Crédits</h3>
                                    <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" rel="noreferrer nofollow" target="_blank">Centre Européen de formation</a>.</p>
                                    <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a className="fst-italic" rel="noreferrer nofollow" href="https://pixabay.com/fr/" target="_blank">Pixabay</a></p>
                                    <p className="fst-italic">La favicon de ce site a été fournie par <a className="fst-italic" rel="noreferrer nofollow" href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank">John doe icons erstellt von Freepik - Flaticon</a></p>
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
  