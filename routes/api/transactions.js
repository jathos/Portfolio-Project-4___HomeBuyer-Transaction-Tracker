const express = require('express');
const router = express.Router();
const transactionsCtrl = require('../../controllers/api/transactions');

router.get('/', transactionsCtrl.getAll);
router.get('/user', transactionsCtrl.getUserTransactions);
router.post('/', transactionsCtrl.create);
router.put('/', transactionsCtrl.assignUser);

module.exports = router;