const express = require('express');
const router = express.Router();
const contactsCtrl = require('../../controllers/api/contacts');

router.post('/', contactsCtrl.createContact);

module.exports = router;