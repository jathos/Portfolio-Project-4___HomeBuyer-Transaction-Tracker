const Contact = require('../../models/contact');
const { all } = require('../../routes/api/users');

module.exports = {
    createContact,
    getAllContacts
};

async function createContact(req, res) {
    const newContact = await Contact(req.body).save();
    res.json(newContact);
};

async function getAllContacts(req, res) {
    const allContacts = await Contact.find({});
    console.log(allContacts);
    res.json(allContacts);
}