import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/MyServices">Mes services</NavLink>
                <NavLink to="/MyWorks">Réalisations</NavLink>
                <NavLink to="/About">Me contacter</NavLink>
            </nav>
        </header>
    );
}

export default Header;
