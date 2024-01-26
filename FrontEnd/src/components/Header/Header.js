import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/About">Nos jeux</NavLink>
                <NavLink to="/About">Partenaires</NavLink>
                <NavLink to="/About">À Propos</NavLink>
            </nav>
            <form action="#" method="GET">
                <input type="text" placeholder="Rechercher un jeu..." />
                <FontAwesomeIcon icon={faSearch} />
            </form>
        </header>
    );
}

export default Header;
