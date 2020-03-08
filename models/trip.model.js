const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    total_dayse: {
        type: Number
    },
    note: {
        type: string
    }
})

const User = mongoose.model('Trip', tripSchema);
module.exports = Trip;