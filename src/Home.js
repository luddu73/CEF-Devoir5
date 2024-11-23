function Home() {
  return (
    <div className="Home">
      <div className="home-Banner text-light text-center d-flex flex-column align-items-center justify-content-center">
          <h2 className="home-name">Bonjour, je suis John Doe</h2>
          <h1 className="home-poste">Développeur Web Full Stack</h1>
          <button type="button" className="btn btn-danger px-4 mt-4">En savoir plus</button>
      </div>
      <div className="row justify-content-center">
        <div className="col-9">
          <div className="row shadow-lg p-3 m-5 bg-body-tertiary rounded home-presentation">
            <div className="col-6 p-4">
              <h3 className="pb-2">A propos</h3>
              <img src="/img/john-doe-about.jpg" className="img-fluid my-3"></img>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros eget augue tincidunt vehicula. Integer iaculis elementum eleifend. 
                Vestibulum et magna ac quam feugiat sagittis ac tristique metus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros eget augue tincidunt vehicula. Integer iaculis elementum eleifend. 
                Vestibulum et magna ac quam feugiat sagittis ac tristique metus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae eros eget augue tincidunt vehicula. Integer iaculis elementum eleifend. 
                Vestibulum et magna ac quam feugiat sagittis ac tristique metus. </p>
            </div>
            <div className="col-6 p-4">
            <h3 className="pb-2">Mes compétences</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
