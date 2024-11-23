import React from "react";
import {Link, NavLink} from "react-router-dom"; // J'importe le système de Link pour éviter le rechargement de page, on remplace les a par link

export default function Header() {
    return(   
        <header className="Header">
            <nav className="navbar navbar-expand-lg bg-dark text-uppercase text-bg-dark px-4" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-light">John Doe</Link>
                    <button className="navbar-toggler" data-bs-theme="dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link text-light mx-1 fw-bolder text-decoration-underline" : "nav-link text-light mx-1"}>Home</NavLink>
                        <NavLink to="/Services" className={({ isActive }) => isActive ? "nav-link text-light mx-1 fw-bolder text-decoration-underline" : "nav-link text-light mx-1"}>Services</NavLink>
                        <NavLink to="/Portfolio" className={({ isActive }) => isActive ? "nav-link text-light mx-1 fw-bolder text-decoration-underline" : "nav-link text-light mx-1"}>Portfolio</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => isActive ? "nav-link text-light mx-1 fw-bolder text-decoration-underline" : "nav-link text-light mx-1"}>Contact</NavLink>
                        <NavLink to="/Legals" className={({ isActive }) => isActive ? "nav-link text-light mx-1 fw-bolder text-decoration-underline" : "nav-link text-light mx-1"}>Mentions légales</NavLink>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}