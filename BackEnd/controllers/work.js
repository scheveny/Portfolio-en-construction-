const Work = require('../models/work');
const fs = require('fs');
const sharp = require('sharp');

exports.createWork = (req, res, next) => {
    const workObject = JSON.parse(req.body.work);
    delete workObject._id;
    delete workObject.userId;

    // Redimensionne l'image, la convertit en webp et supprime l'image originale
    sharp(req.file.path)
        .resize(700)
        .webp({ quality: 60 })
        .toFile(`images/${req.file.filename}.webp`, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Image resized and converted to webp successfully');
                fs.unlink(req.file.path, err => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Original image deleted successfully');

                        const work = new Work({
                            ...workObject,
                            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}.webp`, 
                            userId: req.auth.userId,
                          });

                          work.save()
                          .then(() => res.status(201).json({ message: 'Livre enregistré avec succès !' })) 
                          .catch(error => res.status(400).json({ erreur: error }));
                    }
                });
            }
        });
  };


exports.getWorks = (req, res, next) => {
    Work.find()
        .then((works) => {
            res.status(200).json(works);
        })
        .catch((error) => {
            res.status(400).json({
                erreur: error
            });
        });
};
  
exports.getOneWork = (req, res, next) => {
    Work.findOne({
        _id: req.params.id
    }).then(
        (work) => {
            res.status(200).json(work);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                erreur: error 
            });
        }
    );
};

exports.deleteWork = (req, res, next) => {
    Work.findOne({_id: req.params.id})
        .then(work => {
            if (work.userId !== req.auth.userId) {
                res.status(403).json({message: 'Requête non autorisée !'});
            } else {
                const filename = work.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Work.deleteOne({_id: req.params.id})
                        .then(() => res.status(200).json({message: 'Livre supprimé avec succès !'}))
                        .catch(error => res.status(400).json({ erreur: error }));
                });
            }
        })
        .catch(error => res.status(500).json({ erreur: error }));
};