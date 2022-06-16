const Transaction = require('../../models/transaction');

module.exports = {
    create,
    getAll,
    assignUser
};

async function create(req, res) {
    const transaction = await Transaction(req.body).save();
    res.json(transaction);
};

async function getAll(req, res) {
    const allTransactions = await Transaction.find({}).sort('closeDate')
    res.json(allTransactions);
};

async function assignUser(req, res) {
    console.log("made it to the controller")
    console.log("user id: ", req.body.user, " transaction id: ", req.body.id)
    const doc = await Transaction.findOne({ _id: req.body.id });
    console.log("BEFORE", doc);
    doc.user = req.body.user;
    console.log("AFTER", doc);
    await doc.save();
    res.json(doc);
};