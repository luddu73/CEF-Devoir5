import {Link} from "react-router-dom"; // J'importe le système de Link pour éviter le rechargement de page, on remplace les a par link

export default function Footer() {
    return(   
        <footer className="Footer">
            <div className="container-expend bg-dark py-4 m-auto row justify-content-center bottom">
                <div className="col-11">
                    <div className="row justify-content-center text-light m-4">
                        <div className="col-md-3 py-1 px-3">
                            <p className="m-auto"><strong className="fs-4">John Doe</strong></p>
                            <address className="m-auto">
                                <a href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786656,4.794108,16z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                                 rel="noreferrer nofollow" target="_blank" className="text-light link-underline link-underline-opacity-0">
                                40 Rue Laure Diebold<br/>
                                69009 Lyon, France</a><br/>
                                <a href="tel:0606060606" className="text-light link-underline link-underline-opacity-0">06 06 06 06 06</a><br/>
                                <a href="mailto:john.doe@gmail.com" className="text-light link-underline link-underline-opacity-0">john.doe@gmail.com</a>
                            </address>
                            <div className="my-2">
                                <a href="https://github.com/luddu73"  rel="noreferrer nofollow" target="_blank" className="text-light"><i className="bi bi-github socialnetwork"></i></a> 
                                <a href="https://x.com/LudovicCarril"  rel="noreferrer nofollow" target="_blank" className="text-light"><i className="bi bi-twitter socialnetwork"></i></a>
                                <a href="https://fr.linkedin.com/in/ludovic-carril-377b34116"  rel="noreferrer nofollow" target="_blank" className="text-light"><i className="bi bi-linkedin socialnetwork"></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 p-1">
                            <p className="m-auto fs-4">Liens utiles</p>
                            <ul className="list-unstyled" >
                                <li><Link to="/" className="nav-link text-light mx-1">Accueil</Link></li>
                                <li><Link to="/Services" className="nav-link text-light mx-1">Services</Link></li>
                                <li><Link to="/Portfolio" className="nav-link text-light mx-1">Portfolio</Link></li>
                                <li><Link to="/Contact" className="nav-link text-light mx-1">Me contacter</Link></li>
                                <li><Link to="/Legals" rel="nofollow" className="nav-link text-light mx-1">Mentions légales</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 p-1"> 
                            <p className="m-auto fs-4">Mes dernières réalisations</p>
                            <ul className="list-unstyled">
                                <li><Link to="https://transport-manager.net" rel="nofollow" target="_blank" className="nav-link text-light mx-1">Transport Manager</Link></li> {/*Personnalisation de ce site*/}
                                <li><Link to="/Portfolio" className="nav-link text-light mx-1">Fresh Food</Link></li>
                                <li><Link to="/Portfolio" className="nav-link text-light mx-1">Espace bien-être</Link></li>
                                <li><Link to="/Portfolio" className="nav-link text-light mx-1">SEO</Link></li>
                                <li><Link to="/Portfolio" className="nav-link text-light mx-1">Creation d'une API</Link></li>
                                <li><Link to="/Portfolio" className="nav-link text-light mx-1">Maquette d'un site</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}