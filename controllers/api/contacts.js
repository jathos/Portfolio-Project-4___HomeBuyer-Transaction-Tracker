const Contact = require('../../models/contact');

module.exports = {
    createContact
};

async function createContact(req, res) {
    const newContact = await Contact(req.body).save();
    res.json(newContact);
};