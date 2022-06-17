const Transaction = require('../../models/transaction');
const User = require('../../models/user');

module.exports = {
    create,
    getAll,
    assignUser,
    getUserTransactions,
    createTask,
    createMessage
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

async function getUserTransactions(req, res) {
    const doc = await Transaction.find({ user: req.user._id });
    console.log(doc);
    res.json(doc);
};

async function createTask(req, res) {
    const doc = await Transaction.findOne({ _id: req.body.id });
    const urgency = (req.body.isUrgent == "on") ? true : false;
    const newTask = {
        subject: req.body.subject,
        body: req.body.body,
        dueDate: req.body.dueDate,
        isUrgent: urgency
    };
    doc.tasks.push(newTask);
    await doc.save();
    res.json(newTask);
};

async function createMessage(req, res) {
    const doc = await Transaction.findOne({ _id: req.body.transactionID });
    const recipient = (req.user.isAdmin == true ? "Client" : "Agent");
    const newMessage = {
        recipient: recipient,
        body: req.body.body,
        unread: true
    }
    doc.tasks.id(req.body.taskID).messages.push(newMessage);
    doc.save();
    res.json(newMessage);
}