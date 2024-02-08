import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <section id="notFoundContent">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner à la page d'accueil</Link>
        </section>
    );
}

export default NotFound;