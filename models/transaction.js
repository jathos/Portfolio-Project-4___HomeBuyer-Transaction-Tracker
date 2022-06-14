const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    closeDate: Date,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})