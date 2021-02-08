const express = require('express');
const contactsController = require('../controllers/contactsController');
const router = express.Router();

router.get('/', contactsController.getMainPage);
router.get('/add-user', contactsController.getAddUserPage);

router.post('/add-user', contactsController.postnewContact);
router.post('/delete-contact', contactsController.deleteContact);

module.exports = router;