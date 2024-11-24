function Services() {

    document.title = "Services - John Doe, Développeur web full stack";

    const metaRobots = document.querySelector("meta[name='robots']");
    metaRobots.content="index";
    
    return (
      <div className="Services">
        <img src="../img/banner.jpg" className="img-fluid" alt="Bannière représentant une illustration abstraite de faisceaux lumineux bleus sur un fond sombre, 
                                                                représentant un flux d'énergie ou de données."></img>
        <div className="row justify-content-center m-auto mt-4">
            <div className="col-11 col-md-8 m-4 text-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 header-services">
                        <h1>Mon offre de services</h1>
                        <p>Voici les prestations sur lesquelles je peux intervenir</p>
                        <div className="row justify-content-center">
                            <hr className="border border-primary border-3 opacity-75 col-3 col-md-9 mt-3"></hr>
                        </div>
                    </div>
                </div>
                { /* La maquette tablette indique 3 colonnes, cependant, le rendu n'étant pas optimal notamment pour le titre de la seconde card, je me permet de passer 
                à deux colonnes en dessous des grands écrans */ }
                <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4 mt-4">
                    <div className="col">
                        <div className="card h-100">
                        <i className="bi bi-brush icon-services text-primary p-3"></i>
                        <div className="card-body">
                            <h2>UX Design</h2>
                            <p className="card-text">L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.)
                                en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <i className="bi bi-code-slash icon-services text-primary p-3"></i>
                        <div className="card-body">
                            <h2>Développement web</h2>
                            <p className="card-text">Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation
                                (HTML, CSS, Javascript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <i className="bi bi-search icon-services text-primary p-3"></i>
                        <div className="card-body">
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