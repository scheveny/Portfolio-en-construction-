import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="footer-menu">
                    <div className="address">
                        <h2>Mes coordonnées</h2>
                        <span>07 69 28 06 08</span>
                        <Link to="mailto:scheveny@gmail.com" >scheveny@gmail.com</Link>
                        <div className="socials">
                            <Link to="https://www.linkedin.com/in/sylvain-ch%C3%A9veny-500326183/" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            <Link to="https://github.com/scheveny?tab=repositories" className="social-link"><FontAwesomeIcon icon={faGithub} /></Link>
                        </div>
                    </div>
                <div className="headings">
                    <h2>Rubriques</h2>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/Service">Mes services</Link></li>
                        <li><Link to="/Works">Réalisations</Link></li>
                        <li><Link to="/Contact">Contactez-moi</Link></li>
                    </ul>
                </div>
            </div>
            <p>Mentions Légales - Site réalisé par Sylvain Chéveny © 2024 Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;