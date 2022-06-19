const Transaction = require('../../models/transaction');

module.exports = {
    markComplete
};

async function markComplete(req, res) {
    const doc = await Transaction.findOne({ _id: req.body.transactionID });
    doc.tasks.id(req.body.taskID).isCompleted = true;
    doc.save();
    res.json(doc);
};