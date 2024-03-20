const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();

const workCtrl = require('../controllers/work');

router.get('/', workCtrl.getWorks);
router.get('/:id', workCtrl.getOneWork);
router.post('/', auth, multer, workCtrl.createWork);
router.delete('/:id', auth, workCtrl.deleteWork);

module.exports = router;