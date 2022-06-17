const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    subject: { type: String, required: true },
    body: { type: String, required: true },
    dueDate: { type: Date, required: true },
    isUrgent: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false }
});

const transactionSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, maxlength: 2, required: true },
    zip: { type: String, required: true },
    closeDate: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    tasks: [taskSchema]
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

transactionSchema.virtual('address').get(function () {
    return (this.city + ", " + this.state.toUpperCase() + " " + this.zip)
});

module.exports = mongoose.model('Transaction', transactionSchema)