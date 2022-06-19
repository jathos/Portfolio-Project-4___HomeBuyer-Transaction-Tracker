const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks');

router.put('/:id', tasksCtrl.markComplete);

module.exports = router;