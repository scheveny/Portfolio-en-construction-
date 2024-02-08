import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import "./Contact.css"

function Contact() {

    const [successMessage, setSuccessMessage] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Récupération des valeurs du formulaire
        const formData = new FormData(event.target);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Envoi des données du formulaire au serveur
        try {
            const response = await axios.post('http://localhost:3001/submit-form', formObject);
            console.log(response.data);
             // Afficher le message de succès
             setSuccessMessage(response.data.message);
            // Ajoutez ici la logique pour gérer la réponse du serveur si nécessaire
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire', error);
            // Ajoutez ici la logique pour gérer les erreurs si nécessaire
        }
    };

    return (
        <div className="contact">
            <div className="contact-text">
                <h2>Me contacter</h2>
                {successMessage && <p className="success-message">{successMessage}</p>}
                <span>N'hésitez pas à me contacter via ce formulaire, ou par <Link to="mailto:scheveny@gmail.com" >mail</Link>!</span>
                <Link to="mailto:scheveny@gmail.com"><FontAwesomeIcon className="mail-icon" icon={faEnvelope} /></Link>
            </div>
            <form action="#" method="post" onSubmit={handleSubmit}>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prénom" required/>

                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" required/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Entrez votre email" required/>

                <label htmlFor="objet">Objet</label>
                <input type="text" id="objet" name="objet" placeholder="Entrez l'objet de votre message" required/>

                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" placeholder="Entrez votre message" rows="10" required></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact;