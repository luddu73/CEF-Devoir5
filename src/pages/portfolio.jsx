import {Link} from "react-router-dom"; // J'importe le système de Link pour éviter le rechargement de page, on remplace les a par link

function Portfolio() {
    return (
      <div className="Portfolio">
        <img src="../img/banner.jpg" className="img-fluid"></img>
        <div className="row justify-content-center mt-4">
            <div className="col-11 col-md-8 m-4 text-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 header-services">
                        <h1>Portfolio</h1>
                        <p>Voici quelques-unes de mes réalisations.</p>
                        <div className="row justify-content-center">
                            <hr class="border border-primary border-3 opacity-75 col-3 col-md-9 mt-3"></hr>
                        </div>
                    </div>
                </div>
                { /* La maquette tablette indique 3 colonnes, cependant, le rendu n'étant pas optimal, je me permet de passer à deux colonnes en dessous des grands écrans */ }
                <div class="row justify-content-center row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4 mt-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/transport-manager.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h2>Transport Manager</h2>
                                <p className="card-text">Jeu en ligne sur navigateur de gestion d'un réseau de transport en commun</p>
                                <a href="https://transport-manager.net" target="_blank"><button type="button" class="btn btn-primary">Voir le site</button></a>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">Site réalisé avec PHP et MySQL</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/fresh-food.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h2>Fresh Food</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <Link to="/Portfolio"><button type="button" class="btn btn-primary">Voir le site</button></Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">Site réalisé avec WordPress</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h2>Espace bien-être</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <Link to="/Portfolio"><button type="button" class="btn btn-primary">Voir le site</button></Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">Site réalisé avec LARAVEL</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/seo.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h2>SEO</h2>
                                <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                                <Link to="/Portfolio"><button type="button" class="btn btn-primary">Voir le site</button></Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">Utilisation des outils SEO</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/coder.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h2>Création d'une API</h2>
                                <p className="card-text">Création d'une API RESTFULL publique</p>
                                <Link to="/Portfolio"><button type="button" class="btn btn-primary">Voir le site</button></Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">PHP - SYMFONY</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/screens.jpg" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h2>Maquette d'un site web</h2>
                                <p className="card-text">Création du prototype d'un site</p>
                                <Link to="/Portfolio"><button type="button" class="btn btn-primary">Voir le site</button></Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">Réalisé avec FIGMA</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Portfolio;
  