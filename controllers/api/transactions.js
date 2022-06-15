const Transaction = require('../../models/transaction');

module.exports = {
    create
};

async function create(req, res) {
    const transaction = await Transaction(req.body).save();
    console.log("after transaction created in database")
    res.json(transaction);
}