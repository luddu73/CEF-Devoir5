import React from "react";

export default function Header() {
    return(   
        <div className="Header">
            <nav className="navbar navbar-expand-lg bg-dark text-uppercase text-bg-dark px-4" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light">John Doe</a>
                    <button className="navbar-toggler" data-bs-theme="dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link text-light mx-1">Home</a>
                        <a className="nav-link text-light mx-1">Services</a>
                        <a className="nav-link text-light mx-1">Portfolio</a>
                        <a className="nav-link text-light mx-1">Contact</a>
                        <a className="nav-link text-light mx-1">Mentions légales</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}