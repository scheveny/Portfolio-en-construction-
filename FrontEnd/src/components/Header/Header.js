import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/Service">Mes services</NavLink>
                <NavLink to="/Works">Réalisations</NavLink>
                <NavLink to="/Contact">Me contacter</NavLink>
            </nav>
        </header>
    );
}

export default Header;
