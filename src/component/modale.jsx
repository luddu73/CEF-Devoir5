import React, {useState, useEffect} from "react"; // Je créer un hook useState pour stocker un état

function ProfilGitHub() {

    const [user,UserInfo] = useState([]); // Je déclare mon état, où je stocke la valeur (pseudo utilisateur) et la méthode qui va changer (UserInfo) la valeur est le hook de React, 
                                            // je défini un tableau vide

    const getUserInfo = async () => { // Je créer une fonction asynchrone pour récupérer les utilisateurs
    const res = await fetch("https://api.github.com/users/luddu73"); // j'exécute la requête (variable res pour response)
    const json = await res.json(); // Je récupère le JSON (les données) de ma réponse
    UserInfo(json); // je met les données dans mon tableau de users
    }

  useEffect(() => {
    getUserInfo(); // Je lance la fonction au démarrage de l'appli
  },[]) // Si tableau vide s'exécutera au montage du composan

  return (
    <div className="ProfilGitHub">
        <div className="modal" tabindex="-1" id="github"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-dark text-light modal-border-white">
                    <div className="modal-header">
                        <h5 className="modal-title">Mon profil GitHub</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li><a href={user.html_url} target="_blank">{user.login}</a></li>
                                <li>{user.location}</li>
                                <li>{user.bio}</li>
                                <li>Repositories : {user.public_repos}</li>
                                <li>Followers : {user.followers}</li>
                                <li>Following : {user.following}</li>
                            </ul>
                        </div>
                    </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default ProfilGitHub;
