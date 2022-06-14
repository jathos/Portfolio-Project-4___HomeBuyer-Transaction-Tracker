const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    street: String,
    city: String,
    state: { type: String, maxlength: 2 },
    zip: String,
    closeDate: Date,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

transactionSchema.virtual('address').get(function () {
    return (this.city + ", " + this.state.toUpperCase() + " " + this.zip)
})

module.exports = mongoose.model('Transaction', transactionSchema)