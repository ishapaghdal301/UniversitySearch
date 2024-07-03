const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    country_id: {
        type: String,
        // required: true,
        unique: true
    },
    country_name: {
        type: String,
        required: true
    },
    state :   { type: Schema.Types.ObjectId, ref: "State" },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

CountrySchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model('Country', CountrySchema);