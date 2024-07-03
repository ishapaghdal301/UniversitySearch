const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
    uni_id: {
        type: String,
        // required: true,
        unique: true
    },
    uni_name: {
        type: String,
        required: true
    },
    uni_country:{
        type: String,
        required: true
    },
    uni_state:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

UniversitySchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model('University', UniversitySchema);