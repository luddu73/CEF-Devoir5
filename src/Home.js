function Home() {
  return (
    <div className="Home">
      <div className="home-Banner text-light text-center d-flex flex-column align-items-center justify-content-center m-auto">
      { /* Classe home-banner pour affichage de l'entète avec l'image attendue par le client */ }
          <h2 className="home-name">Bonjour, je suis John Doe</h2> 
          { /* Je positionne John Doe en h2, car c'est une info moins importante que la poste, dans sa recherche le visiteur recherche un développeur, pas John Doe */ }
          <h1 className="home-poste">Développeur Web Full Stack</h1>
          <button type="button" className="btn btn-danger px-4 mt-4" data-bs-target="#github" data-bs-toggle="modal">En savoir plus</button>
      </div>
      <div className="row justify-content-center m-auto">
        <div className="col-md-8 m-4">
        { /* Je définis la taille de mon conteneur principal, 8/12 colonnes centrées */ }
          <div className="row shadow-lg p-4 m-3 bg-body-tertiary rounded home-presentation">
            <div className="col-md-6 py-4">
            { /* Mon conteneur est composé de 2 sections, de 6 colonnes chacune */ }
              <h3 className="pb-2 fs-2">A propos</h3>
              <img src="/img/john-doe-about.jpg" className="img-fluid my-3" alt="Un homme dans un bureau qui semble regarder ce qui doit être un organiteur"></img>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros eget augue tincidunt vehicula. Integer iaculis elementum eleifend. 
                Vestibulum et magna ac quam feugiat sagittis ac tristique metus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros eget augue tincidunt vehicula. Integer iaculis elementum eleifend. 
                Vestibulum et magna ac quam feugiat sagittis ac tristique metus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros eget augue tincidunt vehicula. Integer iaculis elementum eleifend. 
                Vestibulum et magna ac quam feugiat sagittis ac tristique metus. </p>
            </div>
            { /* ---- Début de la seconde partie ---- */ }
            <div className="col-md-6 py-4">
              <h3 className="pb-2 fs-2">Mes compétences</h3>
              <p className="my-4"><strong>HTML5 90%</strong>
                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                </div>
              </p>
              <p className="my-4"><strong>CSS3 80%</strong>
                <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                </div>
              </p>
              <p className="my-4"><strong>JAVASCRIPT 70%</strong>
                <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                </div>
              </p>
              <p className="my-4"><strong>PHP 60%</strong>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                </div>
              </p>
              <p className="my-4"><strong>REACT 50%</strong>
                <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{width: "50%"}}></div>
                </div>
              </p>
            </div>
            { /* ---- Fin de la seconde partie ---- */ }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
