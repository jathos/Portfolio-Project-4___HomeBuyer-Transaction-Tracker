const Transaction = require('../../models/transaction');

module.exports = {
    create,
    getAll
};

async function create(req, res) {
    const transaction = await Transaction(req.body).save();
    res.json(transaction);
};

async function getAll(req, res) {
    const allTransactions = await Transaction.find({}).sort('closeDate')
    res.json(allTransactions);
}