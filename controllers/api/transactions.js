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
    const allTransactions = await Transaction.find({}).sort('closeDate');
    res.json(allTransactions);
};

async function assignUser(req, res) {
    const doc = await Transaction.findOne({ _id: req.body.id });
    doc.user = req.body.user;
    await doc.save();
    res.json(doc);
};