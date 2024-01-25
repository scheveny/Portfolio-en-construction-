import React from "react";
import Logo from "../../assets/logo_footer.png";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="footer-menu">
                <div className="logo-subsection">
                <img src={Logo} alt="Logo Shop ton jeu" />
                    <div className="address">
                        <span>11, rue du Maupertuis</span>
                        <span>63670 Le Cendre</span>
                    </div>
                    <div className="socials">
                        <Link to="/youtube" className="social-link"><FontAwesomeIcon icon={faYoutube} /></Link>
                        <Link to="/instagram" className="social-link"><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="/facebook" className="social-link"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link to="/X" className="social-link"><FontAwesomeIcon icon={faTwitter} /></Link>
                    </div>
                </div>
                <div className="headings">
                    <h2>Rubriques</h2>
                    <ul>
                        <li><Link to="#">Nos jeux</Link></li>
                        <li><Link to="#">La boutique</Link></li>
                        <li><Link to="#">Conditions générales de vente</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>Contact</h2>
                    <div>
                        <span>Pour toutes informations, sur nos produits, événementiel, ... n'hésitez pas</span>
                        <Link to="#">Contactez-nous</Link>
                    </div>
                    <Link to="#">SAV</Link>
                </div>
            </div>
            <p>Mentions Légales - Site réalisé par Sylvain Chéveny © 2024 Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;