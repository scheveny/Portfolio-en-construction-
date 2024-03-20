import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from './Header.module.css';
import * as PropTypes from 'prop-types';

function Header({ user, setUser }) {
    const navigate = useNavigate();
    const disconnect = () => {
      localStorage.clear();
      setUser(null);
      navigate('/');
    };
    return (
        <header>
            <nav>
                <NavLink to="/" end className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Accueil</NavLink>
                <NavLink to="/Service">Mes services</NavLink>
                <NavLink to="/Works">Mes Réalisations</NavLink>
                <NavLink to="/Contact">Me contacter</NavLink>
                {!user ? <NavLink to="/Connexion" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Se connecter</NavLink> : <span tabIndex={0} role="button" onKeyUp={disconnect} onClick={disconnect}>Se déconnecter</span> }
            </nav>
        </header>
    );
}

Header.propTypes = {
    user: PropTypes.shape({
      userId: PropTypes.string,
      token: PropTypes.string,
    }),
    setUser: PropTypes.func.isRequired,
  };
  
  Header.defaultProps = {
    user: null,
  };

export default Header;
