import {Link} from "react-router-dom"; // J'importe le système de Link pour éviter le rechargement de page, on remplace les a par link

function Portfolio() {
    return (
      <div className="Portfolio">
        <img src="../img/banner.jpg" className="img-fluid" alt="Bannière représentant une illustration abstraite de faisceaux lumineux bleus sur un fond sombre, 
                                                                représentant un flux d'énergie ou de données."></img>
        <div className="row justify-content-center m-auto mt-4">
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
                            <img src="../img/portfolio/transport-manager.jpg" class="card-img-top" alt="Aperçu du site Transport Manager"></img>
                            <div class="card-body">
                                <h2>Transport Manager</h2>
                                <p className="card-text">Jeu en ligne sur navigateur de gestion d'un réseau de transport en commun</p>
                                <a href="https://transport-manager.net" rel="noreferrer nofollow" target="_blank" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">Site réalisé avec PHP et MySQL</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/fresh-food.jpg" class="card-img-top" alt="Une petite caisse avec des légumes à l'intérieur"></img>
                            <div class="card-body">
                                <h2>Fresh Food</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <Link to="/Portfolio" className="btn btn-primary">Voir le site</Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">Site réalisé avec WordPress</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="Une statut de Bouddha avec une fleur rose, à sa droite, des galets empilée en équilibre.
                                                                                                        Au fond, un coucher de soleil"></img>
                            <div class="card-body">
                                <h2>Espace bien-être</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <Link to="/Portfolio" className="btn btn-primary">Voir le site</Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">Site réalisé avec LARAVEL</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/seo.jpg" class="card-img-top" alt="SEO écrit au centre en gros. Tout autour, de nombreuses définitions rattachées comme
                                                                                        Responsive Design, E-Commerce, Marketing, Search Engine,..."></img>
                            <div class="card-body">
                                <h2>SEO</h2>
                                <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                                <Link to="/Portfolio" className="btn btn-primary">Voir le site</Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">Utilisation des outils SEO</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/coder.jpg" class="card-img-top" alt="Des lignes de code d'un site internet"></img>
                            <div class="card-body">
                                <h2>Création d'une API</h2>
                                <p className="card-text">Création d'une API RESTFULL publique</p>
                                <Link to="/Portfolio" className="btn btn-primary">Voir le site</Link>
                            </div>
                            <div class="card-footer">
                                <small class="text-center text-body-secondary">PHP - SYMFONY</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../img/portfolio/screens.jpg" class="card-img-top" alt="Deux ordinateurs et une tablette sur un bureau. On aperçois la maquette 
                                                                                            d'un site sur la tablette"></img>
                            <div class="card-body">
                                <h2>Maquette d'un site web</h2>
                                <p className="card-text">Création du prototype d'un site</p>
                                <Link to="/Portfolio" className="btn btn-primary">Voir le site</Link>
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
  