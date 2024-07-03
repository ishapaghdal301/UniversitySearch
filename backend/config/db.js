
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ishapaghdal:ishapaghdal@university.kjlzg5k.mongodb.net/Universities?retryWrites=true&w=majority');
        console.log('connected');
    }
    catch (err) {
        console.error(' Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;