const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const nodemailer = require('nodemailer');
require('dotenv').config();

//Handle DB connection
const { DB_USER, DB_PASSWORD, DB_CLUSTER, DB_NAME } = process.env;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


// Middleware pour gérer les erreurs CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Middleware pour traiter le corps de la requête en tant que JSON
app.use(express.json());

app.use('/api/auth', userRoutes);

// Configuration du transporter pour le nouveau compte Outlook
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.OUTLOOK_USER,
    pass: process.env.OUTLOOK_PASSWORD
  }
});

// Route pour gérer la soumission du formulaire
app.post('/submit-form', (req, res) => {
    try {
      const { prenom, nom, email, objet, message } = req.body;
  
      // Configuration du message à envoyer
      const mailOptions = {
        from: 'chevenyportfolio@hotmail.com',
        to: 'tchev@hotmail.fr',
        subject: objet,
        text: `De: ${prenom} ${nom}\nEmail: ${email}\nMessage: ${message}`
      };
  
      // Envoi du message
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Erreur lors de l\'envoi du mail', error);
          res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du formulaire' });
        } else {
          console.log('Email envoyé avec succès:', info.response);
  
          // Modification de la réponse pour indiquer le succès
          res.status(200).json({ success: true, message: 'Message envoyé avec succès!' });
        }
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire', error);
      res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du formulaire' });
    }
  });

module.exports = app;
