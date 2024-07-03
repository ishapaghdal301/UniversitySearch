const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
    state_id: {
        type: String,
        // required: true,
        unique: true
    },
    state_name: {
        type: String,
        required: true
    },
    country :  { type: Schema.Types.ObjectId, ref: "Country" },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

StateSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model('State', StateSchema);