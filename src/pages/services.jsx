function Services() {
    return (
      <div className="Services">
        <div className="pages-Banner text-light text-center d-flex flex-column align-items-center justify-content-center">
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8 m-4 text-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 header-services">
                        <h1>Mon offre de services</h1>
                        <p>Voici les prestations sur lesquelles je peux intervenir</p>
                        <hr class="border border-primary border-3 opacity-75"></hr>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                        <i className="bi bi-brush icon-services text-primary p-3"></i>
                        <div class="card-body">
                            <h2>UX Design</h2>
                            <p className="card-text">L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.)
                                en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <i className="bi bi-code-slash icon-services text-primary p-3"></i>
                        <div class="card-body">
                            <h2>Développement web</h2>
                            <p className="card-text">Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation
                                (HTML, CSS, Javascript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <i className="bi bi-search icon-services text-primary p-3"></i>
                        <div class="card-body">
                            <h2>Référencement</h2>
                            <p className="card-text">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web
                                pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). 
                                L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  